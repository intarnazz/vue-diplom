<script setup>
import { onMounted, ref } from 'vue'
import { chat as ch } from '@/api/api.js'
import ComponentChatListItem from '@/components/ComponentChatListItem.vue'

const emit = defineEmits(['chat_id'])
const isLoding = ref(true)
const chatList = ref(null)
const chat_id = ref(0)

async function init() {
  isLoding.value = true
  const res = await ch.all({ limit: 20 })
  if (res.success) chatList.value = res.data
  isLoding.value = false
}

onMounted(async () => {
  await init()
})

defineExpose({
  init,
})

const chatEve = (e) =>
  ((i) => i !== -1 && chatList.value.splice(i, 1, e))(
    chatList.value.findIndex((i) => i.id === e.id),
  )
</script>

<template>
  <section>
    <div v-if="!isLoding" class="box-y">
      <ComponentChatListItem
        @click="((chat_id = chat.id), emit('chat_id', chat.id))"
        @chat-eve="chatEve"
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
