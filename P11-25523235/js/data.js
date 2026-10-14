

export const nama = "Najla Mufidah";
export const jurusan = "Informatika";

export function buatPerkenalan(nama, jurusan) {
  return `Halo, saya ${nama} dari jurusan ${jurusan}.`;
}

export const daftarKeahlian = [
  "HTML5 Semantik",
  "CSS Fundamental & Design Token",
  "Pengontrol Versi (Git)"
];

export function formatKeahlian(keahlian) {
  return keahlian.join(", ");
}

export const karya = [
  {
    judul: "Halaman Kelas Terbuka Kampus",
    tahun: 2026,
    kategori: "HTML"
  },
  {
    judul: "Desain Antarmuka Aplikasi Mobile",
    tahun: 2026,
    kategori: "UI/UX"
  },
  {
    judul: "Portofolio Web Pribadi",
    tahun: 2026,
    kategori: "CSS"
  }
];
