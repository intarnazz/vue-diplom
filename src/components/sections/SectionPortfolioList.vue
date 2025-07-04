<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { portfolio as p } from '@/api/api.js'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ComponentImg from '@/components/ComponentImg.vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['limit'])
const isLoding = ref(true)
const portfolioList = ref([])

const limitLocal = ref(9)
const totalCount = ref(null)

const sentinel = ref(null)
let observer = null

const offset = computed(() => portfolioList.value.length)

const limit = computed(() => props.limit || limitLocal.value)

const canLoding = computed(() => totalCount.value === null || offset.value < totalCount.value)

function resetObserver() {
  if (observer && sentinel.value) {
    observer.unobserve(sentinel.value)
    observer.disconnect()
  }
  setupObserver()
}

async function init() {
  if (!canLoding.value) return
  // isLoding.value = true
  const res = await p.all({
    limit: limit.value,
    offset: offset.value,
  })
  if (res.success) {
    res.data.forEach((e) => {
      let index
      index = portfolioList.value.findIndex((i) => i.id === e.id)
      if (index === -1) portfolioList.value.push(e)
    })

    totalCount.value = res.pagingInfo.totalCount
  }

  isLoding.value = false
  // Переинициализировать observer после подгрузки
  nextTick(() => {
    resetObserver()
  })
}

function setupObserver() {
  if (!sentinel.value) return
  observer = new IntersectionObserver(
    async ([entry]) => {
      if (entry.isIntersecting && canLoding.value && !isLoding.value) {
        await init()
      }
    },
    { root: null, threshold: 1.0 },
  )
  observer.observe(sentinel.value)
}

onMounted(async () => {
  await init()
  setupObserver()
})

onUnmounted(() => {
  if (observer && sentinel.value) {
    observer.unobserve(sentinel.value)
    observer.disconnect()
  }
})
</script>

<template>
  <section class="portfolio wh">
    <LayoutWrapper>
      <div class="portfolio__title box-x">
        <h2>Портфолио наших проектов</h2>
        <div class="flex"></div>
      </div>
      <div v-if="!isLoding" class="portfolio__list">
        <RouterLink
          :to="{ name: 'portfolio-id', params: { id: portfolio.id, name: portfolio.title } }"
          v-for="(portfolio, id) in portfolioList"
          :key="id"
          class="portfolio__item pr"
        >
          <div class="pa box-y">
            <div class="flex"></div>
            <div class="box-x">
              <h3>{{ portfolio.title }}</h3>
            </div>
          </div>
          <ComponentImg class="img" :id="portfolio.image_id" :alt="portfolio.title" />
        </RouterLink>

        <!-- Сентинел для IntersectionObserver -->
        <div ref="sentinel" class="observer-sentinel" />
      </div>
    </LayoutWrapper>
  </section>
</template>

<style lang="sass" scoped>
.portfolio
  &__list
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    & h3
      +bgcf
      padding: 0 1rem
  &__title
    border-bottom: 1px solid $th
@media screen and (max-width: 650px)
  .portfolio
    &__list
      grid-template-columns: 1fr 1fr
@media screen and (max-width: 350px)
  .portfolio
    &__list
      grid-template-columns: 1fr
</style>
