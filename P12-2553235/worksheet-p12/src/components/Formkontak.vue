
<script setup>
import { ref } from 'vue'

const nama = ref('')
const pesan = ref('')

function kirimForm() {
  nama.value = ''
  pesan.value = ''
}
</script>

<template>
  <section class="form-kontak">
    <h2>Kontak Saya</h2>

    <form @submit.prevent="kirimForm">
      <div class="field-kontak">
        <label for="nama">Nama</label>
        <input
          id="nama"
          v-model="nama"
          type="text"
          placeholder="Masukkan nama"
        />
      </div>

      <div class="field-kontak">
        <label for="pesan">Pesan</label>
        <textarea
          id="pesan"
          v-model="pesan"
          placeholder="Tulis pesan"
          rows="4"
        ></textarea>
      </div>

      <button type="submit">Kirim</button>
    </form>
  </section>
</template>
