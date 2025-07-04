<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionPortfolioList from '@/components/sections/SectionPortfolioList.vue'
</script>

<template>
  <LayoutPage class="main">
    <div class=""></div>
    <SectionPortfolioList />
    <div class=""></div>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped>
@media screen and (max-width: 910px)
  .gap2
    gap: 0
    margin-bottom: 2rem
</style>
