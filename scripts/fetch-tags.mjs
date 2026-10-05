// Mengambil daftar tag TeePublic lalu mengirimnya ke backend Apps Script (action: "import").
// Hanya membaca bagian di antara kalimat disclaimer ("...organization referred to below.")
// dan "View TeePublic reviews on Trustpilot", sehingga link menu/footer tidak ikut.
const { API_URL, ADMIN_TOKEN, DRY_RUN } = process.env;
const SOURCE = 'https://www.teepublic.com/tag-directory';
const EXPECTED = 199; // jumlah tag valid yang diharapkan (hanya untuk peringatan di log)

const toTitle = slug => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
const decode = s => s.replace(/&amp;/g, '&').replace(/&#0?39;|&apos;/g, "'").replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');

function diagnose(html) {
  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]?.trim();
  const hrefs = [...html.matchAll(/<a\b[^>]*?href=["']([^"']+)["']/gi)].map(m => m[1]);
  console.log('--- DIAGNOSIS ---');
  console.log('Panjang HTML :', html.length);
  console.log('Title        :', title);
  console.log('Jumlah <a>   :', hrefs.length);
  console.log('Contoh href  :', hrefs.slice(0, 25));
  console.log('Ada "referred to below":', /referred\s+to\s+below/i.test(html), '| Ada "Trustpilot":', /trustpilot/i.test(html));
  console.log('-----------------');
}

async function getTags() {
  const res = await fetch(SOURCE, {
    headers: { 'User-Agent': 'DASTMON-fetcher/1.0', 'Accept': 'text/html' }
  });
  console.log(`HTTP ${res.status} dari ${SOURCE}`);
  if (!res.ok) {
    console.error('Diblokir/gagal. Jika 403, IP GitHub juga ditolak: pakai opsi komputer sendiri.');
    process.exit(1);
  }
  const html = await res.text();

  // Potong ke bagian daftar tag saja
  const startM = /referred\s+to\s+below\.?/i.exec(html);
  if (!startM) {
    console.error('Penanda awal ("...organization referred to below.") tidak ditemukan.');
    diagnose(html);
    process.exit(1);
  }
  const rest = html.slice(startM.index + startM[0].length);
  const endM = /View TeePublic reviews on Trustpilot/i.exec(rest) || /trustpilot/i.exec(rest);
  if (!endM) console.warn('Peringatan: penanda akhir (Trustpilot) tidak ditemukan, memakai sisa halaman.');
  const section = endM ? rest.slice(0, endM.index) : rest;

  const re = /<a\b[^>]*?href=["'](?:https?:\/\/(?:www\.)?teepublic\.com)?\/t-shirts\/([^"'?#\s>]+)[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi;
  const seen = new Set(), tags = [];
  for (const m of section.matchAll(re)) {
    const text = decode(m[2].replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
    const t = text || toTitle(m[1]);
    if (t.length > 1 && !seen.has(t)) { seen.add(t); tags.push(t); }
  }
  if (!tags.length) diagnose(html);
  return tags;
}

const tags = await getTags();
console.log(`Ditemukan ${tags.length} tag (diharapkan ${EXPECTED}).`);
console.log('Awal :', tags.slice(0, 3), '| Akhir:', tags.slice(-3));
if (tags.length !== EXPECTED) console.warn(`Peringatan: jumlah tag berbeda dari ${EXPECTED}. Periksa log di atas.`);
if (!tags.length) { console.error('Tidak ada tag (struktur halaman mungkin berubah).'); process.exit(1); }

if (DRY_RUN === 'true') { console.log('DRY_RUN: tidak mengirim ke backend.'); process.exit(0); }
if (!API_URL || !ADMIN_TOKEN) { console.error('Secret API_URL / ADMIN_TOKEN belum diisi.'); process.exit(1); }

const res = await fetch(API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'text/plain;charset=utf-8' },
  body: JSON.stringify({ action: 'import', token: ADMIN_TOKEN, tags })
});
const json = await res.json().catch(() => ({ ok: false, error: 'Respon bukan JSON (HTTP ' + res.status + ')' }));
if (!json.ok) { console.error('Backend menolak:', json.error); process.exit(1); }
console.log(`✅ ${json.count} tag dikirim ke backend.`);
