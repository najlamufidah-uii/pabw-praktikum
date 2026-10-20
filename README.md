<<<<<<< HEAD
# pabw-praktikum
Latihan PABW
=======
# Praktikum P04 — Design Token untuk Halaman Profil Saya

Starter: `kerangka-profil.html`. Berkas ini sudah lengkap dan sudah lolos
W3C Nu Html Checker serta Lighthouse Accessibility. Jangan mengubah
strukturnya — tampilan diubah dari berkas CSS.

## Isi paket

- `kerangka-profil.html` — salin menjadi `profil.html` ke folder `worksheet-p4/`
- `media/foto-profil.jpg` — gambar contoh; ganti dengan foto Anda sendiri
- `bukti/` — folder kosong untuk tangkapan layar

## Tiga pekerjaan

1. Ganti sembilan penanda `[ISI]` di dalam `profil.html` (Lembar B).
2. **Wajib, dinilai** — tambahkan MINIMAL TIGA bagian baru di dalam `<main>`,
   masing-masing memakai elemen semantik yang berbeda satu sama lain dan belum
   terpakai (Lembar B). Pilihan: `<details>`, galeri `<figure>`, lini masa
   `<ol>`, `<dl>`, `<blockquote>`, `<article>`. Semuanya ikut digayakan memakai
   token yang sama.
3. Buat LIMA berkas gaya di folder `css/`, lalu buka komentar lima baris `<link>`
   di dalam `<head>` — urutannya menentukan hasil akhir:

   | Berkas | Isi | Lembar |
   |---|---|---|
   | `css/tokens.css` | dua lapis token: nilai mentah + peran | D |
   | `css/base.css` | reset ringan, box-sizing, tipografi | E |
   | `css/layout.css` | navbar flex, katalog kartu, footer | F |
   | `css/komponen.css` | gaya form, fokus, isian tidak sah | G |
   | `css/tema.css` | tema gelap dan tombol pengalihnya | H |

## Evaluasi yang dilaporkan

Tulis di README ini, satu paragraf per bagian tambahan: elemen apa, untuk siapa,
dan menjawab apa. Lalu catat hasil evaluasinya (Lembar I.6):

- W3C — Nu Html Checker: jumlah error setelah penambahan (target 0)
- WCAG — kontras AA di tema terang dan gelap
- WCAG — seluruh bagian baru dapat dicapai dengan Tab
- WCAG — tetap dapat dipahami tanpa bantuan warna

## Waktu

90 menit di kelas hanya cukup sampai Lembar D: tiga struktur sudah berdiri,
keputusan token tercatat, dan `tokens.css` sudah memuat kelima berkas gaya.
Lembar E sampai I — base.css, layout, form, tema gelap, dan evaluasi W3C + WCAG —
diselesaikan di luar kelas sampai pukul 23.59 hari yang sama.

## Pengumpulan

Folder `worksheet-p4/` di dalam repositori GitHub Anda sendiri, berisi
`profil.html`, `css/`, `media/`, dan `bukti/`. Sudah di-commit dan di-push
sebelum **pukul 23.59 hari yang sama**. Tidak ada perpanjangan.


# Praktikum P05 — Layout Modern: Flexbox dan Grid

## 1. Deskripsi Praktikum

Praktikum P05 membahas penerapan Flexbox dan CSS Grid untuk membuat tata letak halaman web yang rapi, terstruktur, dan responsif. Praktikum ini merupakan lanjutan dari P04, yaitu menggunakan halaman profil beserta design token yang sudah dibuat, kemudian memperbaiki susunan elemen halaman menggunakan CSS.

## 2. Tujuan Praktikum

1. Memahami penggunaan Flexbox untuk menyusun elemen dalam satu arah.
2. Memahami penggunaan CSS Grid untuk menyusun elemen dalam baris dan kolom.
3. Mengatur jarak antar elemen menggunakan properti `gap`.
4. Membuat galeri kartu yang responsif menggunakan `auto-fit` dan `minmax()`.
5. Mencegah elemen atau teks meluber keluar dari wadahnya.
6. Memastikan halaman tetap rapi pada lebar layar 360 px dan 1280 px.

## 3. Struktur Folder

```text
worksheet-p5/
├── profil.html
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── komponen.css
│   └── tema.css
├── media/
│   └── foto-profil.jpg
└── README.md
```

