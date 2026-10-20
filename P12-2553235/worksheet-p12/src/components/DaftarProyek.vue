
<script setup>
import { computed } from 'vue'
import { karya } from '../data.js'

const props = defineProps({
  kategoriAktif: {
    type: String,
    default: 'semua'
  }
})

const karyaTampil = computed(() => {
  if (props.kategoriAktif === 'semua') {
    return karya
  }

  return karya.filter(
    (proyek) => proyek.kategori === props.kategoriAktif
  )
})
</script>

<template>
  <section>
    <h2>Proyek Saya</h2>

    <article v-for="proyek in karyaTampil" :key="proyek.judul">
      <h3>{{ proyek.judul }}</h3>
      <p>{{ proyek.kategori }} · {{ proyek.tahun }}</p>
    </article>

    <p v-if="karyaTampil.length === 0">
      Belum ada proyek pada kategori ini.
    </p>
  </section>
</template>
