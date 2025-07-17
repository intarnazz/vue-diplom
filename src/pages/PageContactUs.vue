<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import LayoutOpener from '@/layout/LayoutOpener.vue'
import SectionContactUs from '@/components/sections/contactUs/ContactUsMain.vue'
</script>

<template>
  <div class="header-spase"></div>
  <LayoutPage class="main">
    <LayoutOpener>
      <SectionContactUs class="wh" />
    </LayoutOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
