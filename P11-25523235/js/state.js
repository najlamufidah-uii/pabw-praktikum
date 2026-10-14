
import { render } from "./dom.js";
import { karya } from "./data.js";

export const state = {
  pilihanAktif: "semua",
  daftarKarya: karya,
  daftarProyek: []
};


export function ubahPilihanAktif(pilihan) {
  state.pilihanAktif = pilihan;
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
