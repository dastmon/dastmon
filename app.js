// Ikon asli dari template TailAdmin (sidebar.html & header.html)
const IC = {"Charts": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 2C11.5858 2 11.25 2.33579 11.25 2.75V12C11.25 12.4142 11.5858 12.75 12 12.75H21.25C21.6642 12.75 22 12.4142 22 12C22 6.47715 17.5228 2 12 2ZM12.75 11.25V3.53263C13.2645 3.57761 13.7659 3.66843 14.25 3.80098V3.80099C15.6929 4.19606 16.9827 4.96184 18.0104 5.98959C19.0382 7.01734 19.8039 8.30707 20.199 9.75C20.3316 10.2341 20.4224 10.7355 20.4674 11.25H12.75ZM2 12C2 7.25083 5.31065 3.27489 9.75 2.25415V3.80099C6.14748 4.78734 3.5 8.0845 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C15.9155 20.5 19.2127 17.8525 20.199 14.25H21.7459C20.7251 18.6894 16.7492 22 12 22C6.47715 22 2 17.5229 2 12Z\" fill=\"currentColor\" />", "Tables": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.25 5.5C3.25 4.25736 4.25736 3.25 5.5 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V18.5C20.75 19.7426 19.7426 20.75 18.5 20.75H5.5C4.25736 20.75 3.25 19.7426 3.25 18.5V5.5ZM5.5 4.75C5.08579 4.75 4.75 5.08579 4.75 5.5V8.58325L19.25 8.58325V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75H5.5ZM19.25 10.0833H15.416V13.9165H19.25V10.0833ZM13.916 10.0833L10.083 10.0833V13.9165L13.916 13.9165V10.0833ZM8.58301 10.0833H4.75V13.9165H8.58301V10.0833ZM4.75 18.5V15.4165H8.58301V19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5ZM10.083 19.25V15.4165L13.916 15.4165V19.25H10.083ZM15.416 19.25V15.4165H19.25V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H15.416Z\" fill=\"currentColor\" />", "Dashboard": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V8.99998C3.25 10.2426 4.25736 11.25 5.5 11.25H9C10.2426 11.25 11.25 10.2426 11.25 8.99998V5.5C11.25 4.25736 10.2426 3.25 9 3.25H5.5ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H9C9.41421 4.75 9.75 5.08579 9.75 5.5V8.99998C9.75 9.41419 9.41421 9.74998 9 9.74998H5.5C5.08579 9.74998 4.75 9.41419 4.75 8.99998V5.5ZM5.5 12.75C4.25736 12.75 3.25 13.7574 3.25 15V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H9C10.2426 20.75 11.25 19.7427 11.25 18.5V15C11.25 13.7574 10.2426 12.75 9 12.75H5.5ZM4.75 15C4.75 14.5858 5.08579 14.25 5.5 14.25H9C9.41421 14.25 9.75 14.5858 9.75 15V18.5C9.75 18.9142 9.41421 19.25 9 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V15ZM12.75 5.5C12.75 4.25736 13.7574 3.25 15 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V8.99998C20.75 10.2426 19.7426 11.25 18.5 11.25H15C13.7574 11.25 12.75 10.2426 12.75 8.99998V5.5ZM15 4.75C14.5858 4.75 14.25 5.08579 14.25 5.5V8.99998C14.25 9.41419 14.5858 9.74998 15 9.74998H18.5C18.9142 9.74998 19.25 9.41419 19.25 8.99998V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75H15ZM15 12.75C13.7574 12.75 12.75 13.7574 12.75 15V18.5C12.75 19.7426 13.7574 20.75 15 20.75H18.5C19.7426 20.75 20.75 19.7427 20.75 18.5V15C20.75 13.7574 19.7426 12.75 18.5 12.75H15ZM14.25 15C14.25 14.5858 14.5858 14.25 15 14.25H18.5C18.9142 14.25 19.25 14.5858 19.25 15V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H15C14.5858 19.25 14.25 18.9142 14.25 18.5V15Z\" fill=\"currentColor\" />", "h0": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z\" fill=\"\" />", "h1": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25L20 5.25C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75L4 6.75C3.58579 6.75 3.25 6.41422 3.25 6ZM3.25 18C3.25 17.5858 3.58579 17.25 4 17.25L20 17.25C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75L4 18.75C3.58579 18.75 3.25 18.4142 3.25 18ZM4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75L12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25L4 11.25Z\" fill=\"\" />", "h2": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z\" fill=\"\" />", "h3": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z\" fill=\"\" />", "h4": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z\" fill=\"\" />", "h5": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.99998 1.5415C10.4142 1.5415 10.75 1.87729 10.75 2.2915V3.5415C10.75 3.95572 10.4142 4.2915 9.99998 4.2915C9.58577 4.2915 9.24998 3.95572 9.24998 3.5415V2.2915C9.24998 1.87729 9.58577 1.5415 9.99998 1.5415ZM10.0009 6.79327C8.22978 6.79327 6.79402 8.22904 6.79402 10.0001C6.79402 11.7712 8.22978 13.207 10.0009 13.207C11.772 13.207 13.2078 11.7712 13.2078 10.0001C13.2078 8.22904 11.772 6.79327 10.0009 6.79327ZM5.29402 10.0001C5.29402 7.40061 7.40135 5.29327 10.0009 5.29327C12.6004 5.29327 14.7078 7.40061 14.7078 10.0001C14.7078 12.5997 12.6004 14.707 10.0009 14.707C7.40135 14.707 5.29402 12.5997 5.29402 10.0001ZM15.9813 5.08035C16.2742 4.78746 16.2742 4.31258 15.9813 4.01969C15.6884 3.7268 15.2135 3.7268 14.9207 4.01969L14.0368 4.90357C13.7439 5.19647 13.7439 5.67134 14.0368 5.96423C14.3297 6.25713 14.8045 6.25713 15.0974 5.96423L15.9813 5.08035ZM18.4577 10.0001C18.4577 10.4143 18.1219 10.7501 17.7077 10.7501H16.4577C16.0435 10.7501 15.7077 10.4143 15.7077 10.0001C15.7077 9.58592 16.0435 9.25013 16.4577 9.25013H17.7077C18.1219 9.25013 18.4577 9.58592 18.4577 10.0001ZM14.9207 15.9806C15.2135 16.2735 15.6884 16.2735 15.9813 15.9806C16.2742 15.6877 16.2742 15.2128 15.9813 14.9199L15.0974 14.036C14.8045 13.7431 14.3297 13.7431 14.0368 14.036C13.7439 14.3289 13.7439 14.8038 14.0368 15.0967L14.9207 15.9806ZM9.99998 15.7088C10.4142 15.7088 10.75 16.0445 10.75 16.4588V17.7088C10.75 18.123 10.4142 18.4588 9.99998 18.4588C9.58577 18.4588 9.24998 18.123 9.24998 17.7088V16.4588C9.24998 16.0445 9.58577 15.7088 9.99998 15.7088ZM5.96356 15.0972C6.25646 14.8043 6.25646 14.3295 5.96356 14.0366C5.67067 13.7437 5.1958 13.7437 4.9029 14.0366L4.01902 14.9204C3.72613 15.2133 3.72613 15.6882 4.01902 15.9811C4.31191 16.274 4.78679 16.274 5.07968 15.9811L5.96356 15.0972ZM4.29224 10.0001C4.29224 10.4143 3.95645 10.7501 3.54224 10.7501H2.29224C1.87802 10.7501 1.54224 10.4143 1.54224 10.0001C1.54224 9.58592 1.87802 9.25013 2.29224 9.25013H3.54224C3.95645 9.25013 4.29224 9.58592 4.29224 10.0001ZM4.9029 5.9637C5.1958 6.25659 5.67067 6.25659 5.96356 5.9637C6.25646 5.6708 6.25646 5.19593 5.96356 4.90303L5.07968 4.01915C4.78679 3.72626 4.31191 3.72626 4.01902 4.01915C3.72613 4.31204 3.72613 4.78692 4.01902 5.07981L4.9029 5.9637Z\" fill=\"currentColor\" />", "h6": "<path d=\"M17.4547 11.97L18.1799 12.1611C18.265 11.8383 18.1265 11.4982 17.8401 11.3266C17.5538 11.1551 17.1885 11.1934 16.944 11.4207L17.4547 11.97ZM8.0306 2.5459L8.57989 3.05657C8.80718 2.81209 8.84554 2.44682 8.67398 2.16046C8.50243 1.8741 8.16227 1.73559 7.83948 1.82066L8.0306 2.5459ZM12.9154 13.0035C9.64678 13.0035 6.99707 10.3538 6.99707 7.08524H5.49707C5.49707 11.1823 8.81835 14.5035 12.9154 14.5035V13.0035ZM16.944 11.4207C15.8869 12.4035 14.4721 13.0035 12.9154 13.0035V14.5035C14.8657 14.5035 16.6418 13.7499 17.9654 12.5193L16.944 11.4207ZM16.7295 11.7789C15.9437 14.7607 13.2277 16.9586 10.0003 16.9586V18.4586C13.9257 18.4586 17.2249 15.7853 18.1799 12.1611L16.7295 11.7789ZM10.0003 16.9586C6.15734 16.9586 3.04199 13.8433 3.04199 10.0003H1.54199C1.54199 14.6717 5.32892 18.4586 10.0003 18.4586V16.9586ZM3.04199 10.0003C3.04199 6.77289 5.23988 4.05695 8.22173 3.27114L7.83948 1.82066C4.21532 2.77574 1.54199 6.07486 1.54199 10.0003H3.04199ZM6.99707 7.08524C6.99707 5.52854 7.5971 4.11366 8.57989 3.05657L7.48132 2.03522C6.25073 3.35885 5.49707 5.13487 5.49707 7.08524H6.99707Z\" fill=\"currentColor\" />"};

