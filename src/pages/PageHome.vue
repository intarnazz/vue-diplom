<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
// import SectionOpener from '@/layout/LayoutOpener.vue'
// import SectionPortfolioSlider from '@/components/sections/SectionPortfolioSlider.vue'
import SectionAboutUs from '@/components/sections/index/SectionAboutUs.vue'
import SectionBaner from '@/components/sections/SectionBaner.vue'
import SectionCalculator from '@/components/sections/index/SectionCalculator.vue'
import SectionOutLink from '@/components/sections/index/SectionOutLink.vue'
</script>

<template>
  <LayoutPage class="main">
    <!-- <SectionOpener> -->
    <SectionBaner />
    <!-- </SectionOpener> -->
    <SectionCalculator />
    <!-- <SectionPortfolioSlider /> -->
    <SectionAboutUs />
    <SectionOutLink />
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass">
.main
  margin-top: -$header
</style>
