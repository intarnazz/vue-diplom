<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionAboutUs from '@/components/sections/index/SectionAboutUs.vue'
import SectionBaner from '@/components/sections/index/SectionBaner.vue'
import SectionCalculator from '@/components/sections/index/SectionCalculator.vue'
import SectionOutLink from '@/components/sections/index/SectionOutLink.vue'
</script>

<template>
  <LayoutPage class="main">
    <SectionBaner />
    <SectionCalculator />
    <SectionAboutUs />
    <SectionOutLink />
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass"></style>
