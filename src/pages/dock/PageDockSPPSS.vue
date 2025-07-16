<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import LayoutOpener from '@/layout/LayoutOpener.vue'
import SectionsDockSPPSS from '@/components/sections/dock/SectionsDockSPPSS.vue'
</script>

<template>
  <LayoutPage class="main">
    <LayoutOpener>
      <div class="header-spase"></div>
      <SectionsDockSPPSS />
      <div class=""></div>
    </LayoutOpener>
  </LayoutPage>
  <div class="flex"></div>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
