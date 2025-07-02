<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { chat as ch, auth } from '@/api/api.js'
import ComponentChatListItem from '@/components/ComponentChatListItem.vue'

const emit = defineEmits(['chat_id'])
const isLoding = ref(true)
const chatList = ref(null)
const chat_id = ref(0)
const user = ref(null)

async function _init_user() {
  const res = await auth.user()
  if (res.success) user.value = res.data
}

async function _init_chatList() {
  const res = await ch.all({ limit: 20 })
  if (res.success) chatList.value = res.data
}

async function init() {
  await _init_chatList()
}

// function NewChatCreate(e) {
//   chatList.value.unshift(e)
// }

onMounted(async () => {
  isLoding.value = true
  await _init_user()
  await init()
  isLoding.value = false
  window.Echo.private(`user.${user.value.id}.new-chat-create`).listen('NewChatCreate', () => init())
})

onUnmounted(() => {
  window.Echo.leave(`user.${user.value.id}.new-chat-create`)
})
</script>

<template>
  <section>
    <div v-if="!isLoding" class="box-y">
      <ComponentChatListItem
        @click="((chat_id = chat.id), emit('chat_id', chat.id))"
        v-for="(chat, key) in chatList"
        :key="key"
        :chat="chat"
        :chat_id="chat_id"
      />
    </div>
    <div class="box-y"></div>
  </section>
</template>

<style lang="sass" scoped></style>