## 4. Pekerjaan Praktikum

### A. Menentukan Kerangka Halaman

Menentukan struktur halaman yang terdiri dari tiga baris, yaitu kepala halaman, bagian isi, dan footer. Bagian isi dibagi menjadi dua kolom, yaitu sidebar dan konten utama.

### B. Menerapkan Flexbox dan Grid

Flexbox digunakan pada navbar agar menu tersusun secara horizontal dan rapi. CSS Grid digunakan untuk mengatur kerangka halaman menjadi beberapa baris dan kolom.

### C. Mengatur Kartu dan Galeri

Komponen kartu menggunakan Flexbox untuk mengatur isi dan tombol. Galeri menggunakan CSS Grid dengan `repeat()`, `auto-fit`, dan `minmax()` agar jumlah kolom dapat menyesuaikan lebar layar.

### D. Mengatur Penempatan Elemen

Menggunakan grid span atau area bernama untuk menempatkan bagian tertentu agar lebih menonjol dan sesuai dengan kerangka halaman.

### E. Memperbaiki Masalah Tata Letak

Memperbaiki tinggi kartu yang tidak seragam, teks panjang, dan elemen yang meluber. Properti seperti `min-width: 0` dan `overflow-wrap: anywhere` digunakan jika diperlukan.

### F. Melakukan Pemeriksaan

Memeriksa struktur halaman, penggunaan `gap`, lebar kolom, galeri responsif, dan kemungkinan elemen meluber. Pengujian dilakukan pada lebar layar 360 px dan 1280 px. Tombol pengalih tema gelap dari P04 juga diperiksa.

## 5. Penerapan Flexbox dan Grid

**Flexbox** digunakan untuk tata letak satu dimensi, seperti navbar dan susunan isi kartu. Properti yang digunakan antara lain `display: flex`, `gap`, `align-items`, `justify-content`, dan `flex-wrap`.

**CSS Grid** digunakan untuk tata letak dua dimensi, seperti kerangka halaman dan galeri kartu. Properti yang digunakan antara lain `display: grid`, `grid-template-columns`, `grid-template-rows`, `grid-column`, `grid-area`, `repeat()`, `auto-fit`, dan `minmax()`.

Penggunaan kedua teknik tersebut membantu halaman menjadi lebih teratur dan mudah menyesuaikan ukuran layar.

## 6. Hasil Pengujian

Isi bagian ini berdasarkan hasil pemeriksaan halaman yang benar-benar telah dilakukan.

- **Kerangka halaman:** [Tuliskan hasil pemeriksaan tiga baris dan dua kolom].
- **Flexbox:** [Tuliskan hasil pemeriksaan navbar dan isi kartu].
- **CSS Grid:** [Tuliskan hasil pemeriksaan kerangka halaman dan galeri].
- **Penggunaan gap:** [Tuliskan apakah jarak antar elemen sudah menggunakan `gap`].
- **Galeri responsif:** [Tuliskan apakah jumlah kolom berubah sesuai lebar layar].
- **Pengujian 360 px:** [Tuliskan hasil pengujian layar kecil].
- **Pengujian 1280 px:** [Tuliskan hasil pengujian layar lebar].
- **Tema gelap:** [Tuliskan apakah tombol pengalih tema masih berfungsi].

## 7. Kesimpulan

Praktikum P05 membantu memahami perbedaan dan penggunaan Flexbox serta CSS Grid dalam pengembangan antarmuka web. Flexbox cocok untuk menyusun elemen dalam satu arah, sedangkan Grid cocok untuk mengatur tata letak dalam baris dan kolom. Penggunaan `gap`, ukuran kolom yang fleksibel, dan pengujian pada beberapa lebar layar membantu menghasilkan halaman profil yang lebih rapi dan responsif.

## 8. Bukti Praktikum

Bukti praktikum dapat berupa tangkapan layar halaman profil, susunan navbar dan kartu, galeri responsif, serta hasil pengujian pada lebar layar 360 px dan 1280 px. Simpan bukti sesuai ketentuan pengumpulan praktikum.

## Deskripsi

