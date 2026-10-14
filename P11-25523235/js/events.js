import { aturUlang } from "./storage.js";
import {
  barisFilter,
  tandaiTombolAktif,
  render,
  formKontak,
  inputNama,
  inputEmail,
  inputNim,
  inputPesan
} from "./dom.js";

import {
  state,
  ubahPilihanAktif
} from "./state.js";


barisFilter.addEventListener("click", (event) => {
  console.log("Tombol filter diklik!");

  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  console.log("Kategori yang dipilih:", kategori);

  ubahPilihanAktif(kategori);
  tandaiTombolAktif(tombol);
});


formKontak.addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelectorAll("#kontak small.error").forEach((error) => {
    error.remove();
  });

  if (inputNama.value.trim() === "") {
    const error = document.createElement("small");
    error.classList.add("error");
    error.textContent = "Nama wajib diisi!";
    inputNama.after(error);
  }

  if (inputEmail.value.trim() === "") {
    const error = document.createElement("small");
    error.classList.add("error");
    error.textContent = "Email wajib diisi!";
    inputEmail.after(error);
  }

  if (inputNim.value.trim() === "") {
    const error = document.createElement("small");
    error.classList.add("error");
    error.textContent = "NIM wajib diisi!";
    inputNim.after(error);
  }

  if (inputPesan.value.trim() === "") {
    const error = document.createElement("small");
    error.classList.add("error");
    error.textContent = "Pesan wajib diisi!";
    inputPesan.after(error);
  }
});
    
const tombolReset = document.querySelector("#tombol-reset");

tombolReset.addEventListener("click", () => {
  console.log("Sebelum reset:", localStorage.getItem("pabw-p11"));

  aturUlang();

  console.log("Sesudah reset:", localStorage.getItem("pabw-p11"));

  state.pilihanAktif = "semua";
  render(state);

  const tombolSemua = document.querySelector(
    '[data-kategori="semua"]'
  );

  if (tombolSemua) {
    tandaiTombolAktif(tombolSemua);
  }
});
