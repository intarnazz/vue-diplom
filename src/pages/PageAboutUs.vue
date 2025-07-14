<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionAboutUs from '@/components/sections/aboutUs/AboutUsMain.vue'
import SectionCertificates from '@/components/sections/SectionCertificates.vue'
</script>

<template>
  <LayoutPage class="main">
    <div class="header-spase"></div>
    <SectionAboutUs />
    <SectionCertificates />
    <div class=""></div>
  </LayoutPage>
  <div class="flex"></div>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
