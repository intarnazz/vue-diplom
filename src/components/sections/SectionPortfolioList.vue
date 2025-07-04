<script setup>
import { computed, onMounted, ref } from 'vue'
import { portfolio as p } from '@/api/api.js'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ComponentImg from '@/components/ComponentImg.vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['limit'])
const isLoding = ref(true)
const portfolioList = ref([])

const limitLocal = ref(1)
const totalCount = ref(null)

const offset = computed(() => portfolioList.value.length)

const limit = computed(() => props.limit || limitLocal.value)

const canLoding = computed(() => totalCount.value === null || offset.value < totalCount.value)

async function init() {
  if (!canLoding.value) return
  isLoding.value = true
  const res = await p.all({
    limit: limit.value,
    offset: offset.value,
  })
  if (res.success)
    portfolioList.value.push(...res.data), (totalCount.value = res.pagingInfo.totalCount)

  isLoding.value = false
}

onMounted(async () => {
  await init()
})
</script>

<template>
  <section class="portfolio">
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
</style>
