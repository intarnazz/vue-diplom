<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionReg from '@/components/sections/SectionReg.vue'
</script>

<template>
  <LayoutPage class="main">
    <SectionReg />
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped>
@media screen and (max-width: 910px)
  .gap2
    gap: 0
    margin-bottom: 2rem
</style>
