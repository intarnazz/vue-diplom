<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionsDockSPPSS from '@/components/sections/dock/SectionsDockSPPSS.vue'
</script>

<template>
  <LayoutPage class="main">
    <div class="header-spase"></div>
    <SectionsDockSPPSS />
    <div class=""></div>
  </LayoutPage>
  <div class="flex"></div>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
