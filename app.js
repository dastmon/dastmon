// === KONFIGURASI: URL Web App (berakhiran /exec) ===
const API_URL = 'https://script.google.com/macros/s/AKfycbyDoByjuZsbhlTykBp6RjQQQvEHqwcusB9rc5EKB6BaSm1l27Bz-vkkHS0Zm43u8n9gMw/exec';
const REFRESH_MS = 5 * 60 * 1000;
const PER = 10; // baris per halaman

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const svg = (p, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

// ---------- Kelas TailAdmin yang dipakai ulang ----------
const CARD = 'rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]';
const H3 = 'text-lg font-semibold text-gray-800 dark:text-white/90';
const SUB = 'text-theme-sm text-gray-500 dark:text-gray-400';
const BTN = 'inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-brand-300';
const BTN_O = 'inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]';
const SEL = 'h-10 rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-700 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400';

// ---------- Menu ----------
const MENU = [
  ['trending', 'Trending', '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>', [['us', 'US Day Trends'], ['teepublic', 'TeePublic']]],
  ['saham', 'Saham', '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>', [['teknologi', 'Teknologi'], ['tambang', 'Tambang'], ['kesehatan', 'Kesehatan']]],
  ['gold', 'Gold', '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 10h4.5a1.5 1.5 0 010 3H9"/>', [['pegadaian', 'Pegadaian'], ['galeri24', 'Galeri 24'], ['hartadinata', 'Hartadinata']]]
];
const ON = 'bg-brand-50 text-brand-500 dark:bg-brand-500/[0.12] dark:text-brand-400';
const OFF = 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5';
const SUM = 'flex cursor-pointer list-none items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium [&::-webkit-details-marker]:hidden ';
const SUBA = 'relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-theme-sm font-medium ';

$('nav').innerHTML = MENU.map(([g, l, ic, subs]) =>
  `<details open class="group/m"><summary data-g="${g}" class="${SUM}${OFF}">${svg(ic)}<span>${l}</span>
    <span class="ml-auto transition-transform duration-200 group-open/m:rotate-180">${svg('<path d="M6 9l6 6 6-6"/>', 18)}</span></summary>
    <ul class="mt-2 space-y-1 pb-2 pl-9">${subs.map(([s, sl]) => `<li><a href="#${g}/${s}" data-r="${g}/${s}" class="${SUBA}${OFF}">${sl}</a></li>`).join('')}</ul></details>`).join('');

// ---------- Risiko copyright ----------
const RISK = {
  High: ['High Risk', 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500', '#f04438'],
  Medium: ['Medium', 'bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-warning-500', '#f79009'],
  Low: ['Low Risk', 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500', '#12b76a'],
  Unknown: ['Unknown', 'bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-white/80', '#98a2b3']
};
const nk = v => { v = String(v || '').toLowerCase(); return v === 'high' ? 'High' : v === 'medium' ? 'Medium' : v === 'low' ? 'Low' : 'Unknown'; };
const badge = v => `<span class="inline-block rounded-full px-2 py-0.5 text-theme-xs font-medium ${RISK[nk(v)][1]}">${RISK[nk(v)][0]}</span>`;

// ---------- Sel tabel ----------
const T1 = t => `<span class="block text-theme-sm font-medium text-gray-800 dark:text-white/90">${t}</span>`;
const T2 = t => `<span class="block text-theme-sm text-gray-500 dark:text-gray-400">${t}</span>`;
const TB = t => `<span class="block text-theme-sm font-medium text-brand-500 dark:text-brand-400">${t}</span>`;
const TS = t => `<span class="block whitespace-nowrap text-theme-xs text-gray-400">${t}</span>`;

const DATA = {
  'trending/us': {
    key: 'trends', job: 'trends', cat: r => r.category, risk: r => r.copyright,
    cols: [
      ['Rank', r => T2(esc(r.rank)), 'text-center'],
      ['Trending Topic', r => T1(esc(r.topic))],
      ['Kategori AI', r => T2(esc(r.category))],
      ['Deskripsi AI', r => T2(esc(r.desc)), 'min-w-64'],
      ['Copyright (perkiraan AI)', r => badge(r.copyright), 'text-center'],
      ['Scraped At', r => TS(esc(r.timestamp))]]
  },
  'trending/teepublic': {
    key: 'teepublic', job: 'teepublic', cat: r => r.niche, risk: r => r.copyright,
    cols: [
      ['#', (r, i) => T2(i), 'text-center'],
      ['Tag', r => TB(esc(r.tag))],
      ['AI Category', r => T2(esc(r.niche))],
      ['Analisis AI', r => T2(esc(r.analysis)), 'min-w-64'],
      ['Copyright (perkiraan AI)', r => badge(r.copyright), 'text-center'],
      ['Scraped At', r => TS(esc(r.timestamp))]]
  }
};

let data = null, route = '', pg = 0;
const charts = {};
const say = t => { const m = $('msg'); if (m) m.textContent = t; };
const labels = r => { const [g, s] = r.split('/'); const m = MENU.find(x => x[0] === g); return [m?.[1] || '', m?.[3].find(x => x[0] === s)?.[1] || '']; };

// ---------- Sidebar mobile & tema ----------
const side = $('side');
const toggleSide = open => { side.classList.toggle('-translate-x-full', !open); $('ov').classList.toggle('hidden', !open); };
$('burger').onclick = () => toggleSide(true);
$('ov').onclick = () => toggleSide(false);
$('theme').onclick = () => {
  const d = document.documentElement.classList.toggle('dark');
  localStorage.setItem('dastmon_theme', d ? 'dark' : 'light');
  update();
};

// ---------- Router ----------
function go() {
  route = location.hash.slice(1) || 'trending/us';
  const g = route.split('/')[0];
  document.querySelectorAll('#nav a').forEach(a => a.className = SUBA + (a.dataset.r === route ? ON : OFF));
  document.querySelectorAll('#nav summary').forEach(s => s.className = SUM + (s.dataset.g === g ? ON : OFF));
  toggleSide(false);
  Object.values(charts).forEach(c => c.destroy());
  for (const k in charts) delete charts[k];
  pg = 0;
  const d = DATA[route];
  if (d) shell(d); else soon();
  update();
}

const crumb = (sub, extra = '') => {
  const [g, s] = labels(route);
  return `<div class="mb-6 flex flex-wrap items-center justify-between gap-3">
    <h2 class="text-xl font-semibold text-gray-800 dark:text-white/90">${esc(s)}</h2>
    <div class="flex items-center gap-3">${extra}
      <nav><ol class="flex items-center gap-1.5">
        <li class="text-sm text-gray-500 dark:text-gray-400">Home</li>
        <li class="text-gray-400">${svg('<path d="M9 6l6 6-6 6"/>', 16)}</li>
        <li class="text-sm text-gray-500 dark:text-gray-400">${esc(g)}</li>
        <li class="text-gray-400">${svg('<path d="M9 6l6 6-6 6"/>', 16)}</li>
        <li class="text-sm text-gray-800 dark:text-white/90">${esc(s)}</li>
      </ol></nav></div></div>`;
};

function soon() {
  $('view').innerHTML = crumb() + `<div class="${CARD} min-h-[320px] px-5 py-7 xl:px-10 xl:py-12">
    <div class="mx-auto w-full max-w-[630px] text-center">
      <h3 class="mb-4 text-theme-xl font-semibold text-gray-800 dark:text-white/90 sm:text-2xl">Data belum tersedia</h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 sm:text-base">Menu ini belum punya sumber data. Tambahkan scraper dan sheet di backend (code.gs), lalu daftarkan di <code>DATA</code> pada app.js agar chart dan tabel muncul di sini.</p>
    </div></div>`;
}

function shell(d) {
  $('view').innerHTML = crumb('', `<button id="run" class="${BTN}">${svg('<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>', 18)}Jalankan scraper</button>`) + `
    <p id="msg" class="mb-4 min-h-5 text-theme-sm text-gray-500 dark:text-gray-400"></p>
    <div id="stats" class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 md:gap-6"></div>
    <div class="mt-6 grid grid-cols-12 gap-4 md:gap-6">
      <div class="${CARD} col-span-12 p-5 sm:p-6 xl:col-span-8"><h3 class="${H3}">Distribusi kategori</h3><p class="${SUB} mb-4">Jumlah data per kategori hasil analisis AI</p><div id="c1"></div></div>
      <div class="${CARD} col-span-12 p-5 sm:p-6 xl:col-span-4"><h3 class="${H3}">Risiko copyright</h3><p class="${SUB} mb-4">Perkiraan AI, bukan nasihat hukum</p><div id="c2"></div></div>
    </div>
    <div class="${CARD} mt-6 overflow-hidden px-4 pb-3 pt-4 sm:px-6">
      <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div><h3 class="${H3}">Data</h3><p id="count" class="${SUB}"></p></div>
        <select id="rf" class="${SEL}"><option value="">Semua risiko</option><option>High</option><option>Medium</option><option>Low</option><option>Unknown</option></select>
      </div>
      <div class="max-w-full overflow-x-auto"><table class="min-w-full"><thead id="thead" class="border-y border-gray-100 dark:border-gray-800"></thead><tbody id="tbody" class="divide-y divide-gray-100 dark:divide-gray-800"></tbody></table></div>
      <div id="pager" class="flex items-center justify-between gap-3 border-t border-gray-100 py-4 dark:border-gray-800"></div>
    </div>`;
  $('run').onclick = () => runJob(d.job);
  $('rf').onchange = () => { pg = 0; update(); };
}

// ---------- Chart (gaya ApexCharts TailAdmin) ----------
const count = (rows, f) => rows.reduce((m, r) => { const k = f(r); m[k] = (m[k] || 0) + 1; return m; }, {});

function draw(id, opt) {
  const dark = document.documentElement.classList.contains('dark');
  charts[id]?.destroy();
  charts[id] = new ApexCharts($(id), {
    ...opt,
    chart: { fontFamily: 'Outfit, sans-serif', toolbar: { show: false }, foreColor: dark ? '#98a2b3' : '#667085', background: 'transparent', ...opt.chart },
    theme: { mode: dark ? 'dark' : 'light' },
    grid: { borderColor: dark ? '#1d2939' : '#e4e7ec', xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } },
    stroke: opt.stroke || { show: false },
    legend: { position: 'bottom', fontSize: '14px', markers: { size: 5 } }
  });
  charts[id].render();
}

const icons = {
  total: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  cat: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  high: '<path d="M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/>',
  low: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/>'
};

// ---------- Render dinamis ----------
function update() {
  const d = DATA[route];
  if (!d || !$('stats')) return;
  const all = data?.[d.key] || [];
  const risks = count(all, r => nk(d.risk(r)));
  const cats = Object.entries(count(all.filter(r => d.cat(r) && d.cat(r) !== '-'), d.cat)).sort((a, b) => b[1] - a[1]);
  const pct = n => all.length ? Math.round(n / all.length * 100) + '%' : '0%';

  const cards = [
    ['Total data', all.length, icons.total, ''],
    ['Kategori', cats.length, icons.cat, ''],
    ['High risk', risks.High || 0, icons.high, `<span class="flex items-center gap-1 rounded-full bg-error-50 py-0.5 pl-2 pr-2.5 text-sm font-medium text-error-600 dark:bg-error-500/15 dark:text-error-500">${pct(risks.High || 0)}</span>`],
    ['Low risk', risks.Low || 0, icons.low, `<span class="flex items-center gap-1 rounded-full bg-success-50 py-0.5 pl-2 pr-2.5 text-sm font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">${pct(risks.Low || 0)}</span>`]
  ];
  $('stats').innerHTML = cards.map(([l, v, ic, b]) => `<div class="${CARD} p-5 md:p-6">
    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white/90">${svg(ic, 24)}</div>
    <div class="mt-5 flex items-end justify-between"><div><span class="text-sm text-gray-500 dark:text-gray-400">${l}</span>
    <h4 class="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">${esc(v)}</h4></div>${b}</div></div>`).join('');

  if (cats.length) {
    draw('c1', {
      chart: { type: 'bar', height: Math.max(280, cats.length * 38) },
      plotOptions: { bar: { horizontal: true, barHeight: '55%', borderRadius: 5, borderRadiusApplication: 'end' } },
      series: [{ name: 'Jumlah', data: cats.map(c => c[1]) }],
      xaxis: { categories: cats.map(c => c[0]), axisBorder: { show: false }, axisTicks: { show: false } },
      colors: ['#465fff'], dataLabels: { enabled: false }
    });
  } else { charts.c1?.destroy(); delete charts.c1; $('c1').innerHTML = `<p class="${SUB}">Belum ada data kategori.</p>`; }

  const keys = Object.keys(RISK);
  if (all.length) {
    draw('c2', {
      chart: { type: 'donut', height: 320 },
      series: keys.map(k => risks[k] || 0), labels: keys.map(k => RISK[k][0]), colors: keys.map(k => RISK[k][2]),
      dataLabels: { enabled: false },
      plotOptions: { pie: { donut: { size: '72%', labels: { show: true, value: { fontSize: '28px', fontWeight: 700 }, total: { show: true, label: 'Total' } } } } }
    });
  } else { charts.c2?.destroy(); delete charts.c2; $('c2').innerHTML = `<p class="${SUB}">Belum ada data.</p>`; }

  const q = $('gq').value.toLowerCase(), f = $('rf').value;
  const rows = all.filter(r => (!f || nk(d.risk(r)) === f) && (!q || Object.values(r).join(' ').toLowerCase().includes(q)));
  const pages = Math.max(1, Math.ceil(rows.length / PER));
  pg = Math.min(pg, pages - 1);
  const from = pg * PER, part = rows.slice(from, from + PER);

  $('count').textContent = `${rows.length} dari ${all.length} data`;
  $('thead').innerHTML = `<tr>${d.cols.map(c => `<th class="px-3 py-3 ${c[2] || 'text-start'} whitespace-nowrap text-theme-xs font-medium text-gray-500 dark:text-gray-400">${c[0]}</th>`).join('')}</tr>`;
  $('tbody').innerHTML = part.length
    ? part.map((r, i) => `<tr>${d.cols.map(c => `<td class="px-3 py-3 ${c[2] || ''}">${c[1](r, from + i + 1)}</td>`).join('')}</tr>`).join('')
    : `<tr><td colspan="${d.cols.length}" class="px-3 py-10 text-center ${SUB}">Tidak ada data.</td></tr>`;
  $('pager').innerHTML = `<span class="${SUB}">${rows.length ? `Menampilkan ${from + 1}–${from + part.length} dari ${rows.length}` : '0 data'}</span>
    <div class="flex gap-2"><button class="${BTN_O}" data-pg="-1" ${pg === 0 ? 'disabled' : ''}>Sebelumnya</button>
    <button class="${BTN_O}" data-pg="1" ${pg >= pages - 1 ? 'disabled' : ''}>Berikutnya</button></div>`;
}

$('view').addEventListener('click', e => {
  const b = e.target.closest('[data-pg]');
  if (b) { pg += Number(b.dataset.pg); update(); }
});
$('gq').oninput = () => { pg = 0; update(); };

// ---------- API ----------
async function load() {
  say('Memuat data…');
  try {
    const res = await fetch(`${API_URL}?action=data`);
    const json = await res.json();
    if (!json.ok) throw new Error(json.error);
    data = json;
    $('updated').textContent = json.updatedAt;
    say('');
    update();
  } catch (e) { say('Gagal memuat: ' + e.message); }
}

async function runJob(job) {
  const token = sessionStorage.getItem('dastmon_token') || prompt('Masukkan ADMIN_TOKEN:');
  if (!token) return;
  $('run').disabled = true;
  say('Scraper berjalan, bisa beberapa menit…');
  try {
    // Tanpa header Content-Type => text/plain => tidak ada preflight CORS
    const res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action: 'run', job, token }) });
    const json = await res.json();
    if (!json.ok) { sessionStorage.removeItem('dastmon_token'); throw new Error(json.error); }
    sessionStorage.setItem('dastmon_token', token);
    await load();
    say(`✅ ${json.count} data diperbarui.`);
  } catch (e) { say('❌ ' + e.message); }
  if ($('run')) $('run').disabled = false;
}

$('sync').onclick = load;
window.addEventListener('hashchange', go);
go();
load();
setInterval(load, REFRESH_MS);
