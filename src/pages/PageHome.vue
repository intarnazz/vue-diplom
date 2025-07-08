<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionOpener from '@/layout/LayoutOpener.vue'
import SectionPortfolioSlider from '@/components/sections/SectionPortfolioSlider.vue'
import SectionAboutUs from '@/components/sections/index/SectionAboutUs.vue'
import ComponentBaner from '@/components/sections/SectionBaner.vue'
</script>

<template>
  <LayoutPage class="main">
    <SectionOpener>
      <ComponentBaner />
    </SectionOpener>
    <!-- <SectionPortfolioSlider /> -->
    <!-- <SectionAboutUs /> -->
    <div class=""></div>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
