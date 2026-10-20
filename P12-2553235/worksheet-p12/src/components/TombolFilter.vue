
<script setup>
const props = defineProps({
  kategoriAktif: {
    type: String,
    default: 'semua'
  }
})

const emit = defineEmits(['ubah-kategori'])

const kategori = ['semua', 'HTML', 'UI/UX', 'CSS']
</script>

<template>
  <nav>
    <button
      v-for="item in kategori"
      :key="item"
      type="button"
      @click="emit('ubah-kategori', item)"
      :aria-pressed="props.kategoriAktif === item"
    >
      {{ item }}
    </button>
  </nav>
</template>
