<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import { portfolio } from '@/api/api.js'
import { onMounted, ref } from 'vue'

const a = ref()


onMounted(async () => {
  a.value = await portfolio.get(1)
})
</script>

<template>
  <LayoutPage class="main">
    <LayoutWrapper class="flex box-y main__wrapper">
      <h1>{{ a }}</h1>
    </LayoutWrapper>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped>
.baner
  width: 100%
.opener
  &__bg
    gap: 4rem
    padding-top: 6dvh
    background: linear-gradient(to bottom, #f8f7f3 85%, #fff 85%)
.box-y
  align-items: center
.main
  gap: 6rem
</style>