// === KONFIGURASI: URL Web App (berakhiran /exec) ===
const API_URL = 'https://script.google.com/macros/s/AKfycbyDoByjuZsbhlTykBp6RjQQQvEHqwcusB9rc5EKB6BaSm1l27Bz-vkkHS0Zm43u8n9gMw/exec';
const REFRESH_MS = 5 * 60 * 1000;
let perPage = 10; // baris per halaman (10/20/30/40/50)

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sv = (inner, cls = '', w = 24, h = 24, vb = '0 0 24 24') => `<svg class="${cls}" width="${w}" height="${h}" viewBox="${vb}" fill="none" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

// ---------- Kelas TailAdmin (disalin dari partials) ----------
const CARD = 'rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/3';
const H3 = 'text-base font-semibold text-gray-800 dark:text-white/90';
const SUB = 'text-theme-xs mt-0.5 text-gray-500 dark:text-gray-400';
const BTN_O = 'text-theme-xs shadow-theme-xs inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 dark:hover:text-gray-200';
const BTN = 'text-theme-xs shadow-theme-xs inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-3 py-1.5 font-medium text-white hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-brand-300';
const SELECT = 'shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-9 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-3 py-1.5 pr-9 text-theme-xs text-gray-800 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90';
const FSEL = SELECT.replace('h-9', 'h-11 sm:h-9').replace('text-theme-xs', 'text-base sm:text-theme-xs');
const OPT = 'text-gray-700 dark:bg-gray-900 dark:text-gray-400';
const BTN_I = 'shadow-theme-xs inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3 dark:hover:text-gray-200';
const PBTN = (dir, ic, lbl, dis) => `<button class="${BTN_I}" data-pg="${dir}" aria-label="${lbl}" ${dis ? 'disabled' : ''}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ic}</svg></button>`;
const CHEV = '<path d="M4.79175 7.39584L10.0001 12.6042L15.2084 7.39585" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';

// ---------- Menu ----------
const MENU = [
  ['trending', 'Trending', IC.Charts, [['us', 'US Day Trends'], ['teepublic', 'TeePublic']]],
  ['saham', 'Saham', IC.Tables, [['teknologi', 'Teknologi'], ['tambang', 'Tambang'], ['kesehatan', 'Kesehatan']]],
  ['gold', 'Gold', IC.Dashboard, [['pegadaian', 'Pegadaian'], ['galeri24', 'Galeri 24'], ['hartadinata', 'Hartadinata']]]
];

// ---------- Risiko copyright ----------
const RISK = {
  High: ['High Risk', 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500', '#f04438'],
  Medium: ['Medium', 'bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-warning-500', '#f79009'],
  Low: ['Low Risk', 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500', '#12b76a'],
  Unknown: ['Unknown', 'bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-white/80', '#98a2b3']
};
const nk = v => { v = String(v || '').toLowerCase(); return v === 'high' ? 'High' : v === 'medium' ? 'Medium' : v === 'low' ? 'Low' : 'Unknown'; };
const badge = v => `<p class="${RISK[nk(v)][1]} text-theme-xs inline-block rounded-full px-2 py-0.5 font-medium">${RISK[nk(v)][0]}</p>`;

// ---------- Sel tabel ----------
const P1 = t => `<p class="text-theme-xs font-medium text-gray-800 dark:text-white/90">${t}</p>`;
const P2 = t => `<p class="text-theme-xs text-gray-500 dark:text-gray-400">${t}</p>`;
const PB = t => `<p class="text-theme-xs font-medium text-brand-500 dark:text-brand-400">${t}</p>`;
const PT = t => `<p class="text-theme-xs text-gray-400">${t}</p>`;

// Baris kecil di bawah judul pada layar kecil (kategori + deskripsi), karena kolomnya disembunyikan
const mob = (cat, txt) => `<div class="mt-0.5 lg:hidden"><span class="text-theme-xs font-medium text-brand-500 sm:hidden dark:text-brand-400">${esc(cat)}</span><p class="text-theme-xs line-clamp-2 text-gray-500 dark:text-gray-400">${esc(txt)}</p></div>`;

// cols: [judul, render(row, nomor), kelas sel, kelas visibilitas responsif]
const DATA = {
  'trending/us': {
    key: 'trends', job: 'trends', cat: r => r.category, risk: r => r.copyright,
    cols: [
      ['Rank', r => P2(esc(r.rank)), '', ''],
      ['Trending Topic', r => P1(esc(r.topic)) + mob(r.category, r.desc), 'min-w-36', ''],
      ['Kategori AI', r => P2(esc(r.category)), '', 'hidden sm:table-cell'],
      ['Deskripsi AI', r => P2(esc(r.desc)), 'min-w-64', 'hidden lg:table-cell'],
      ['Copyright (perkiraan AI)', r => badge(r.copyright), '', ''],
      ['Scraped At', r => PT(esc(r.timestamp)), '', 'hidden md:table-cell']]
  },
  'trending/teepublic': {
    key: 'teepublic', job: 'teepublic', cat: r => r.niche, risk: r => r.copyright,
    cols: [
      ['#', (r, i) => P2(i), '', ''],
      ['Tag', r => PB(esc(r.tag)) + mob(r.niche, r.analysis), 'min-w-36', ''],
      ['AI Category', r => P2(esc(r.niche)), '', 'hidden sm:table-cell'],
      ['Analisis AI', r => P2(esc(r.analysis)), 'min-w-64', 'hidden lg:table-cell'],
      ['Copyright (perkiraan AI)', r => badge(r.copyright), '', ''],
      ['Scraped At', r => PT(esc(r.timestamp)), '', 'hidden md:table-cell']]
  }
};

let data = null, loading = true, route = '', pg = 0, fCat = '', fRisk = '', selected = '', sidebarToggle = false, menuToggle = false;
let dark = JSON.parse(localStorage.getItem('darkMode') || 'false');
const charts = {};
const pageName = r => { const [g, s] = r.split('/'); return MENU.find(x => x[0] === g)?.[3].find(x => x[0] === s)?.[1] || ''; };

// ---------- Kerangka halaman (sama dengan index.html template) ----------
$('app').innerHTML = `
<div id="pre" class="fixed top-0 left-0 z-999999 flex h-screen w-screen items-center justify-center bg-white dark:bg-black"><div class="border-brand-500 h-16 w-16 animate-spin rounded-full border-4 border-solid border-t-transparent"></div></div>
<div id="modal" class="fixed inset-0 z-9999999 hidden items-center justify-center bg-gray-900/50 p-5 backdrop-blur-sm"></div>
<div class="flex h-dvh overflow-hidden">
  <aside id="side" class="sidebar fixed top-0 left-0 z-999999 flex h-dvh w-60 -translate-x-full flex-col overflow-y-auto border-r border-gray-200 bg-white px-3 transition-all duration-300 xl:static xl:translate-x-0 dark:border-gray-800 dark:bg-black">
    <div class="sidebar-header flex items-center justify-between gap-2 pt-4 pb-3">
      <a href="#trending/us">
        <span class="logo flex items-center gap-3"><span class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">${sv(IC.Charts, 'fill-current', 20, 20)}</span><span class="text-xl font-bold text-gray-800 dark:text-white/90">DASTMON</span></span>
        <span class="logo-icon flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">${sv(IC.Charts, 'fill-current', 20, 20)}</span>
      </a>
      <button id="sclose" aria-label="Tutup menu" class="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 xl:hidden dark:text-gray-400 dark:hover:bg-gray-800">${sv('<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>', '', 20, 20)}</button>
    </div>
    <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear"><nav id="nav"></nav></div>
  </aside>
  <div class="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
    <div id="ov" class="fixed w-full h-dvh z-999998 bg-gray-900/50 hidden"></div>
    <header class="sticky top-0 z-99999 flex w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div class="flex grow items-center justify-between gap-2 px-3 py-2 xl:px-6">
        <div class="flex min-w-0 items-center gap-2 sm:gap-3">
          <button id="burger" aria-label="Menu" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 xl:h-9 xl:w-9 dark:border-gray-800 dark:text-gray-400">
            ${sv(IC.h0, 'hidden fill-current xl:block', 16, 12, '0 0 16 12')}${sv(IC.h1, 'fill-current xl:hidden block')}${sv(IC.h2, 'fill-current hidden')}
          </button>
          <a href="#trending/us" class="flex min-w-0 items-center gap-2 xl:hidden"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white">${sv(IC.Charts, 'fill-current', 18, 18)}</span><span class="truncate text-lg font-bold text-gray-800 dark:text-white/90">DASTMON</span></a>
        </div>
        <div class="flex shrink-0 items-center gap-2">
          <p class="text-theme-xs mr-1 hidden text-gray-500 md:block dark:text-gray-400">Update: <span class="upd">-</span></p>
          <button id="theme" aria-label="Ganti tema" class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 xl:h-9 xl:w-9 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">${sv(IC.h5, 'hidden dark:block', 20, 20, '0 0 20 20')}${sv(IC.h6, 'dark:hidden', 20, 20, '0 0 20 20')}</button>
          <button id="run" hidden aria-label="Jalankan scraper" title="Jalankan scraper" class="${BTN_O} h-10 whitespace-nowrap xl:h-9"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg><span class="hidden sm:inline">Jalankan scraper</span></button>
          <button id="sync" aria-label="Sinkronkan data" title="Sync" class="${BTN} h-10 xl:h-9"><svg id="sicon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7M21 4v5h-5"/></svg><span class="hidden sm:inline">Sync</span></button>
        </div>
      </div>
      <div id="bar" hidden class="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden"><div class="absolute h-full w-2/5 bg-brand-500" style="animation:dm-bar 1.1s ease-in-out infinite"></div></div>
    </header>
    <main><div id="view" class="mx-auto max-w-(--breakpoint-2xl) p-3 pb-16 md:p-4 md:pb-4"></div></main>
  </div>
