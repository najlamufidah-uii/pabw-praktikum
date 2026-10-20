
<script setup>
import { ref, onMounted, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { state, pilihKategori } from './state.js'
import { simpan, muat, aturUlang } from './simpanan.js'

const identitas = {
  nama: 'Najla Mufidah',
  peran: 'Mahasiswa Informatika'
}

const siap = ref(false)

onMounted(() => {
  const tersimpan = muat()

  if (
    tersimpan &&
    ['semua', 'HTML', 'UI/UX', 'CSS'].includes(tersimpan.kategoriAktif)
  ) {
    pilihKategori(tersimpan.kategoriAktif)
  }

  siap.value = true
})

watch(
  () => state.pilihanAktif,
  () => {
    if (siap.value) {
      simpan(state)
    }
  }
)

function resetPilihan() {
  aturUlang()
  pilihKategori('semua')
  simpan(state)
}
</script>

<template>
  <main>
    <KepalaProfil :profil="identitas" />

    <TombolFilter
      :kategori-aktif="state.pilihanAktif"
      @ubah-kategori="pilihKategori"
    />

    <button type="button" @click="resetPilihan">
      Atur Ulang
    </button>

    <DaftarProyek :kategori-aktif="state.pilihanAktif" />

    <FormKontak />
  </main>
</template>
