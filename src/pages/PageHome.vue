<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionOpener from '@/components/sections/SectionOpener.vue'
import SectionPortfolioSlider from '@/components/sections/SectionPortfolioSlider.vue'
</script>

<template>
  <LayoutPage class="main">
    <SectionOpener />
    <SectionPortfolioSlider />
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