</div>`;

// ---------- Sidebar ----------
const ARROW = a => `<svg class="menu-item-arrow ${a ? 'menu-item-arrow-active' : 'menu-item-arrow-inactive'}" width="20" height="20" viewBox="0 0 20 20" fill="none">${CHEV}</svg>`;

function renderNav() {
  const g0 = route.split('/')[0];
  $('nav').innerHTML = `<div>
    <h3 class="mb-2 text-xs leading-5 text-gray-400 uppercase"><span class="menu-group-title">Menu</span>
      <svg class="menu-group-icon mx-auto fill-current" width="24" height="24" viewBox="0 0 24 24"><circle cx="6" cy="12" r="1.75"/><circle cx="12" cy="12" r="1.75"/><circle cx="18" cy="12" r="1.75"/></svg></h3>
    <ul class="mb-4 flex flex-col gap-0.5">${MENU.map(([g, l, ic, subs]) => {
      const open = selected === g, act = open || g0 === g;
      return `<li><a href="#" data-g="${g}" class="menu-item group ${act ? 'menu-item-active' : 'menu-item-inactive'}">
        ${sv(ic, act ? 'menu-item-icon-active' : 'menu-item-icon-inactive')}<span class="menu-item-text">${l}</span>${ARROW(open)}</a>
        <div class="overflow-hidden transform translate ${open ? 'block' : 'hidden'}"><ul class="menu-dropdown mt-1 flex flex-col gap-0.5 pl-9">
        ${subs.map(([s, sl]) => `<li><a href="#${g}/${s}" class="menu-dropdown-item group ${route === g + '/' + s ? 'menu-dropdown-item-active' : 'menu-dropdown-item-inactive'}">${sl}</a></li>`).join('')}
        </ul></div></li>`;
    }).join('')}</ul></div>`;
}
$('nav').addEventListener('click', e => {
  const a = e.target.closest('a[data-g]');
  if (a) { e.preventDefault(); selected = selected === a.dataset.g ? '' : a.dataset.g; renderNav(); }
});

function setSide(v) {
  sidebarToggle = v;
  const s = $('side');
  s.classList.toggle('-translate-x-full', !v);
  s.classList.toggle('translate-x-0', v);
  s.classList.toggle('sb-min', v);
  $('ov').className = 'fixed w-full h-dvh z-999998 bg-gray-900/50 ' + (v ? 'block xl:hidden' : 'hidden');
  const b = $('burger'), [, m, x] = b.children;
  b.classList.toggle('bg-gray-100', v); b.classList.toggle('dark:bg-gray-800', v);
  m.setAttribute('class', 'fill-current xl:hidden ' + (v ? 'hidden' : 'block'));
  x.setAttribute('class', 'fill-current ' + (v ? 'block xl:hidden' : 'hidden'));
}
$('burger').onclick = e => { e.stopPropagation(); setSide(!sidebarToggle); };
$('ov').onclick = () => setSide(false);
$('sclose').onclick = () => setSide(false);
document.addEventListener('click', e => { if (innerWidth < 1280 && sidebarToggle && !$('side').contains(e.target)) setSide(false); });

// ---------- Tema ----------
function applyDark() {
  document.documentElement.classList.toggle('dark', dark);
  document.body.classList.toggle('dark', dark);
  document.body.classList.toggle('bg-gray-900', dark);
  localStorage.setItem('darkMode', JSON.stringify(dark));
}
$('theme').onclick = () => { dark = !dark; applyDark(); update(); };
applyDark();
setTimeout(() => $('pre')?.remove(), 500);

// ---------- Router ----------
function go() {
  route = location.hash.slice(1) || 'trending/us';
  selected = route.split('/')[0];
  renderNav();
  if (innerWidth < 1280) setSide(false);
  Object.values(charts).forEach(c => c.destroy());
  for (const k in charts) delete charts[k];
  pg = 0; fCat = ''; fRisk = '';
  const d = DATA[route];
  if (d) shell(d); else soon();
  $('run').hidden = !d;
  update();
}

const crumb = () => `<div class="flex flex-wrap items-center justify-between gap-3 pb-3">
  <div><h2 class="text-lg font-semibold text-gray-800 dark:text-white/90">${esc(pageName(route))}</h2><p class="text-theme-xs mt-0.5 text-gray-500 md:hidden dark:text-gray-400">Update: <span class="upd">${esc(data?.updatedAt || '-')}</span></p></div>
  <nav><ol class="flex items-center gap-1.5">
    <li><a class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400" href="#trending/us">Home
      <svg class="stroke-current" width="17" height="16" viewBox="0 0 17 16" fill="none"><path d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366" stroke="" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
    <li class="text-sm text-gray-800 dark:text-white/90">${esc(pageName(route))}</li>
  </ol></nav></div>`;

function soon() {
  $('view').innerHTML = crumb() + `<div class="min-h-40 ${CARD} px-5 py-6"><div class="mx-auto w-full max-w-157.5 text-center">
    <h3 class="text-theme-xl mb-4 font-semibold text-gray-800 sm:text-2xl dark:text-white/90">Data belum tersedia</h3>
    <p class="text-sm text-gray-500 sm:text-base dark:text-gray-400">Menu ini belum punya sumber data. Tambahkan scraper dan sheet di backend (code.gs), lalu daftarkan di <code>DATA</code> pada app.js agar chart dan tabel muncul di sini.</p></div></div>`;
}

function shell(d) {
  $('view').innerHTML = crumb() + `
  <div class="grid grid-cols-12 gap-3">
    <div id="stats" class="col-span-12 grid grid-cols-2 gap-3 xl:grid-cols-4"></div>
    <div class="col-span-12 min-w-0 xl:col-span-8 ${CARD} p-4">
      <h3 class="${H3}">Distribusi Kategori</h3><p class="${SUB} mb-2">Jumlah data per kategori hasil analisis AI</p><div id="c1"></div></div>
    <div class="col-span-12 min-w-0 xl:col-span-4 ${CARD} p-4">
      <h3 class="${H3}">Risiko Copyright</h3><p class="${SUB} mb-2">Perkiraan AI, bukan nasihat hukum</p><div id="c2"></div></div>
    <div class="col-span-12 overflow-hidden ${CARD} px-4 pt-3 pb-2">
      <div class="mb-3"><h3 class="${H3}">Data</h3><p id="count" class="${SUB}"></p></div>
      <div id="filters" class="mb-3 grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] lg:max-w-3xl"></div>
      <div class="custom-scrollbar max-w-full overflow-x-auto"><table class="min-w-full"><thead id="thead" class="border-y border-gray-100 dark:border-gray-800"></thead><tbody id="tbody" class="divide-y divide-gray-100 dark:divide-gray-800"></tbody></table></div>
      <div id="pager" class="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 py-2 dark:border-gray-800"></div>
    </div>
  </div>`;
}

// ---------- Chart (konfigurasi ApexCharts dari chart-01.js / chart-02.js template) ----------
const count = (rows, f) => rows.reduce((m, r) => { const k = f(r); m[k] = (m[k] || 0) + 1; return m; }, {});

function draw(id, opt) {
  charts[id]?.destroy();
  $(id).innerHTML = '';
  charts[id] = new ApexCharts($(id), {
    fill: { opacity: 1 },
    ...opt,
    chart: { fontFamily: 'Outfit, sans-serif', toolbar: { show: false }, foreColor: dark ? '#98a2b3' : '#667085', background: 'transparent', ...opt.chart },
    theme: { mode: dark ? 'dark' : 'light' },
    grid: { borderColor: dark ? '#1d2939' : '#e4e7ec', xaxis: { lines: { show: true } }, yaxis: { lines: { show: false } } },
    legend: { show: true, position: 'bottom', horizontalAlign: 'center', fontFamily: 'Outfit', fontSize: '12px', markers: { radius: 99, size: 5 }  }
  });
  charts[id].render();
}

const SI = {
  total: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  cat: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  high: '<path d="M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/>',
  low: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/>'
};
const sIcon = p => `<svg class="stroke-gray-800 dark:stroke-white/90" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

