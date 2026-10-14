
console.log("DOM BERHASIL TERHUBUNG");

export const daftarKarya = document.querySelector("#karya ul");
export const pesanKosong = document.querySelector("#pesan-kosong");
export const barisFilter = document.querySelector("#filter");

export const formKontak = document.querySelector("#kontak form");
export const inputNama = document.querySelector("#nama");
export const inputEmail = document.querySelector("#email");
export const inputNim = document.querySelector("#nim");
export const inputPesan = document.querySelector("#pesan");

export function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

export function render(daftar) {
  daftarKarya.textContent = "";

  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  daftar.forEach((proyek) => {
    daftarKarya.append(buatKartu(proyek));
  });
}

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}
