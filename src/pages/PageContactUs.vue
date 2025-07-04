<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import LayoutOpener from '@/layout/LayoutOpener.vue'
import SectionContactUs from '@/components/sections/SectionContactUs.vue'
</script>

<template>
  <LayoutPage class="main">
    <LayoutOpener>
      <SectionContactUs class="wh" />
    </LayoutOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
