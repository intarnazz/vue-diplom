<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { portfolio as p } from '@/api/api.js'
import { RouterLink } from 'vue-router'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ComponentImg from '@/components/ComponentImg.vue'
import LayoutPageTitle from '@/layout/LayoutPageTitle.vue'

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
    <LayoutPageTitle>
      <template #image>
        <img
          src="@/assets/img/mche-lee-ACt11upLUhE-unsplash.jpg"
          alt="О компании"
          class="absolute img inset-0 w-full h-full object-cover z-0"
        />
      </template>
      <template #default>
        <h2 class="bottom-8 left-8 text-white text-4xl font-bold z-10 drop-shadow-md">
          Портфолио наших проектов
        </h2>
      </template>
    </LayoutPageTitle>

    <!-- Каталог -->
    <LayoutWrapper>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <RouterLink
          v-for="item in portfolioList"
          :key="item.id"
          :to="{ name: 'portfolio-id', params: { id: item.id, name: item.title } }"
          class="group bg-[#f9f8f7] border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-200 flex flex-col"
        >
          <!-- Изображение -->
          <div class="aspect-[4/3] overflow-hidden">
            <ComponentImg
              :id="item.image_id"
              :alt="item.title"
              class="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          </div>

          <!-- Контент -->
          <div class="p-5 flex flex-col gap-2 text-zinc-800">
            <h3 class="text-[17px] font-semibold leading-tight tracking-tight">
              {{ item.title }}
            </h3>

            <p class="text-[14px] text-zinc-600 leading-snug line-clamp-3">
              {{ item.description }}
            </p>

            <div class="pt-3 text-xs text-zinc-500 border-t border-dashed border-zinc-200 mt-auto">
              <p v-if="item.client" class="mt-1">
                Клиент: <span class="text-zinc-700">{{ item.client }}</span>
              </p>
              <p v-if="item.completed_at">
                Завершено:
                <span class="text-zinc-700">{{
                  new Date(item.completed_at).toLocaleDateString()
                }}</span>
              </p>
            </div>
          </div>
        </RouterLink>
      </div>

      <!-- Sentinel для подгрузки -->
      <div ref="sentinel" class="h-8"></div>
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
