<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SectionAboutUs from '@/components/sections/SectionAboutUs.vue'
import SectionCertificates from '@/components/sections/SectionCertificates.vue'
</script>

<template>
  <LayoutPage class="main">
    <LayoutWrapper class="box-y gap2">
      <SectionAboutUs />
      <SectionCertificates />
    </LayoutWrapper>
    <div class=""></div>
  </LayoutPage>
  <div class="flex"></div>
  <FooterMain />
</template>

<style lang="sass" scoped>
@media screen and (max-width: 910px)
  .gap2
    gap: 0
    margin-bottom: 2rem
</style>