// ---------- Render dinamis ----------
function update() {
  const d = DATA[route];
  if (!d || !$('stats')) return;
  if (loading && !data) return skeleton(d);
  const all = data?.[d.key] || [];
  const risks = count(all, r => nk(d.risk(r)));
  const cats = Object.entries(count(all.filter(r => d.cat(r) && d.cat(r) !== '-'), d.cat)).sort((a, b) => b[1] - a[1]);
  const pctOf = n => (all.length ? Math.round(n / all.length * 100) : 0) + '%';
  const ERR = 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500', OK = 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500';

  $('stats').innerHTML = [
    ['Total Data', all.length, SI.total, null],
    ['Kategori', cats.length, SI.cat, null],
    ['High Risk', risks.High || 0, SI.high, [ERR, pctOf(risks.High || 0)]],
    ['Low Risk', risks.Low || 0, SI.low, [OK, pctOf(risks.Low || 0)]]
  ].map(([l, v, ic, b]) => `<div class="flex min-w-0 items-center gap-3 ${CARD} p-3">
    <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 sm:h-10 sm:w-10 dark:bg-gray-800">${sIcon(ic)}</div>
    <div class="min-w-0 flex-1"><span class="text-theme-xs block truncate text-gray-500 dark:text-gray-400">${l}</span>
    <div class="flex items-center gap-1.5"><h4 class="text-lg leading-6 font-bold text-gray-800 sm:text-xl dark:text-white/90">${esc(v)}</h4>${b ? `<span class="${b[0]} text-theme-xs rounded-full px-1.5 py-0.5 font-medium sm:hidden">${b[1]}</span>` : ''}</div></div>
    ${b ? `<span class="${b[0]} text-theme-xs hidden shrink-0 rounded-full px-2 py-0.5 font-medium sm:inline-block">${b[1]}</span>` : ''}</div>`).join('');

  if (cats.length) {
    draw('c1', {
      series: [{ name: 'Jumlah', data: cats.map(c => c[1]) }],
      colors: ['#465fff'],
      chart: { type: 'bar', height: Math.max(150, cats.length * 24) },
      plotOptions: { bar: { horizontal: true, barHeight: '55%', borderRadius: 5, borderRadiusApplication: 'end' } },
      dataLabels: { enabled: false },
      xaxis: { categories: cats.map(c => c[0]), axisBorder: { show: false }, axisTicks: { show: false } },
      yaxis: { labels: { maxWidth: 130 } },
      legend: { show: false },
      tooltip: { x: { show: true } }
    });
  } else { charts.c1?.destroy(); delete charts.c1; $('c1').innerHTML = `<p class="text-theme-sm text-gray-500 dark:text-gray-400">Belum ada data kategori.</p>`; }

  const keys = Object.keys(RISK);
  if (all.length) {
    draw('c2', {
      series: keys.map(k => risks[k] || 0), labels: keys.map(k => RISK[k][0]), colors: keys.map(k => RISK[k][2]),
      chart: { type: 'donut', height: 230 },
      stroke: { width: 0 },
      dataLabels: { enabled: false },
      plotOptions: { pie: { donut: { size: '75%', labels: { show: true, name: { show: false }, value: { fontSize: '26px', fontWeight: 600, offsetY: 8, color: dark ? '#f9fafb' : '#1d2939' }, total: { show: true, label: 'Total', fontSize: '14px', color: '#667085', formatter: w => w.globals.seriesTotals.reduce((a, b) => a + b, 0) } } } } }
    });
  } else { charts.c2?.destroy(); delete charts.c2; $('c2').innerHTML = `<p class="text-theme-sm text-gray-500 dark:text-gray-400">Belum ada data.</p>`; }

  // Filter Category & Copyright (di atas tabel)
  const catKey = r => { const c = d.cat(r); return c && c !== '-' ? c : ''; };
  const catCount = count(all, catKey);
  if (fCat && fCat !== '__none__' && !catCount[fCat]) fCat = ''; // kategori hilang setelah refresh data
  const opt = (v, t, on) => `<option value="${esc(v)}" class="${OPT}" ${on ? 'selected' : ''}>${esc(t)}</option>`;
  const fsel = (id, label, html) => `<div class="relative"><select id="${id}" aria-label="${label}" class="${FSEL}">${html}</select><span class="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 stroke-current text-gray-500 dark:text-gray-400"><svg width="16" height="16" viewBox="0 0 20 20" fill="none">${CHEV}</svg></span></div>`;
  const catHtml = opt('', 'Semua kategori', !fCat)
    + Object.keys(catCount).filter(Boolean).sort((a, b) => a.localeCompare(b)).map(c => opt(c, `${c} (${catCount[c]})`, fCat === c)).join('')
    + (catCount[''] ? opt('__none__', `Belum dianalisis (${catCount['']})`, fCat === '__none__') : '');
  const riskHtml = opt('', 'Semua copyright', !fRisk) + Object.keys(RISK).map(k => opt(k, `${RISK[k][0]} (${risks[k] || 0})`, fRisk === k)).join('');
  $('filters').innerHTML = fsel('fc', 'Filter kategori', catHtml) + fsel('fr', 'Filter copyright', riskHtml)
    + `<button data-reset class="${BTN_O} h-11 sm:h-9" ${fCat || fRisk ? '' : 'disabled'}>Reset</button>`;

  const rows = all.filter(r => (!fRisk || nk(d.risk(r)) === fRisk) && (!fCat || (fCat === '__none__' ? catKey(r) === '' : catKey(r) === fCat)));
  const pages = Math.max(1, Math.ceil(rows.length / perPage));
  pg = Math.min(pg, pages - 1);
  const from = pg * perPage, part = rows.slice(from, from + perPage);
  const nw = c => (c[2] || '').includes('min-w') ? '' : 'whitespace-nowrap';

  $('count').textContent = `${rows.length} dari ${all.length} data`;
  $('thead').innerHTML = `<tr>${d.cols.map(c => `<th class="px-3 py-2 ${nw(c)} ${c[3] || ''} first:pl-0 text-left"><div class="flex items-center"><p class="text-theme-xs font-medium text-gray-500 dark:text-gray-400">${c[0]}</p></div></th>`).join('')}</tr>`;
  $('tbody').innerHTML = part.length
    ? part.map((r, i) => `<tr>${d.cols.map(c => `<td class="px-3 py-1.5 ${nw(c)} ${c[2] || ''} ${c[3] || ''} first:pl-0"><div class="flex flex-col items-start justify-center">${c[1](r, from + i + 1)}</div></td>`).join('')}</tr>`).join('')
    : `<tr><td colspan="${d.cols.length}" class="py-6 text-center text-theme-xs text-gray-500 dark:text-gray-400">Tidak ada data.</td></tr>`;
  $('pager').innerHTML = `<div class="flex items-center gap-2 text-theme-xs text-gray-500 dark:text-gray-400"><span>Tampilkan</span>
    <div class="relative"><select id="pp" aria-label="Jumlah data per halaman" class="shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 h-8 text-base sm:text-theme-xs appearance-none rounded-lg border border-gray-300 bg-transparent bg-none py-1 pr-7 pl-3 text-gray-800 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">${[10, 20, 30, 40, 50].map(n => `<option value="${n}" class="${OPT}" ${n === perPage ? 'selected' : ''}>${n}</option>`).join('')}</select>
    <span class="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 stroke-current text-gray-500 dark:text-gray-400"><svg width="14" height="14" viewBox="0 0 20 20" fill="none">${CHEV}</svg></span></div><span>data</span></div>
    <div class="flex items-center gap-2"><span class="text-theme-xs text-gray-500 dark:text-gray-400">${rows.length ? `${from + 1}–${from + part.length} dari ${rows.length}` : '0 data'}</span>
    ${PBTN(-1, '<path d="M12.5 5l-5 5 5 5"/>', 'Sebelumnya', pg === 0)}${PBTN(1, '<path d="M7.5 5l5 5-5 5"/>', 'Berikutnya', pg >= pages - 1)}</div>`;
}

