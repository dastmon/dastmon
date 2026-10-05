// === KONFIGURASI: tempel URL Web App (berakhiran /exec) ===
const API_URL = 'https://script.google.com/macros/s/AKfycbyDoByjuZsbhlTykBp6RjQQQvEHqwcusB9rc5EKB6BaSm1l27Bz-vkkHS0Zm43u8n9gMw/exec';
const REFRESH_MS = 5 * 60 * 1000;

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const RISK = {
  high: ['High Risk', 'bg-rose-500/10 text-rose-400 border-rose-500/20'],
  medium: ['Medium', 'bg-amber-500/10 text-amber-300 border-amber-500/20'],
  low: ['Low Risk', 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20']
};
const badge = l => {
  const [t, c] = RISK[String(l || '').toLowerCase()] || ['Unknown', 'bg-slate-500/10 text-slate-400 border-slate-500/20'];
  return `<span class="px-2.5 py-1 text-xs font-semibold rounded-full border ${c}">${t}</span>`;
};

// Definisi tabel: [judul, render(row, index), class]
const TABS = {
  trends: { label: 'US Day Trends', key: 'trends', cols: [
    ['Rank', r => esc(r.rank), 'text-center w-16'],
    ['Trending Topic', r => esc(r.topic), 'font-semibold text-white'],
    ['Kategori AI', r => esc(r.category)],
    ['Deskripsi AI', r => esc(r.desc), 'text-slate-400'],
    ['Copyright (perkiraan AI)', r => badge(r.copyright), 'text-center'],
    ['Scraped At', r => esc(r.timestamp), 'text-right text-xs font-mono text-slate-500']] },
  teepublic: { label: 'TeePublic Tags', key: 'teepublic', cols: [
    ['#', (r, i) => i + 1, 'text-center w-16'],
    ['Tag', r => esc(r.tag), 'font-semibold text-emerald-400'],
    ['AI Category', r => esc(r.niche)],
    ['Analisis AI', r => esc(r.analysis), 'text-slate-400'],
    ['Copyright (perkiraan AI)', r => badge(r.copyright), 'text-center'],
    ['Scraped At', r => esc(r.timestamp), 'text-right text-xs font-mono text-slate-500']] }
};

let data = null, tab = 'trends';

async function load() {
  $('msg').textContent = 'Memuat data…';
  try {
    const res = await fetch(`${API_URL}?action=data`);
    const json = await res.json();
    if (!json.ok) throw new Error(json.error);
    data = json;
    $('updated').textContent = json.updatedAt;
    $('msg').textContent = '';
    render();
  } catch (e) { $('msg').textContent = 'Gagal memuat: ' + e.message; }
}

function render() {
  const s = data?.stats || {};
  $('stats').innerHTML = [['Day Trends', s.totalTrends], ['Kategori', s.trendCategories], ['Tag TeePublic', s.totalTeeTags], ['Kategori Tee', s.teeNiches]]
    .map(([l, v]) => `<div class="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4"><p class="text-xs text-slate-400">${l}</p><p class="text-2xl font-bold mt-1">${esc(v ?? '--')}</p></div>`).join('');

  $('tabs').innerHTML = Object.entries(TABS).map(([id, t]) =>
    `<button data-tab="${id}" class="pb-2 border-b-2 ${id === tab ? 'border-indigo-500 text-indigo-400 font-semibold' : 'border-transparent text-slate-400'}">${t.label}</button>`).join('');

  const t = TABS[tab], q = $('q').value.toLowerCase();
  const rows = (data?.[t.key] || []).filter(r => !q || Object.values(r).join(' ').toLowerCase().includes(q));
  $('thead').innerHTML = `<tr class="bg-slate-800/80 text-xs uppercase text-slate-300">${t.cols.map(c => `<th class="px-5 py-3">${c[0]}</th>`).join('')}</tr>`;
  $('tbody').innerHTML = rows.length
    ? rows.map((r, i) => `<tr class="hover:bg-slate-800/40">${t.cols.map(c => `<td class="px-5 py-3 ${c[2] || ''}">${c[1](r, i)}</td>`).join('')}</tr>`).join('')
    : `<tr><td colspan="${t.cols.length}" class="px-5 py-8 text-center text-slate-500">Tidak ada data.</td></tr>`;
}

async function runJob(job) {
  if (!job) return;
  const token = sessionStorage.getItem('dastmon_token') || prompt('Masukkan ADMIN_TOKEN:');
  if (!token) { $('job').value = ''; return; }
  $('msg').textContent = 'Scraper berjalan, bisa beberapa menit…';
  try {
    // Tanpa header Content-Type => text/plain => tidak ada preflight CORS
    const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'run', job, token }) });
    const json = await res.json();
    if (!json.ok) { sessionStorage.removeItem('dastmon_token'); throw new Error(json.error); }
    sessionStorage.setItem('dastmon_token', token);
    await load();
    $('msg').textContent = `✅ ${json.count} data diperbarui.`;
  } catch (e) { $('msg').textContent = '❌ ' + e.message; }
  $('job').value = '';
}

$('tabs').addEventListener('click', e => { if (e.target.dataset.tab) { tab = e.target.dataset.tab; render(); } });
$('q').addEventListener('input', render);
$('sync').addEventListener('click', load);
$('job').addEventListener('change', e => runJob(e.target.value));
load();
setInterval(load, REFRESH_MS);
