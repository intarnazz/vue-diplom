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
    <SectionOpener style="overflow: hidden" class="box-y top w section-opener">
      <div class="box-x wh">
        <div
          :class="chat_id !== 0 ? 'cansel media' : ''"
          style="flex: 1; box-shadow: 0 0 15px -5px #000"
          class="box-y wh pr"
        >
          <div class="header-spase"></div>
          <SectionChatList
            :chat_id="chat_id"
            @chat_id="(e) => (chat_id = e)"
            :class="chat_id !== 0 ? 'cansel media' : ''"
            class="wh"
            style="flex: 1"
          />
        </div>
        <SectionChat
          :class="chat_id === 0 ? 'cansel media' : ''"
          @cansel="() => (chat_id = 0)"
          :id="chat_id"
          style="flex: 3"
        />
      </div>
    </SectionOpener>
  </LayoutPage>
  <FooterMain />
</template>

<style lang="sass" scoped>
.main
  background-color: #000
.section-opener
  height: $headerProperty
</style>
