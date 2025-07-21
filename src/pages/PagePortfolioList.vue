<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionPortfolioList from '@/components/sections/portfolioCatalog/PortfolioCatalogMain.vue'
</script>

<template>
  <div class="header-spase"></div>
  <LayoutPage class="main">
      <div class="media__none"></div>
      <SectionPortfolioList />
      <div class=""></div>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
