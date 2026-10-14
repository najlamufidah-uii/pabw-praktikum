import { simpan, muat } from "./storage.js";
import { render } from "./dom.js";
import { karya } from "./data.js";

export const state = {
  pilihanAktif: "semua",
  daftarKarya: karya,
  daftarProyek: []
};


export function ubahPilihanAktif(pilihan) {
  state.pilihanAktif = pilihan;
  simpan(state);
  console.log("Kategori yang disimpan:", localStorage.getItem("pabw-p11"));
  render(state);
}



export function ambilKaryaTerpilih() {
  if (state.pilihanAktif === "semua") {
    return state.daftarKarya;
  }

  return state.daftarKarya.filter(
    (item) => item.kategori === state.pilihanAktif
  );
}

export function ubahDaftarProyek(dataApi) {
  state.daftarProyek = dataApi;
}
   export function pulihkanPilihan() {
  const tersimpan = muat();

  if (
    tersimpan &&
    tersimpan.versi === 2 &&
    ["semua", "HTML", "UI/UX", "CSS"].includes(tersimpan.kategoriAktif)
  ) {
    state.pilihanAktif = tersimpan.kategoriAktif;
  } else {
    state.pilihanAktif = "semua";
  }
}