$('view').addEventListener('click', e => {
  const b = e.target.closest('[data-pg]');
  if (b) { pg += Number(b.dataset.pg); update(); return; }
  if (e.target.closest('[data-reset]')) { fCat = ''; fRisk = ''; pg = 0; update(); }
});
$('view').addEventListener('change', e => {
  const id = e.target.id;
  if (id === 'pp') perPage = Number(e.target.value);
  else if (id === 'fc') fCat = e.target.value;
  else if (id === 'fr') fRisk = e.target.value;
  else return;
  pg = 0; update();
});

// ---------- Skeleton (animasi loading) ----------
const sk = (c, st = '') => `<div class="animate-pulse rounded-md bg-gray-200 dark:bg-gray-800 ${c}" style="${st}"></div>`;
function skeleton(d) {
  $('stats').innerHTML = [1, 2, 3, 4].map(() => `<div class="flex items-center gap-3 ${CARD} p-3">${sk('h-10 w-10 shrink-0 !rounded-lg')}<div class="flex-1 space-y-2">${sk('h-3 w-16')}${sk('h-5 w-10')}</div></div>`).join('');
  $('c1').innerHTML = `<div class="space-y-3 py-1">${[92, 74, 58, 44, 30].map(w => sk('h-4', `width:${w}%`)).join('')}</div>`;
  $('c2').innerHTML = `<div class="flex justify-center py-2">${sk('h-44 w-44 !rounded-full')}</div>`;
  $('count').textContent = 'Memuat data…';
  $('filters').innerHTML = sk('h-11 sm:h-9') + sk('h-11 sm:h-9');
  $('thead').innerHTML = `<tr>${d.cols.map(c => `<th class="px-3 py-2 text-left first:pl-0 ${c[3] || ''}"><p class="text-theme-xs font-medium text-gray-500 dark:text-gray-400">${c[0]}</p></th>`).join('')}</tr>`;
  $('tbody').innerHTML = Array.from({ length: 8 }, () => `<tr>${d.cols.map(c => `<td class="px-3 py-2.5 first:pl-0 ${c[3] || ''}">${sk('h-3 w-full max-w-40')}</td>`).join('')}</tr>`).join('');
  $('pager').innerHTML = '';
}

