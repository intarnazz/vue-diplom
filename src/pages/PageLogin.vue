<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import Layout9By16 from '@/layout/Layout9By16.vue'
import SectionLogin from '@/components/sections/SectionLogin.vue'
</script>

<template>
  <LayoutPage class="main">
    <Layout9By16>
      <template #image>
        <img class="img pa" src="@/assets/img/login-bg.webp" alt="login-bg" />
      </template>
      <template #default>
        <SectionLogin />
      </template>
    </Layout9By16>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
