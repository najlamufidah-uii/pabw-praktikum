
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
  ubahPilihanAktif,
  ambilKaryaTerpilih
} from "./state.js";

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");

  if (!tombol) return;

  const kategori = tombol.dataset.kategori;

  ubahPilihanAktif(kategori);
  tandaiTombolAktif(tombol);
  render(ambilKaryaTerpilih());
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