// ---------- Modal (semua notifikasi) ----------
const MI = {
  success: ['bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500', '<path d="M5 13l4 4L19 7"/>'],
  error: ['bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500', '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5h.01"/>'],
  info: ['bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400', '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5h.01"/>']
};
let mAct = [], mDismiss = true;
function modal({ type = 'info', title = '', text = '', body = '', actions, dismiss = true }) {
  mAct = actions || [['OK', 'primary']]; mDismiss = dismiss;
  const ic = type === 'loading'
    ? '<div class="border-brand-500 h-12 w-12 animate-spin rounded-full border-4 border-solid border-t-transparent"></div>'
    : `<div class="flex h-12 w-12 items-center justify-center rounded-full ${MI[type][0]}"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${MI[type][1]}</svg></div>`;
  const btns = mAct.map(([l, k], i) => `<button data-m="${i}" class="${k === 'primary' ? BTN : BTN_O} min-w-24">${esc(l)}</button>`).join('');
  const m = $('modal');
  m.innerHTML = `<div role="dialog" aria-modal="true" class="w-full max-w-115 rounded-3xl bg-white p-6 text-center dark:bg-gray-900">
    <div class="mb-4 flex justify-center">${ic}</div>
    <h4 class="mb-2 text-xl font-semibold text-gray-800 dark:text-white/90">${esc(title)}</h4>
    <p id="mt" class="text-sm leading-6 text-gray-500 dark:text-gray-400">${esc(text)}</p>${body}
    ${btns ? `<div class="mt-6 flex items-center justify-center gap-3">${btns}</div>` : ''}</div>`;
  m.classList.remove('hidden'); m.classList.add('flex');
  setTimeout(() => ($('mi') || m.querySelector('[data-m]:last-child'))?.focus(), 30);
}
function closeModal() { const m = $('modal'); m.classList.add('hidden'); m.classList.remove('flex'); m.innerHTML = ''; mAct = []; }
$('modal').addEventListener('click', e => {
  const b = e.target.closest('[data-m]');
  if (b) { const a = mAct[Number(b.dataset.m)]; if (a?.[2]) a[2](); else closeModal(); return; }
  if (e.target === $('modal') && mDismiss) closeModal();
});
document.addEventListener('keydown', e => {
  if ($('modal').classList.contains('hidden')) return;
  if (e.key === 'Escape' && mDismiss) closeModal();
  if (e.key === 'Enter' && e.target.id === 'mi') mAct[mAct.length - 1]?.[2]?.();
});

