// === KONFIGURASI: URL Web App (berakhiran /exec) ===
const API_URL = 'https://script.google.com/macros/s/AKfycbyDoByjuZsbhlTykBp6RjQQQvEHqwcusB9rc5EKB6BaSm1l27Bz-vkkHS0Zm43u8n9gMw/exec';
const REFRESH_MS = 5 * 60 * 1000;
const PER = 15; // baris per halaman

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------- Menu ----------
const ICON = {
  trending: '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
  saham: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
  gold: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 10h4.5a1.5 1.5 0 010 3H9"/>'
};
const MENU = [
  ['trending', 'Trending', [['us', 'US Day Trends'], ['teepublic', 'TeePublic']]],
  ['saham', 'Saham', [['teknologi', 'Teknologi'], ['tambang', 'Tambang'], ['kesehatan', 'Kesehatan']]],
  ['gold', 'Gold', [['pegadaian', 'Pegadaian'], ['galeri24', 'Galeri 24'], ['hartadinata', 'Hartadinata']]]
];

// ---------- Risiko copyright ----------
const RISK = { High: ['High Risk', '#f04438'], Medium: ['Medium', '#f79009'], Low: ['Low Risk', '#12b76a'], Unknown: ['Unknown', '#98a2b3'] };
const nk = v => { v = String(v || '').toLowerCase(); return v === 'high' ? 'High' : v === 'medium' ? 'Medium' : v === 'low' ? 'Low' : 'Unknown'; };
const badge = v => { const [t, c] = RISK[nk(v)]; return `<span class="pill" style="background:${c}1f;color:${c}">${t}</span>`; };

// ---------- Halaman data ----------
const DATA = {
  'trending/us': {
    key: 'trends', job: 'trends', cat: r => r.category, risk: r => r.copyright,
    cols: [
      ['Rank', r => esc(r.rank), 'c'],
      ['Trending Topic', r => esc(r.topic), 'b'],
      ['Kategori AI', r => esc(r.category)],
      ['Deskripsi AI', r => esc(r.desc), 'm'],
      ['Copyright (perkiraan AI)', r => badge(r.copyright), 'c'],
      ['Scraped At', r => esc(r.timestamp), 'mono']]
  },
  'trending/teepublic': {
    key: 'teepublic', job: 'teepublic', cat: r => r.niche, risk: r => r.copyright,
    cols: [
      ['#', (r, i) => i, 'c'],
      ['Tag', r => esc(r.tag), 'brand'],
      ['AI Category', r => esc(r.niche)],
      ['Analisis AI', r => esc(r.analysis), 'm'],
      ['Copyright (perkiraan AI)', r => badge(r.copyright), 'c'],
      ['Scraped At', r => esc(r.timestamp), 'mono']]
  }
};

let data = null, route = '', pg = 0;
const charts = {};
const say = t => { const m = $('msg'); if (m) m.textContent = t; };
const titleOf = r => { const [g, s] = r.split('/'); const m = MENU.find(x => x[0] === g); return m ? `${m[1]} · ${m[2].find(x => x[0] === s)?.[1] || ''}` : ''; };

// ---------- Sidebar ----------
$('nav').innerHTML = MENU.map(([g, l, subs]) =>
  `<details open class="grp"><summary><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON[g]}</svg>${l}<span class="chev">▾</span></summary>` +
  subs.map(([s, sl]) => `<a href="#${g}/${s}" data-r="${g}/${s}">${sl}</a>`).join('') + `</details>`).join('');

const closeSide = () => $('side').classList.remove('open');
$('burger').onclick = () => $('side').classList.add('open');
$('ov').onclick = closeSide;

// ---------- Tema ----------
if (localStorage.getItem('dastmon_theme') === 'dark') document.documentElement.classList.add('dark');
$('theme').onclick = () => {
  const d = document.documentElement.classList.toggle('dark');
  localStorage.setItem('dastmon_theme', d ? 'dark' : 'light');
  update();
};

// ---------- Router ----------
function go() {
  route = location.hash.slice(1) || 'trending/us';
  document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('on', a.dataset.r === route));
  closeSide();
  Object.values(charts).forEach(c => c.destroy());
  for (const k in charts) delete charts[k];
  pg = 0;
  const d = DATA[route];
  if (d) shell(d); else soon();
  update();
}

function soon() {
  $('view').innerHTML = `<h2 style="font-size:22px;font-weight:600;margin:0 0 16px">${esc(titleOf(route))}</h2>
    <div class="card"><h3>Data belum tersedia</h3>
    <p class="mu">Menu ini belum punya sumber data. Tambahkan scraper dan sheet di backend (code.gs), lalu daftarkan di <code>DATA</code> pada app.js agar chart dan tabel muncul di sini.</p></div>`;
}

