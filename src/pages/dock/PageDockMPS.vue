<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionsDockMPS from '@/components/sections/dock/SectionsDockMPS.vue'
</script>

<template>
  <LayoutPage class="main">
    <div class="header-spase"></div>
    <SectionsDockMPS />
    <div class=""></div>
  </LayoutPage>
  <div class="flex"></div>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
