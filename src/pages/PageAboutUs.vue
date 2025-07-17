<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionCertificates from '@/components/sections/aboutUs/AboutUsCertificates.vue'
import AboutUsHeader from '@/components/sections/aboutUs/AboutUsHeader.vue'
import AboutUsKSM from '@/components/sections/aboutUs/AboutUsKSM.vue'
import AboutUsWhoAreWe from '@/components/sections/aboutUs/AboutUsWhoAreWe.vue'
import AboutUsClients from '@/components/sections/aboutUs/AboutUsClients.vue'
import AboutUsMissionValues from '@/components/sections/aboutUs/AboutUsMissionValues.vue'
</script>

<template>
  <div class="header-spase"></div>
  <LayoutPage class="main box-y gap4">
    <AboutUsHeader />
    <AboutUsKSM />
    <AboutUsWhoAreWe />
    <AboutUsClients />
    <AboutUsMissionValues />
    <SectionCertificates />
    <div class=""></div>
  </LayoutPage>
  <div class="flex"></div>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
