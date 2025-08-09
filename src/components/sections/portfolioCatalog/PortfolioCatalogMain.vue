<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { portfolio as p } from '@/api/api.js'
import { RouterLink } from 'vue-router'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ComponentImg from '@/components/ComponentImg.vue'
import LayoutPageTitle from '@/layout/LayoutPageTitle.vue'
import ComponentXLTitle from '@/components/ComponentXLTitle.vue'
import ComponentTitle from '@/components/ComponentTitle.vue'

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

function splitNotes(notes) {
  if (!notes) return { firstSentence: '', rest: '' }
  const match = notes.match(/[.!?]\s/)
  if (match) {
    const endIndex = match.index + match[0].length - 1
    const firstSentence = notes.substring(0, endIndex)
    const rest = notes.substring(endIndex)
    return { firstSentence, rest }
  } else {
    return { firstSentence: notes, rest: '' }
  }
}

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
  <section class="text-white box-y pr gap2 portfolio-catalog">
    <LayoutPageTitle>
      <template #image>
        <img
          src="@/assets/img/jorik-kleen-LHexZJI36rY-unsplash.jpg"
          alt="О компании"
          class="absolute img inset-0 w-full h-full object-cover z-0"
        />
      </template>
      <template #default>
        <div class="box-y">
          <div class="flex"></div>
          <ComponentXLTitle
            :h1="`Примеры успешно завершённых проектов компании`"
            :h3="`Реализованные проекты, отражающие качество и профессионализм`"
          />
          <div class="flex"></div>
        </div>
      </template>
    </LayoutPageTitle>

    <!-- Каталог -->
    <LayoutWrapper>
      <div class="portfolio-catalog__list box-y gap4">
        <div
          v-for="portfolio in portfolioList"
          :key="portfolio.id"
          class="portfolio-catalog__list-item box-y gap2"
        >
          <div class="relative">
            <ComponentImg class="img max-h-[520px]" :id="portfolio.id" :alt="portfolio.title" />
            <div class="pa box-y gap px-[2rem] py-[2rem]">
              <div class="box-x">
                <ComponentTitle :is-h2="true" :text="portfolio.title" />
                <div class="flex"></div>
              </div>
              <div class="box-x">
                <div class="flex"></div>
                <p class="bg-white text-black">
                  {{ portfolio.description }}
                </p>
              </div>
            </div>
          </div>

          <div class="box-x gap4 as text-black">
            <div class="flex16 box-x gap as">
              <div class="w-[26px] bg-[#04838E]"></div>
              <p class="flex box-none">
                <span class="font-black text-[1.625rem]">{{
                  splitNotes(portfolio.notes).firstSentence
                }}</span>
                <span>{{ splitNotes(portfolio.notes).rest }}</span>
              </p>
            </div>
            <div class="flex9 box-y">
              <div class="box-y gap">
                <div class="box-x media as gap">
                  <h3 class="opacity-50">Клиент</h3>
                  <h3 class="italic media text-right">{{ portfolio.client }}</h3>
                </div>
                <div class="box-x media as gap">
                  <h3 class="opacity-50">Сроки</h3>
                  <h3 class="italic">{{ portfolio.completed_at }}</h3>
                </div>
              </div>
              <div class="box-x">
                <div class="flex"></div>

                <RouterLink
                  class="a"
                  :to="{
                    name: 'portfolio-id',
                    params: { id: portfolio.id, name: portfolio.title },
                  }"
                >
                  <h3>Подробнее</h3>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Sentinel для подгрузки -->
      <div ref="sentinel" class="h-8"></div>
    </LayoutWrapper>
  </section>
</template>

<style lang="sass" scoped></style>
