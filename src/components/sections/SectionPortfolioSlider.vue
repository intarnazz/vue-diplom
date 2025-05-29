<script setup>
import { portfolio as p } from '@/api/api.js'
import { onMounted, ref, nextTick } from 'vue'

const API_URL = import.meta.env.VITE_API_URL
const isLoading = ref(true)
const portfolio = ref([])

async function init() {
  isLoading.value = true
  const res = await p.all()
  if (res.success) portfolio.value = res.data
  isLoading.value = false
}

onMounted(async () => {
  await init()
  await nextTick()

  const swiperEl = document.querySelector('swiper-container')
  if (swiperEl) {
    swiperEl.slidesPerView = 3
    swiperEl.centeredSlides = true
    swiperEl.loop = true
    swiperEl.loopedSlides = portfolio.value.length
    swiperEl.spaceBetween = 30
    swiperEl.addEventListener('swiperinit', () => {
      swiperEl.swiper.slideToLoop(3, 0)
    })
  }
})
</script>

<template>
  <section class="portfolio-slider box-y">
    <div v-if="!isLoading" style="width: 110%; margin: auto">
      <swiper-container>
        <swiper-slide v-for="(value, key) in portfolio" :key="key">
          <img :src="`${API_URL}image/${value.image_id}`" alt="" />
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<style scoped lang="sass">
.portfolio-slider
  margin: 0 0 0 -10%
  width: 110%
  overflow: hidden
  align-items: center
  justify-content: center
  & img
    width: 100%
    height: 300px
    object-fit: cover
</style>
