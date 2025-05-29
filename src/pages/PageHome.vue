<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionOpener from '@/components/sections/SectionOpener.vue'
import SectionPortfolioSlider from '@/components/sections/SectionPortfolioSlider.vue'
import SectionAboutUs from '@/components/sections/index/SectionAboutUs.vue'
</script>

<template>
  <LayoutPage class="main">
    <SectionOpener />
    <SectionPortfolioSlider />
    <SectionAboutUs />
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