Praktikum P06 merupakan lanjutan dari Pertemuan 5. Pada praktikum ini, halaman profil pribadi yang sudah dibuat sebelumnya dikembangkan agar responsif dan dapat menyesuaikan tampilan pada berbagai ukuran layar, mulai dari ponsel, tablet, hingga desktop.

## Tujuan Praktikum

- Memahami pendekatan desain responsif Mobile-First.
- Menggunakan meta viewport agar halaman sesuai dengan lebar perangkat.
- Mengatur layout menggunakan CSS Grid dan Flexbox.
- Menerapkan media query untuk mengubah layout pada titik henti tertentu.
- Mencegah gambar dan konten meluber dari wadahnya.
- Membuat tabel lebar yang dapat digulir secara mandiri.

## Struktur Berkas

```text
P06-25523235/
├── profil.html
├── README.md
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── komponen.css
│   ├── tema.css
│   └── responsive.css
└── media/
    └── profil.jpg
```

## Implementasi Responsif

### 1. Gaya Dasar Mobile-First

Gaya dasar dibuat untuk layar sempit dengan satu kolom. Layout kemudian dikembangkan menggunakan media query untuk layar yang lebih lebar.

### 2. Titik Henti

| Lebar layar | Perubahan layout |
|---|---|
| 360 px | Layout satu kolom untuk layar ponsel |
| 768 px | Grid Karya berubah menjadi dua kolom |
| 1280 px | Layout desktop aktif dan Grid Karya menjadi tiga kolom |

Titik henti yang digunakan adalah `48rem` dan `60rem`, dengan asumsi ukuran dasar `1rem = 16px`.

### 3. Gambar dan Tabel

Gambar menggunakan `max-width: 100%` dan `height: auto` agar tidak melebihi wadahnya.

Tabel dibungkus menggunakan elemen `.table-wrap` dengan `overflow-x: auto` agar tabel dapat digulir secara horizontal tanpa membuat seluruh halaman meluber.

### 4. Teknologi

- HTML5 semantik
- CSS3
- CSS Grid
- Flexbox
- Media query
- Design token
- Chrome DevTools untuk pengujian responsif

## Pengujian

Pengujian dilakukan menggunakan mode perangkat di Chrome DevTools pada tiga lebar layar:

- 360 px
- 768 px
- 1280 px

Hal yang diperiksa meliputi meta viewport, perubahan jumlah kolom, tampilan gambar, tabel yang dapat digulir sendiri, dan tidak adanya overflow horizontal pada halaman.

## Kesimpulan

Melalui praktikum P06, halaman profil pribadi dikembangkan menggunakan pendekatan Mobile-First agar dapat menyesuaikan tampilan pada berbagai ukuran layar. CSS Grid, Flexbox, media query, dan pengaturan gambar serta tabel digunakan untuk mendukung layout yang responsif.

# Praktikum P08 — JavaScript

## Deskripsi

Praktikum P08 membahas dasar-dasar JavaScript untuk mengolah data pada halaman web. Materi meliputi variabel, tipe data, template literal, operator, fungsi, array of objects, array methods, serta debugging menggunakan Console dan breakpoint.

## Materi yang Dipelajari

### 1. Variabel dan Tipe Data

- `const` digunakan untuk variabel yang tidak perlu ditunjuk ulang.
- `let` digunakan untuk variabel yang nilainya dapat berubah.
- `typeof` digunakan untuk mengetahui tipe data.
- Template literal `` `${}` `` digunakan untuk menyusun teks dari nilai variabel.

### 2. Operator dan Akses Properti

- `===` membandingkan nilai dan tipe data.
- `!==` memeriksa ketidaksamaan nilai atau tipe data.
- `??` memberikan nilai bawaan ketika nilai sebelumnya `null` atau `undefined`.
- `?.` mengakses properti dengan aman ketika objek mungkin `null` atau `undefined`.

### 3. Salinan Objek dan Array

- `{ ...objek }` membuat salinan dangkal (*shallow copy*) dari objek.
- `[ ...array ]` membuat salinan dangkal dari array.

### 4. Function

Fungsi digunakan untuk mengelompokkan instruksi agar dapat digunakan kembali. Praktikum ini menggunakan fungsi untuk membuat perkenalan dan memformat daftar keterampilan.

### 5. Array of Objects

Data karya disimpan dalam array bernama `karya`. Setiap objek memiliki informasi seperti judul, tahun, dan kategori.

