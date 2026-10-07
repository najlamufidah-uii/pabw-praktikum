  import {karya} from "./app.js";

console.log("DOM BERHASIL TERHUBUNG")

const daftarKarya = document.querySelector("#karya ul");
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



karya.map(item => {
  const li = document.createElement("li");

  li.textContent = `${item.judul} — ${item.kategori} (${item.tahun})`;

  daftarKarya.append(li);
});

const filterKategori = document.querySelector("#filter");

filterKategori.addEventListener("click", event => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  const kategori = event.target.dataset.kategori;

  const hasilFilter =
    kategori === "semua"
      ? karya
      : karya.filter(item => item.kategori === kategori);

  daftarKarya.textContent = "";

  hasilFilter.map(item => {
    const li = document.createElement("li");

    li.textContent = `${item.judul} — ${item.kategori} (${item.tahun})`;

    daftarKarya.append(li);
  });
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
