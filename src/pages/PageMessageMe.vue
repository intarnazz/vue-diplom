<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import ComponentOpener from '@/layout/LayoutOpener.vue'
import SectionMessageMe from '@/components/sections/SectionMessageMe.vue'
</script>

<template>
  <LayoutPage class="main">
    <ComponentOpener class="box-y gap2">
      <SectionMessageMe />
    </ComponentOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
