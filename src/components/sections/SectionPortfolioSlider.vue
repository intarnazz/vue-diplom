<script setup>
import { portfolio as p } from '@/api/api.js'
import { onMounted, ref, nextTick } from 'vue'
import ComponentImg from '@/components/ComponentImg.vue'
import { RouterLink } from 'vue-router'

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
    swiperEl.slidesPerView = window.innerWidth < 666 ? 1 : 3
    swiperEl.centeredSlides = true
    swiperEl.loop = true
    swiperEl.loopedSlides = portfolio.value.length
    swiperEl.spaceBetween = 60
    swiperEl.addEventListener('swiperinit', () => {
      swiperEl.swiper.slideToLoop(3, 0)
    })
    const nextBtn = document.querySelector('.swiper-button-next')
    const prevBtn = document.querySelector('.swiper-button-prev')

    nextBtn?.addEventListener('click', () => {
      swiperEl.swiper.slideNext()
    })

    prevBtn?.addEventListener('click', () => {
      swiperEl.swiper.slidePrev()
    })
    window.addEventListener('resize', () => {
      swiperEl.slidesPerView = window.innerWidth < 666 ? 1 : 3
      swiperEl.swiper.update() // Обновить Swiper
    })
  }
})
</script>

<template>
  <section class="portfolio-slider box-y pr">
    <div v-if="!isLoading" style="width: 110%; margin: 0 auto">
      <swiper-container>
        <swiper-slide style="padding: 2rem 0" v-for="(value, key) in portfolio" :key="key">
          <RouterLink :to="{ name: 'portfolio-id', params: { id: value.id, name: value.title } }">
            <ComponentImg class="portfolio-slider__img" :id="value.image_id" />
          </RouterLink>
        </swiper-slide>
      </swiper-container>
    </div>
    <div class="swiper-buttons__wrapper pa center">
      <div class="box-x swiper-buttons">
        <button class="swiper-button swiper-button-prev">
          <img src="@/assets/icons/arrow_left.svg" alt="arrow_left" />
        </button>
        <button class="swiper-button swiper-button-next">
          <img src="@/assets/icons/arrow_right.svg" alt="arrow_right" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.swiper-button
  pointer-events: auto
  transition: .2s
  &:active
    transform: scale(1.1)
.swiper-buttons
  width: 42%
  &__wrapper
    width: 110%
    +h
    z-index: 2
    pointer-events: none
  & img
    width: 8rem
    height: 8rem
    padding: 0rem
    background-color: #000
swiper-slide.swiper-slide-active
  position: relative
  z-index: 1
  & img
      transform: scale(1.1)
      transition: .2s

.portfolio-slider
  margin: 0 0 0 -10%
  width: 110%
  overflow: hidden
  align-items: center
  justify-content: center
  &__img
    width: 100%
    height: 300px
    object-fit: cover

@media screen and (max-width: 666px)
  .swiper-buttons
    width: 80%
    &__wrapper
      width: 110%
</style>
