
<script setup>
import { ref } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const identitas = {
  nama: 'Najla Mufidah',
  peran: 'Mahasiswa Informatika'
}

const kategoriAktif = ref('semua')
</script>

<template>
  <main>
    <KepalaProfil :profil="identitas" />

    <TombolFilter
      :kategori-aktif="kategoriAktif"
      @ubah-kategori="kategoriAktif = $event"
    />

    <DaftarProyek :kategori-aktif="kategoriAktif" />
<FormKontak />


    <p>Bagian halaman lainnya akan ditambahkan pada langkah berikutnya.</p>
  </main>
</template>
