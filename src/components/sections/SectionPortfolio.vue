<script setup>
import { onMounted, ref } from 'vue'
import { portfolio as p } from '@/api/api.js'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ComponentImg from '@/components/ComponentImg.vue'

const isLoding = ref(true)
const portfolioList = ref(null)

async function init() {
  isLoding.value = true
  const res = await p.all({ limit: 18 })
  if (res.success) portfolioList.value = res.data
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
        <div v-for="(portfolio, id) in portfolioList" :key="id" class="portfolio__item">
          <h3>{{ portfolio.image_id }}</h3>
          <ComponentImg class="img" :id="portfolio.image_id" :alt="portfolio.title" />
        </div>
      </div>
    </LayoutWrapper>
  </section>
</template>

<style lang="sass" scoped>
.portfolio
  &__list
    display: grid
    grid-template-columns: 1fr 1fr 1fr
  &__title
    border-bottom: 1px solid $th
</style>
