<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import LayoutOpener from '@/layout/LayoutOpener.vue'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SectionUserInfo from '@/components/sections/profile/ProfileUserInfo.vue'
import FormUserMessage from '@/components/form/FormUserMessage.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header-spase"></div>
  <LayoutPage class="main">
    <LayoutOpener class="box-y">
      <SectionUserInfo />
      <LayoutWrapper class="box-y gap2">
        <div class="p">
          <FormUserMessage />
        </div>
        <RouterLink class="a p" :to="{ name: 'chat' }">
          <h2>Ваши чаты</h2>
        </RouterLink>
      </LayoutWrapper>
      <div class="flex"></div>
    </LayoutOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