### 6. Array Methods

- `map()` menghasilkan array baru berdasarkan hasil pengolahan setiap elemen.
- `filter()` menghasilkan array baru berisi elemen yang memenuhi kondisi.
- `find()` mengambil elemen pertama yang memenuhi kondisi.
- `console.table()` menampilkan data dalam bentuk tabel di Console.

### 7. Debugging JavaScript

Debugging dilakukan menggunakan Console, `console.log()`, `console.table()`, dan breakpoint pada DevTools untuk memeriksa nilai variabel serta menemukan kesalahan.

## Referensi Cepat JavaScript

| Sintaks | Fungsi |
|---|---|
| `const` | Menampung nilai yang tidak ditunjuk ulang |
| `let` | Menampung nilai yang dapat berubah |
| `` `${}` `` | Menyusun teks dari nilai variabel |
| `===` dan `!==` | Membandingkan nilai beserta tipe |
| `??` | Memberikan nilai bawaan untuk `null` atau `undefined` |
| `?.` | Mengakses properti secara aman |
| `{ ...objek }` | Menyalin objek secara dangkal |
| `[ ...array ]` | Menyalin array secara dangkal |
| `map()` | Mengolah setiap elemen menjadi array baru |
| `filter()` | Menyaring elemen berdasarkan kondisi |
| `find()` | Mengambil elemen pertama yang cocok |
| `console.table()` | Menampilkan data dalam bentuk tabel |

## Hasil Pembelajaran

Setelah menyelesaikan praktikum ini, saya memahami penggunaan variabel, operator, fungsi, array of objects, dan array methods dalam JavaScript. Saya juga belajar memeriksa data serta melakukan debugging melalui Console dan breakpoint.

## Kesimpulan

JavaScript membantu mengolah data dan membuat halaman web lebih dinamis. Pemahaman terhadap sintaks dasar, fungsi, array methods, dan debugging penting untuk mengembangkan aplikasi web.

## Deklarasi AI

Saya menggunakan AI sebagai pendamping belajar untuk membantu memahami materi JavaScript, debugging, dan langkah pengerjaan worksheet. Saya tetap memeriksa dan memahami hasil yang digunakan dalam pekerjaan saya.


# Praktikum P09 — DOM dan Event

## Deskripsi

Praktikum P09 merupakan bagian dari mata kuliah Pengembangan Aplikasi Berbasis Web (PABW) yang membahas penggunaan **DOM (Document Object Model)** dan **Event** pada JavaScript.

Pada praktikum ini, halaman profil dikembangkan agar dapat menampilkan daftar proyek secara dinamis, memfilter proyek berdasarkan kategori, dan memvalidasi formulir kontak tanpa memuat ulang halaman.

## Tujuan Praktikum

- Memilih dan mengakses elemen HTML menggunakan `querySelector()` dan `querySelectorAll()`.
- Membuat elemen HTML secara dinamis menggunakan `document.createElement()`.
- Menampilkan data proyek menggunakan `textContent` dan `append()`.
- Menerapkan event handling dan event delegation.
- Membuat penanda visual pada tombol filter yang aktif.
- Menampilkan pesan ketika tidak ada proyek yang sesuai dengan kategori.
- Melakukan validasi formulir kontak menggunakan JavaScript.
- Memeriksa event dan error melalui Developer Tools pada browser.

## Fitur

1. **Daftar proyek dinamis**  
   Daftar proyek ditampilkan berdasarkan data yang tersedia di `app.js`.

2. **Filter kategori proyek**  
   Pengguna dapat memfilter proyek berdasarkan kategori Semua, HTML, UI/UX, dan CSS.

3. **Penanda tombol aktif**  
   Tombol kategori yang dipilih memiliki penanda visual.

4. **Pesan keadaan kosong**  
   Pesan ditampilkan ketika tidak ada proyek yang sesuai dengan kategori yang dipilih.

5. **Validasi formulir kontak**  
   Formulir memeriksa input nama, email, NIM, dan pesan serta menampilkan pesan kesalahan jika ada kolom yang belum diisi.

## Struktur Berkas

