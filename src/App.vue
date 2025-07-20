<script setup>
import HeaderMain from '@/layout/header/HeaderMain.vue'
import HeaderWhopper from '@/layout/header/HeaderWhopper.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { watchEffect } from 'vue'

const route = useRoute()

watchEffect(() => {
  document.title = route.meta.title || 'КСМ'
  const description = route.meta.description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', description || 'Default description')
  }
})

const search = ref('')
</script>

<template>
  <HeaderMain class="media-480 cansel" @search="(value) => (search = value)" />
  <HeaderWhopper class="media-480 open" @search="(value) => (search = value)" />
  <RouterView :search="search" />
</template>

<style lang="sass" scoped></style>
