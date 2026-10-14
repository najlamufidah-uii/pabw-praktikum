

console.log("APP.JS BERHASIL DIPANGGIL");

import { render } from "./dom.js";
import "./events.js";
import { state, ubahDaftarProyek } from "./state.js";
import { ambilNotisia } from "./api.js";

console.log("JavaScript berhasil terhubung!");

async function mulaiAplikasi() {
  render(state.daftarKarya);

  try {
    const dataApi = await ambilNotisia();

    ubahDaftarProyek(dataApi);

    console.log("Data API berhasil dimuat:", state.daftarProyek.length);
  } catch (galat) {
    console.error("Gagal memuat API:", galat.message);
  }
}

mulaiAplikasi();