const TOKEN_INPUT = '<input id="mi" type="password" autocomplete="off" placeholder="ADMIN_TOKEN" class="shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 mt-4 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90">';
function askRun(name, saved, note) {
  return new Promise(res => modal({
    type: 'info', title: 'Jalankan scraper?', dismiss: false,
    text: `${note || `Scraper "${name}" akan dijalankan dan data diperbarui. Proses bisa memakan waktu beberapa menit.`}${saved ? '' : ' Masukkan ADMIN_TOKEN untuk melanjutkan.'}`,
    body: saved ? '' : TOKEN_INPUT,
    actions: [
      ['Batal', 'outline', () => { closeModal(); res(null); }],
      ['Jalankan', 'primary', () => { const v = saved || $('mi').value.trim(); if (!v) { $('mi').focus(); return; } closeModal(); res(v); }]]
  }));
}

// ---------- API ----------
function setBusy(on) {
  $('bar').hidden = !on;
  $('sync').disabled = on;
  $('sicon').classList.toggle('animate-spin', on);
}

async function load(silent) {
  loading = true; setBusy(true);
  if (!data) update();
  try {
    const res = await fetch(`${API_URL}?action=data`);
    const json = await res.json();
    if (!json.ok) throw new Error(json.error);
    data = json;
    document.querySelectorAll('.upd').forEach(el => { el.textContent = json.updatedAt; });
  } catch (e) {
    // refresh otomatis (silent) tidak memunculkan modal; Sync manual & muat awal tetap memunculkan
    if (!silent && $('modal').classList.contains('hidden')) modal({ type: 'error', title: 'Gagal memuat data', text: e.message });
  }
  loading = false; setBusy(false); update();
}

