<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import LayoutOpener from '@/layout/LayoutOpener.vue'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SectionUserInfo from '@/components/sections/SectionUserInfo.vue'
import SectionChatList from '@/components/sections/SectionChatList.vue'
import FormUserMessage from '@/components/form/FormUserMessage.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header-spase"></div>
  <LayoutPage class="main">
    <LayoutOpener class="box-y gap2">
      <SectionUserInfo />
      <LayoutWrapper class="box-x media top">
        <RouterLink :to="{ name: 'chat' }">
          <SectionChatList limit="5" />
        </RouterLink>
        <div class="p">
          <FormUserMessage />
        </div>
      </LayoutWrapper>
      <div class="flex"></div>
    </LayoutOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
