<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionCalculator from '@/components/sections/calculator/CalculatorMain.vue'
import ComponentOpener from '@/layout/LayoutOpener.vue'
</script>

<template>
  <div class="header-spase"></div>
  <LayoutPage class="main">
    <ComponentOpener class="box-y gap2">
      <div class="media__none"></div>
      <SectionCalculator />
      <div class="flex"></div>
    </ComponentOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
