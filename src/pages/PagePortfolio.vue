<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionPortfolio from '@/components/sections/SectionPortfolio.vue'
import ComponentOpener from '@/layout/LayoutOpener.vue'

const props = defineProps(['id'])
</script>

<template>
  <LayoutPage class="main">
    <ComponentOpener class="box-y gap2">
      <div class=""></div>
      <SectionPortfolio :id="props.id" />
      <div class="flex"></div>
    </ComponentOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
