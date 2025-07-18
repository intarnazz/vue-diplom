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
  <section class="text-white box-y pr gap2">
    <div class="relative h-[300px]">
      <img
        src="@/assets/img/mche-lee-ACt11upLUhE-unsplash.jpg"
        alt="О компании"
        class="absolute img inset-0 w-full h-full object-cover z-0"
      />
      <div class="bg-gradient-to-t from-black to-transparent pa wh"></div>
      <LayoutWrapper class="h box-x">
        <h1 class="bottom-8 left-8 text-white text-4xl font-bold z-10 drop-shadow-md">
          Портфолио наших проектов
        </h1>
      </LayoutWrapper>
    </div>
    <LayoutWrapper class="box-y gap2">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RouterLink
          v-for="portfolio in portfolioList"
          :key="portfolio.id"
          :to="{ name: 'portfolio-id', params: { id: portfolio.id, name: portfolio.title } }"
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:scale-[1.01] transition-transform"
        >
          <ComponentImg
            class="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-500"
            :id="portfolio.image_id"
            :alt="portfolio.title"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"
          ></div>

          <div class="relative z-20 p-6 flex flex-col justify-end h-full">
            <h3 class="text-2xl font-bold tracking-tight mb-2">{{ portfolio.title }}</h3>
            <p class="text-sm text-white/80 line-clamp-4">{{ portfolio.description }}</p>
            <div class="mt-4 text-xs text-white/60">
              <p v-if="portfolio.client" class="truncate">Клиент: {{ portfolio.client }}</p>
              <p v-if="portfolio.completed_at">
                Завершено: {{ new Date(portfolio.completed_at).toLocaleDateString() }}
              </p>
            </div>
          </div>
        </RouterLink>
      </div>

      <!-- Sentinel для подгрузки -->
      <div ref="sentinel" class="h-4"></div>
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