```text
P09-25523235/
├── profil.html
├── css/
│   ├── base.css
│   ├── komponen.css
│   ├── layout.css
│   ├── responsif.css
│   ├── tema.css
│   └── tokens.css
├── js/
│   ├── app.js
│   └── dom.js
└── media/
    └── profil.jpg
```

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript ES Modules
- DOM API
- Browser Developer Tools
- Git dan GitHub

## Cara Menjalankan

1. Buka folder `P09-25523235` di Visual Studio Code.
2. Jalankan `profil.html` menggunakan Live Server atau server lokal.
3. Buka halaman profil di browser.
4. Periksa daftar proyek dan coba setiap tombol filter.
5. Uji validasi formulir kontak dengan mengirim formulir dalam keadaan kosong dan mengisi kolom yang diperlukan.
6. Buka Developer Tools menggunakan `F12` untuk memeriksa Console dan Event Listeners.

## Keamanan dan Praktik yang Baik

- Menggunakan `textContent` untuk menampilkan teks agar isi data tidak diperlakukan sebagai HTML.
- Memasang event listener pada elemen induk untuk menerapkan event delegation.
- Memisahkan data proyek dan pengelolaan DOM ke dalam berkas JavaScript.
- Menangani keadaan ketika hasil filter kosong.
- Memeriksa elemen DOM dan error melalui Developer Tools.

## Hasil Praktikum

Halaman profil dapat menampilkan daftar proyek dari data JavaScript, memfilter proyek berdasarkan kategori, menunjukkan tombol aktif, menampilkan pesan keadaan kosong, dan melakukan validasi formulir kontak.

# Praktikum P10 — Fetch API dan Penanganan Error

## Deskripsi
Praktikum P10 membahas penggunaan Fetch API untuk mengambil data dari API, menangani respons server, serta menampilkan data dan pesan kesalahan pada halaman web.

## Tujuan Praktikum
- Memahami penggunaan Fetch API untuk mengambil data dari server.
- Memeriksa status respons dari API.
- Menerapkan `async/await` dan `try/catch` untuk menangani proses pengambilan data dan kesalahan.
- Memisahkan kode JavaScript berdasarkan tanggung jawabnya.
- Menampilkan data dan pesan kesalahan pada halaman web.

## Struktur Folder

```text
P10-25523235/
├── css/
│   ├── base.css
│   ├── komponen.css
│   ├── layout.css
│   ├── responsif.css
│   ├── tema.css
│   └── tokens.css
├── js/
│   ├── api.js
│   ├── app.js
│   ├── dom.js
│   └── events.js
├── media/
│   └── profil.jpg
├── profil.html
└── README.md
```

*Catatan: Sesuaikan struktur folder di atas dengan berkas yang benar-benar ada di folder P10 kamu.*

## Teknologi yang Digunakan
- HTML5
- CSS3
- JavaScript
- Fetch API
- JSONPlaceholder sebagai sumber data API
- Git dan GitHub untuk pengelolaan versi

## Sumber API
Data diambil dari JSONPlaceholder:

`https://jsonplaceholder.typicode.com/posts`

API tersebut menyediakan data contoh berupa daftar postingan dalam format JSON.

## Cara Menjalankan
1. Buka folder `P10-25523235` di Visual Studio Code.
2. Pastikan berkas HTML, CSS, dan JavaScript tersedia sesuai struktur proyek.
3. Jalankan `profil.html` menggunakan ekstensi Live Server.
4. Buka halaman melalui browser.
5. Periksa tampilan data dan pesan kesalahan jika permintaan API gagal.

## Penanganan Error
Pengambilan data menggunakan `try/catch` untuk menangani kesalahan selama proses permintaan. Respons HTTP juga perlu diperiksa melalui properti `response.ok`, karena respons seperti HTTP 404 tidak otomatis menyebabkan `fetch()` masuk ke blok `catch`.

## Hasil Praktikum
Praktikum ini menghasilkan halaman web yang mengambil data dari API dan menangani kondisi ketika permintaan berhasil maupun gagal.

# Praktikum PABW — Pertemuan 11

## Modul JavaScript, State, dan LocalStorage

### Identitas

- **Nama:** Najla Mufidah
- **NIM:** 25523235
- **Mata Kuliah:** Pengembangan Aplikasi Berbasis Web (PABW)
- **Pertemuan:** 11

## Deskripsi

