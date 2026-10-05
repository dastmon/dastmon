// Mengambil daftar tag TeePublic lalu mengirimnya ke backend Apps Script (action: "import").
const { API_URL, ADMIN_TOKEN, DRY_RUN } = process.env;
const SOURCE = 'https://www.teepublic.com/tag-directory';
const BLACKLIST = ['Design', 'Sale', 'Sitemap', 'Tag', 'Directory', 'T-Shirt', 'Privacy'];

const toTitle = slug => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

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
  const re = /<a[^>]+href="\/t-shirts\/([^"?\s>]+)"[^>]*>([^<]*)<\/a>/g;
  const seen = new Set(), tags = [];
  for (const m of html.matchAll(re)) {
    const t = (m[2].trim() || toTitle(m[1])).trim();
    if (t.length > 1 && !seen.has(t) && !BLACKLIST.some(b => t.includes(b))) { seen.add(t); tags.push(t); }
  }
  return tags;
}

const tags = await getTags();
console.log(`Ditemukan ${tags.length} tag. Contoh:`, tags.slice(0, 10));
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