// POST tanpa header Content-Type => text/plain => tidak ada preflight CORS
const api = async body => (await fetch(API_URL, { method: 'POST', body: JSON.stringify(body) })).json();
const wait = ms => new Promise(r => setTimeout(r, ms));
const setModalText = t => { const p = $('mt'); if (p) p.textContent = t; };
const ghLink = u => /^https:\/\/github\.com\//.test(u || '') ? `<a href="${esc(u)}" target="_blank" rel="noopener" class="text-theme-sm mt-3 inline-block font-medium text-brand-500 hover:underline">Buka log di GitHub</a>` : '';

// Menunggu workflow GitHub Actions (dipicu backend) sampai selesai; null = melewati batas 10 menit
async function waitWorkflow(token, dispatchedAt) {
  const since = new Date(dispatchedAt).getTime() - 15000, t0 = Date.now();
  while (Date.now() - t0 < 10 * 60 * 1000) {
    await wait(8000);
    let st;
    try { st = await api({ action: 'ghstatus', token }); } catch (e) { continue; } // gangguan jaringan sesaat
    if (!st.ok) throw new Error(st.error);
    const secs = Math.round((Date.now() - t0) / 1000), run = st.run;
    if (run && new Date(run.created_at).getTime() >= since) {
      if (run.status === 'completed') return run;
      setModalText(`Workflow GitHub ${run.status === 'in_progress' ? 'sedang berjalan' : 'menunggu giliran'}… (${secs} dtk)`);
    } else setModalText(`Menunggu GitHub memulai workflow… (${secs} dtk)`);
  }
  return null;
}

async function runJob(job) {
  const viaGithub = job === 'teepublic';
  const note = viaGithub ? 'Workflow GitHub Actions akan dipicu untuk mengambil tag terbaru dari TeePublic, lalu backend menganalisisnya dengan AI. Biasanya 1–5 menit.' : '';
  const token = await askRun(pageName(route), sessionStorage.getItem('dastmon_token'), note);
  if (!token) return;
  $('run').disabled = true;
  modal({ type: 'loading', title: 'Scraper sedang berjalan', text: viaGithub ? 'Memicu workflow GitHub Actions…' : 'Mohon tunggu, proses bisa memakan waktu beberapa menit. Jangan menutup halaman ini.', actions: [], dismiss: false });
  try {
    const json = await api({ action: 'run', job, token });
    if (!json.ok) { sessionStorage.removeItem('dastmon_token'); throw new Error(json.error); }
    sessionStorage.setItem('dastmon_token', token);
    if (json.async) {
      const run = await waitWorkflow(token, json.dispatchedAt);
      await load(true);
      if (!run) modal({ type: 'info', title: 'Workflow masih berjalan', text: 'GitHub belum selesai setelah 10 menit. Klik Sync beberapa saat lagi untuk memuat data terbaru.' });
      else if (run.conclusion === 'success') modal({ type: 'success', title: 'Tag TeePublic diperbarui', text: 'Workflow GitHub Actions selesai dan data sudah dimuat ulang.' });
      else modal({ type: 'error', title: 'Workflow GitHub gagal', text: `Hasil: ${run.conclusion || run.status}. Periksa log workflow di GitHub.`, body: ghLink(run.html_url) });
    } else {
      await load(true);
      const ok = Number(json.count) > 0;
      modal({ type: ok ? 'success' : 'info', title: ok ? 'Scraper selesai' : 'Tidak ada pembaruan', text: json.message || `${json.count} data berhasil diperbarui.` });
    }
  } catch (e) { modal({ type: 'error', title: 'Scraper gagal', text: e.message }); }
  $('run').disabled = false;
}

$('run').onclick = () => { const d = DATA[route]; if (d) runJob(d.job); };
$('sync').onclick = () => load(false);
window.addEventListener('hashchange', go);
go();
load(false);
setInterval(() => load(true), REFRESH_MS);