Pertemuan 11 membahas pemecahan kode JavaScript menjadi beberapa modul, pemisahan state dari tampilan, serta penggunaan `localStorage` untuk menyimpan dan memulihkan pilihan pengguna.

Pada praktikum ini, halaman profil dan daftar karya dikembangkan agar pilihan kategori filter dapat dipertahankan ketika halaman dibuka kembali. Data yang tersimpan juga diperiksa agar aplikasi tetap dapat berjalan ketika data tidak valid atau rusak.

## Tujuan Praktikum

1. Memahami penggunaan `export` dan `import` pada modul JavaScript.
2. Memisahkan data, state, event, dan tampilan ke dalam file yang berbeda.
3. Memahami proses penyimpanan dan pemulihan data menggunakan `localStorage`.
4. Menangani data penyimpanan yang rusak atau tidak sesuai versi.
5. Menguji aplikasi dan menyimpan perubahan menggunakan Git dan GitHub.

## Struktur Berkas

```text
P11-25523235/
├── profil.html
├── README.md
├── css/
│   ├── base.css
│   ├── komponen.css
│   ├── layout.css
│   ├── responsif.css
│   ├── tema.css
│   └── tokens.css
├── js/
│   ├── api.js
│   ├── app.js
│   ├── data.js
│   ├── dom.js
│   ├── events.js
│   ├── state.js
│   └── storage.js
└── media/
    └── profil.jpg
```

*Catatan: Struktur di atas mengikuti berkas yang digunakan dalam proyek. Pastikan nama dan keberadaan setiap file sesuai dengan folder P11 milikmu.*

## Penjelasan Modul JavaScript

| Berkas | Tanggung jawab |
|---|---|
| `data.js` | Menyediakan data profil, keahlian, dan daftar karya. |
| `dom.js` | Mengelola elemen DOM serta merender daftar karya berdasarkan state. |
| `state.js` | Mengelola keadaan aplikasi dan perubahan kategori filter. |
| `events.js` | Menangani interaksi pengguna, seperti pemilihan kategori dan tombol reset. |
| `storage.js` | Menyimpan, membaca, dan menghapus data dari `localStorage`. |
| `api.js` | Menangani pengambilan data dari API. |
| `app.js` | Menghubungkan modul dan menjalankan proses awal aplikasi. |

## Penggunaan LocalStorage

Aplikasi menggunakan kunci `pabw-p11` untuk menyimpan pilihan kategori filter.

Data yang disimpan mencakup:

- `versi`: versi format data penyimpanan.
- `kategoriAktif`: kategori filter yang sedang dipilih.

Objek JavaScript diubah menjadi teks JSON menggunakan `JSON.stringify()` sebelum disimpan. Saat data dibaca kembali, `JSON.parse()` digunakan untuk mengubah teks JSON menjadi objek.

Fungsi yang digunakan:

- `simpan(state)`: menyimpan kategori aktif.
- `muat()`: membaca dan memvalidasi data tersimpan.
- `aturUlang()`: menghapus data tersimpan.

Jika data tidak valid, rusak, atau memiliki versi yang tidak sesuai, aplikasi menangani kondisi tersebut dan menggunakan kategori awal `semua`.

## Pengujian

Pengujian yang dilakukan atau perlu dipastikan sebelum pengumpulan:

- [ ] Halaman profil dapat dibuka tanpa error JavaScript.
- [ ] Filter kategori dapat digunakan.
- [ ] Pilihan kategori tetap tersimpan setelah halaman dimuat ulang.
- [ ] Tombol reset menghapus simpanan dan mengembalikan filter ke `semua`.
- [ ] Data penyimpanan yang rusak dapat ditangani tanpa menghentikan aplikasi.
- [ ] Modul JavaScript dapat diimpor tanpa error.
- [ ] Perintah `node -v` dan `npm.cmd -v` berhasil dijalankan.

## Versi Node.js dan npm

| Perintah | Hasil |
|---|---|
| `node -v` | `v24.22.0` |
| `npm.cmd -v` | Isi dengan versi npm yang muncul di terminal |

Catatan: `npm.cmd -v` digunakan di PowerShell karena eksekusi skrip `npm.ps1` dibatasi oleh pengaturan keamanan sistem.

## Pengungkapan Penggunaan AI

AI digunakan sebagai alat bantu untuk memahami materi, menjelaskan pesan error, menyusun langkah pemecahan masalah, serta membantu menyusun dokumentasi README.

