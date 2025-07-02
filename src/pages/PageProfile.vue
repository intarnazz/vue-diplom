<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import LayoutOpener from '@/layout/LayoutOpener.vue'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SectionUserInfo from '@/components/sections/SectionUserInfo.vue'
import SectionChatList from '@/components/sections/SectionChatList.vue'
import FormUserMessage from '@/components/form/FormUserMessage.vue'
</script>

<template>
  <LayoutPage class="main">
    <LayoutOpener class="box-y gap2">
      <SectionUserInfo />
      <LayoutWrapper class="box-x top">
        <SectionChatList limit="5" />
        <div class="">
          <FormUserMessage />
        </div>
      </LayoutWrapper>
      <div class="flex"></div>
    </LayoutOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
