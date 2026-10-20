
import { reactive } from 'vue'
import { karya } from './data.js'

export const state = reactive({
  pilihanAktif: 'semua',
  daftarKarya: karya,
  daftarProyek: []
})

export function pilihKategori(pilihan) {
  state.pilihanAktif = pilihan
}

export function ambilKaryaTerpilih() {
  if (state.pilihanAktif === 'semua') {
    return state.daftarKarya
  }

  return state.daftarKarya.filter(
    (item) => item.kategori === state.pilihanAktif
  )
}

export function ubahDaftarProyek(dataApi) {
  state.daftarProyek = dataApi
}