Bagian yang saya kerjakan dan verifikasi sendiri meliputi pengoperasian proyek di VS Code, pengujian fitur, pemeriksaan hasil terminal, serta penyesuaian kode dan dokumentasi sesuai hasil praktikum.

Saya bertanggung jawab untuk memahami, memeriksa, dan memastikan kesesuaian kode serta isi dokumentasi sebelum dikumpulkan.

## Teknologi dan Alat

- HTML
- CSS
- JavaScript ES Modules
- LocalStorage
- Node.js dan npm
- Visual Studio Code
- Git dan GitHub

## Kesimpulan

Melalui Pertemuan 11, saya mempelajari cara memisahkan kode menjadi modul, mengelola state aplikasi, dan menyimpan pilihan pengguna menggunakan `localStorage`. Saya juga mempelajari pentingnya validasi data serta penanganan error agar aplikasi dapat berjalan dengan lebih baik.


# Praktikum P12 — Migrasi ke Vue.js

## Identitas

- **Nama:** Najla Mufidah
- **NIM:** 25523235
- **Mata Kuliah:** Pengembangan Aplikasi Berbasis Web (PABW)
- **Pertemuan:** 12

## Deskripsi

Praktikum P12 membahas migrasi halaman profil dari JavaScript DOM pada P11 ke Vue.js. Proyek menggunakan Vite sebagai perkakas pengembangan dan build.

Tujuan praktikum ini adalah memahami reaktivitas Vue, pemecahan halaman menjadi komponen, penggunaan props, penyimpanan state, serta proses build untuk produksi.

## Teknologi yang Digunakan

- Vue.js
- Vite
- JavaScript
- HTML dan CSS
- npm

## Struktur Proyek

```text
worksheet-p12/
├── public/
├── src/
│   ├── components/
│   ├── App.vue
│   ├── state.js
│   └── simpanan.js
├── index.html
├── package.json
├── package-lock.json
└── .gitignore
```

Struktur dapat berbeda sesuai berkas yang digunakan dalam proyek.

## Fitur dan Materi

1. Menjalankan proyek Vue menggunakan Vite.
2. Memecah halaman profil menjadi empat komponen.
3. Mengirim data dari komponen induk ke komponen anak menggunakan props.
4. Menggunakan `reactive()` untuk mengelola state reaktif.
5. Menggunakan `onMounted()` untuk memuat data awal.
6. Menggunakan `watch()` untuk menyimpan perubahan pilihan ke `localStorage`.
7. Mempertahankan pilihan terakhir setelah halaman dibuka kembali.
8. Menggunakan tombol atur ulang untuk mengembalikan nilai bawaan.
9. Membuat dan memeriksa build produksi menggunakan Vite.

## Perintah yang Digunakan

Menjalankan server pengembangan:

```bash
npm run dev
```

Memasang dependensi:

```bash
npm install
```

Membuat build produksi:

```bash
npm run build
```

Menjalankan preview hasil build:

```bash
npm run preview
```

Memeriksa versi Node.js dan npm:

```bash
node -v
npm -v
```

## Build Produksi

Build produksi berhasil dijalankan menggunakan `npm run build` dan menghasilkan folder `dist/`. Hasil build kemudian diperiksa menggunakan `npm run preview`.

Folder `dist/` dan `node_modules/` tidak perlu disimpan di repositori jika sudah tercantum dalam `.gitignore`. Berkas `package-lock.json` disimpan agar instalasi dependensi lebih konsisten.

## Bantuan AI

AI digunakan untuk membantu memahami materi Vue.js, menjelaskan fungsi perintah, menyusun dokumentasi, dan memeriksa jawaban worksheet.

Pengerjaan proyek, menjalankan perintah di terminal, menguji aplikasi, memeriksa hasil build, dan memastikan hasil akhir dilakukan sendiri oleh mahasiswa. Kode akhir tetap perlu diperiksa dan dipahami sebelum dikumpulkan.

## Kesimpulan

Melalui praktikum P12, saya mempelajari cara memigrasikan halaman profil ke Vue.js, membagi tampilan menjadi komponen, mengelola state reaktif, menyimpan pilihan pengguna, dan menyiapkan build produksi menggunakan Vite.
