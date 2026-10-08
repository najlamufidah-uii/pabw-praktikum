  import {karya} from "./app.js";

console.log("DOM BERHASIL TERHUBUNG")

const daftarKarya = document.querySelector("#karya ul");
  const pesanKosong = document.querySelector("#pesan-kosong");
const formKontak = document.querySelector("#kontak form");
const inputNama = document.querySelector("#nama");
const inputEmail = document.querySelector("#email");
const inputNim = document.querySelector("#nim");
const inputPesan = document.querySelector("#pesan");


console.log(daftarKarya);
console.log(formKontak);
console.log(inputNama);
console.log(inputEmail);
console.log(inputNim);
console.log(inputPesan);



function buatKartu(proyek) {
  const li = document.createElement("li");

  li.className = "kartu";
  li.textContent = proyek.judul;

  return li;
}

function render(daftar) {
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

render(karya);

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");

  if (!tombol) return;
  
tandaiTombolAktif(tombol);

  const kategori = tombol.dataset.kategori;

  const terpilih = karya.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  render(terpilih);
});

formKontak.addEventListener("submit", event => {
  event.preventDefault();

  document.querySelectorAll("#kontak small.error").forEach(error => {
    error.remove();
  });

  if (inputNama.value.trim() === "") {
    const errorNama = document.createElement("small");
    errorNama.classList.add("error");
    errorNama.textContent = "Nama wajib diisi!";
    inputNama.after(errorNama);
  }

  if (inputEmail.value.trim() === "") {
    const errorEmail = document.createElement("small");
    errorEmail.classList.add("error");
    errorEmail.textContent = "Email wajib diisi!";
    inputEmail.after(errorEmail);
  }

  if (inputNim.value.trim() === "") {
    const errorNim = document.createElement("small");
    errorNim.classList.add("error");
    errorNim.textContent = "NIM wajib diisi!";
    inputNim.after(errorNim);
  }

  if (inputPesan.value.trim() === "") {
    const errorPesan = document.createElement("small");
    errorPesan.classList.add("error");
    errorPesan.textContent = "Pesan wajib diisi!";
    inputPesan.after(errorPesan);
  }
});

    const elemenTes = document.querySelector("#elemen-yang-tidak-ada");

console.log(elemenTes);
