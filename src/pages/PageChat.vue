<script setup>
import FooterMain from '@/layout/footer/FooterMain.vue'
import LayoutPage from '@/layout/LayoutPage.vue'
import SectionOpener from '@/layout/LayoutOpener.vue'
import SectionChat from '@/components/sections/SectionChat.vue'
import SectionChatList from '@/components/sections/SectionChatList.vue'
import { ref } from 'vue'
const chat_id = ref(0)
</script>

<template>
  <LayoutPage class="main">
    <SectionOpener style="overflow: hidden" class="box-x top wh">
      <SectionChatList
        @chat_id="(e) => (chat_id = e)"
        class="wh"
        style="flex: 1; box-shadow: 0 0 15px -5px #000"
      />
      <SectionChat :id="chat_id" style="flex: 3" />
    </SectionOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped></style>
