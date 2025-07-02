<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionCalculator from '@/components/sections/SectionCalculator.vue'
import ComponentOpener from '@/layout/LayoutOpener.vue'
</script>

<template>
  <LayoutPage class="main">
    <ComponentOpener class="box-y gap2">
      <div class=""></div>
      <SectionCalculator />
      <div class="flex"></div>
    </ComponentOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
