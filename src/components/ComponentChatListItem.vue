<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { date } from '@/utilte/utilte.js'
import { chat as c } from '@/api/api.js'

const props = defineProps(['chat', 'chat_id'])
const isLoding = ref(true)
const chatLocal = ref(null)

const chat = computed(() => {
  return chatLocal.value || props.chat
})

async function init() {
  isLoding.value = true
  const res = await c.get(props.chat.id)
  if (res.success) chatLocal.value = res.data
  isLoding.value = false
}

onMounted(() => {
  window.Echo.private(`chat-status.${chat.value.id}`).listen('ChatStatusChange', () => init())
})

onUnmounted(() => {
  window.Echo.leave(`chat-status.${chat.value.id}`)
})
</script>

<template>
  <div class="box-y chat-list" :class="chat_id === chat.id ? 'chat-list__focus' : ''">
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
            :class="`${chat_id === chat.id ? 'chat-list__focus' : ''}
            chat-list__item-status--${chat.viewedMessage.countNotViewed}
            `"
          >
            {{ chat.viewedMessage.countNotViewed }}
          </p>
        </div>
        <p class="chat-list__item-phone" :class="chat_id === chat.id ? 'chat-list__focus' : ''">
          {{ chat.user.phone }}
        </p>
      </div>
      <p
        v-if="chat.latest_message"
        :class="chat_id === chat.id ? 'chat-list__focus' : ''"
        class="chat-list__item-message"
      >
        {{ chat.latest_message.content }}
      </p>
    </div>
  </div>
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
    &--0
      background-color: #888
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
