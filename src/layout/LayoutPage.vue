<script setup>
import { onMounted, ref } from 'vue'

const token = ref(null)

onMounted(() => {
  token.value = sessionStorage.getItem('token')
})
</script>

<template>
  <main v-if="!loding" class="main box-y flex">
    <slot> </slot>
  </main>
</template>

<style lang="sass" scoped>
// .main
//   margin-top: $header
.main
  justify-content: flex-start
  align-items: center
</style>
