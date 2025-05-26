<script setup>
import { portfolio as p } from '@/api/api.js'
import { onMounted, ref } from 'vue'

const API_URL = import.meta.env.VITE_API_URL
const isLoding = ref(true)
const portfolio = ref(null)

async function init() {
  isLoding.value = true
  const res = await p.all()
  if (res.success) portfolio.value = res.data
}

onMounted(async () => {
  await init()
  console.log(portfolio.value)
  isLoding.value = false
})
</script>

<template>
  <section class="portfolio-slider">
    <div v-if="!isLoding" style="width: 97dvw; margin: auto">
      <swiper-container>
        <swiper-slide v-for="(value, key) in portfolio" :key="key">
          <img :src="`${API_URL}image/${value.image_id}`" alt="" />
        </swiper-slide>
        ...
      </swiper-container>
    </div>
  </section>
</template>

<style lang="sass" scoped></style>
