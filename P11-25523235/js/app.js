

console.log("APP.JS BERHASIL DIPANGGIL");

import { render } from "./dom.js";
import "./events.js";
import { ambilNotisia } from "./api.js";
import {
  state,
  ubahDaftarProyek,
  pulihkanPilihan
} from "./state.js";

console.log("JavaScript berhasil terhubung!");

async function mulaiAplikasi() {
  pulihkanPilihan();
  render(state);

  try {
    const dataApi = await ambilNotisia();

    ubahDaftarProyek(dataApi);

    console.log("Data API berhasil dimuat:", state.daftarProyek.length);
  } catch (galat) {
    console.error("Gagal memuat API:", galat.message);
  }
}

mulaiAplikasi();
