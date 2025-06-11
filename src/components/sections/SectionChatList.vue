<script setup>
import { onMounted, ref } from 'vue'
import { chat as ch } from '@/api/api.js'
import { date } from '@/utilte/utilte.js'

const emit = defineEmits(['chat_id'])
const isLoding = ref(true)
const chatList = ref(null)
const chat_id = ref(0)

async function init() {
  isLoding.value = true
  const res = await ch.all({limit: 20})
  if (res.success) chatList.value = res.data
  isLoding.value = false
}

onMounted(async () => {
  await init()
})

defineExpose({
  init,
})
</script>

<template>
  <section>
    <div v-if="!isLoding" class="box-y">
      <div
        @click="((chat_id = chat.id), emit('chat_id', chat.id))"
        v-for="(chat, key) in chatList"
        :key="key"
        class="box-y chat-list"
        :class="chat_id === chat.id ? 'chat-list__focus' : ''"
      >
        <div class="box-y gap5">
          <div class="box-y gap25">
            <div class="box-x chat-list__item">
              <h3>
                {{ chat.user.email }}
              </h3>
              <p class="chat-list__item-data" :class="chat_id === chat.id ? 'chat-list__focus' : ''">
                {{ date(chat.updated_at) }}
              </p>
              <p
                class="chat-list__item-status flex"
                :class="chat_id === chat.id ? 'chat-list__focus' : ''"
              >
                {{ chat.status }}
              </p>
            </div>
            <p class="chat-list__item-phone" :class="chat_id === chat.id ? 'chat-list__focus' : ''">
              {{ chat.user.phone }}
            </p>
          </div>
          <p v-if="chat.latest_message" class="chat-list__item-message">
            {{ chat.latest_message.content }}
          </p>
        </div>
      </div>
    </div>
    <div class="box-y"></div>
  </section>
</template>

<style lang="sass" scoped>
.chat-list
  padding: .5rem 1rem
  border: 1px solid $th
  border-bottom: none
  cursor: pointer
  &__item-message
    color: #888
  &__item-phone
    color: #1D9BF0
  &__item-status
    background-color: #04B82B
    color: #fff
    padding-right: 1rem
  &__item-data
    color: #888
  &__item
    &> *:not(:first-child)::before
      content: '•'
      margin: .25rem;
  &:last-child
    border-bottom: 1px solid $th
  &__focus
    color: #fff
    background-color: #04838E
</style>
