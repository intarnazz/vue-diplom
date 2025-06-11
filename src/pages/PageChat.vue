<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionOpener from '@/layout/LayoutOpener.vue'
import SectionChat from '@/components/sections/SectionChat.vue'
import SectionChatList from '@/components/sections/SectionChatList.vue'
</script>

<template>
  <LayoutPage class="main">
    <SectionOpener style="overflow: hidden" class="box-x top wh">
      <SectionChatList class="wh" style="flex: 1; box-shadow: 0 0 15px -5px #000" />
      <SectionChat :id="6" style="flex: 3" />
    </SectionOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
