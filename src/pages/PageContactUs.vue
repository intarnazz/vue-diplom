<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import LayoutOpener from '@/layout/LayoutOpener.vue'
import SectionContactUs from '@/components/sections/SectionContactUs.vue'
</script>

<template>
  <LayoutPage class="main">
    <LayoutOpener>
      <SectionContactUs />
    </LayoutOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped>
@media screen and (max-width: 910px)
  .gap2
    gap: 0
    margin-bottom: 2rem
</style>
