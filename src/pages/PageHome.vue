<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionAboutUs from '@/components/sections/index/IndexAboutUs.vue'
import SectionBaner from '@/components/sections/index/IndexBaner.vue'
import SectionCalculator from '@/components/sections/index/IndexCalculator.vue'
import SectionOutLink from '@/components/sections/index/IndexOutLink.vue'
</script>

<template>
  <LayoutPage class="main home">
    <SectionBaner />
    <SectionCalculator />
    <SectionAboutUs />
    <SectionOutLink />
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass"></style>