function shell(d) {
  $('view').innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h2 style="font-size:22px;font-weight:600;margin:0">${esc(titleOf(route))}</h2>
      <button id="run" class="btn">⚡ Jalankan scraper</button>
    </div>
    <p id="msg" class="mu" style="min-height:20px;margin:8px 0"></p>
    <div id="stats" class="grid grid-cols-2 lg:grid-cols-4 gap-4"></div>
    <div class="grid lg:grid-cols-3 gap-4 mt-4">
      <div class="card lg:col-span-2"><h3>Distribusi kategori</h3><div id="c1"></div></div>
      <div class="card"><h3>Tingkat risiko copyright</h3><div id="c2"></div></div>
    </div>
    <div class="card mt-4" style="padding:0;overflow:hidden">
      <div class="flex flex-wrap items-center justify-between gap-3" style="padding:20px">
        <h3 style="margin:0">Data</h3>
        <div class="flex gap-2">
          <select id="rf"><option value="">Semua risiko</option><option>High</option><option>Medium</option><option>Low</option><option>Unknown</option></select>
          <input id="q" placeholder="Cari…">
        </div>
      </div>
      <div style="overflow-x:auto"><table><thead id="thead"></thead><tbody id="tbody"></tbody></table></div>
      <div id="pager" class="flex items-center justify-between gap-3" style="padding:16px 20px;border-top:1px solid var(--bd)"></div>
    </div>`;
  $('run').onclick = () => runJob(d.job);
  $('q').oninput = () => { pg = 0; update(); };
  $('rf').onchange = () => { pg = 0; update(); };
}

// ---------- Chart ----------
const count = (rows, f) => rows.reduce((m, r) => { const k = f(r); m[k] = (m[k] || 0) + 1; return m; }, {});

function draw(id, opt) {
  const dark = document.documentElement.classList.contains('dark');
  charts[id]?.destroy();
  charts[id] = new ApexCharts($(id), {
    ...opt,
    chart: { fontFamily: 'Outfit, sans-serif', toolbar: { show: false }, foreColor: dark ? '#98a2b3' : '#667085', background: 'transparent', ...opt.chart },
    theme: { mode: dark ? 'dark' : 'light' },
    grid: { borderColor: dark ? '#1d2939' : '#e4e7ec' },
    stroke: opt.stroke || { width: 0 },
    legend: { position: 'bottom' }
  });
  charts[id].render();
}

// ---------- Render dinamis ----------
function update() {
  const d = DATA[route];
  if (!d || !$('stats')) return;
  const all = data?.[d.key] || [];
  const risks = count(all, r => nk(d.risk(r)));
  const cats = Object.entries(count(all.filter(r => d.cat(r) && d.cat(r) !== '-'), d.cat)).sort((a, b) => b[1] - a[1]);

  $('stats').innerHTML = [['Total data', all.length], ['Kategori', cats.length], ['High risk', risks.High || 0], ['Low risk', risks.Low || 0]]
    .map(([l, v]) => `<div class="card"><p class="mu">${l}</p><p class="big">${esc(v)}</p></div>`).join('');

  if (all.length && cats.length) {
    draw('c1', {
      chart: { type: 'bar', height: Math.max(260, cats.length * 36) },
      plotOptions: { bar: { horizontal: true, borderRadius: 4, barHeight: '60%' } },
      series: [{ name: 'Jumlah', data: cats.map(c => c[1]) }],
      xaxis: { categories: cats.map(c => c[0]) },
      colors: ['#465fff'], dataLabels: { enabled: false }
    });
  } else { charts.c1?.destroy(); delete charts.c1; $('c1').innerHTML = '<p class="mu">Belum ada data kategori.</p>'; }

  const keys = Object.keys(RISK);
  if (all.length) {
    draw('c2', {
      chart: { type: 'donut', height: 300 },
      series: keys.map(k => risks[k] || 0), labels: keys.map(k => RISK[k][0]), colors: keys.map(k => RISK[k][1]),
      dataLabels: { enabled: false }, plotOptions: { pie: { donut: { size: '70%' } } }
    });
  } else { charts.c2?.destroy(); delete charts.c2; $('c2').innerHTML = '<p class="mu">Belum ada data.</p>'; }

  const q = $('q').value.toLowerCase(), f = $('rf').value;
  const rows = all.filter(r => (!f || nk(d.risk(r)) === f) && (!q || Object.values(r).join(' ').toLowerCase().includes(q)));
  const pages = Math.max(1, Math.ceil(rows.length / PER));
  pg = Math.min(pg, pages - 1);
  const from = pg * PER, part = rows.slice(from, from + PER);

  $('thead').innerHTML = `<tr>${d.cols.map(c => `<th>${c[0]}</th>`).join('')}</tr>`;
  $('tbody').innerHTML = part.length
    ? part.map((r, i) => `<tr>${d.cols.map(c => `<td class="${c[2] || ''}">${c[1](r, from + i + 1)}</td>`).join('')}</tr>`).join('')
    : `<tr><td colspan="${d.cols.length}" class="c m" style="padding:32px">Tidak ada data.</td></tr>`;
  $('pager').innerHTML = `<span class="mu">${rows.length ? `${from + 1}–${from + part.length} dari ${rows.length}` : '0 data'}</span>
    <div class="flex gap-2"><button class="btn o" data-pg="-1" ${pg === 0 ? 'disabled' : ''}>Sebelumnya</button>
    <button class="btn o" data-pg="1" ${pg >= pages - 1 ? 'disabled' : ''}>Berikutnya</button></div>`;
}

$('view').addEventListener('click', e => {
  const b = e.target.closest('[data-pg]');
  if (b) { pg += Number(b.dataset.pg); update(); }
});

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
