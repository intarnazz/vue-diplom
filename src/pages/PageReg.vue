<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionReg from '@/components/sections/SectionReg.vue'
import Layout9By16 from '@/layout/Layout9By16.vue'
</script>

<template>
  <LayoutPage class="main">
    <Layout9By16>
      <template #image>
        <img class="img" src="@/assets/img/anna-hu-eV7XjLdWN7o-unsplash.webp" alt="reg-bg" />
      </template>
      <template #default>
        <SectionReg />
      </template>
    </Layout9By16>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
