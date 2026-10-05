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

  // Pencocokan longgar: href relatif/absolut, kutip tunggal/ganda, teks boleh dibungkus tag lain
  const re = /<a\b[^>]*?href=["'](?:https?:\/\/(?:www\.)?teepublic\.com)?\/t-shirts\/([^"'?#\s>]+)[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi;
  const seen = new Set(), tags = [];
  for (const m of html.matchAll(re)) {
    const text = m[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const t = text || toTitle(m[1]);
    if (t.length > 1 && !seen.has(t) && !BLACKLIST.some(b => t.includes(b))) { seen.add(t); tags.push(t); }
  }

  if (!tags.length) {
    // Diagnosis: tampilkan apa yang sebenarnya diterima
    const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]?.trim();
    const hrefs = [...html.matchAll(/<a\b[^>]*?href=["']([^"']+)["']/gi)].map(m => m[1]);
    console.log('--- DIAGNOSIS ---');
    console.log('Panjang HTML :', html.length);
    console.log('Title        :', title);
    console.log('Jumlah <a>   :', hrefs.length);
    console.log('Contoh href  :', hrefs.slice(0, 25));
    console.log('Ada "t-shirts":', html.includes('t-shirts'), '| Ada "captcha/challenge":', /captcha|challenge|cf-|just a moment/i.test(html));
    console.log('Awal HTML    :', html.slice(0, 400).replace(/\s+/g, ' '));
    console.log('-----------------');
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
