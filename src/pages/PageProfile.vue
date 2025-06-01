<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionUserInfo from '@/components/sections/SectionUserInfo.vue'
import LayoutOpener from '@/layout/LayoutOpener.vue'
</script>

<template>
  <LayoutPage class="main">
    <LayoutOpener>
      <SectionUserInfo />
    </LayoutOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
