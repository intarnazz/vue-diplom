<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { date } from '@/utilte/utilte.js'

const props = defineProps(['chat', 'chat_id'])
const emit = defineEmits(['eve-chat'])

const chat = computed(() => {
  return props.chat
})

onMounted(() => {
  window.Echo.private(`chat-status.${chat.value.id}`).listen('ChatStatusChange', () =>
    emit('eve-chat'),
  )
})

onUnmounted(() => {
  window.Echo.leave(`chat-status.${chat.value.id}`)
})
</script>

<template>
  <div class="box-y chat" :class="chat_id === chat.id ? 'chat__focus' : ''">
    <div class="box-y gap5">
      <div class="box-y gap25">
        <div class="box-x chat__item">
          <h3>
            {{ chat.user.email }}
          </h3>
          <p class="chat__item-data" :class="chat_id === chat.id ? 'chat__focus' : ''">
            {{ date(chat.updated_at) }}
          </p>
          <p
            class="chat__item-status flex"
            :class="`${chat_id === chat.id ? 'chat__focus' : ''}
            chat__item-status--${chat.viewedMessage.countNotViewed}
            `"
          >
            {{ chat.viewedMessage.countNotViewed }}
          </p>
        </div>
        <p class="chat__item-phone" :class="chat_id === chat.id ? 'chat__focus' : ''">
          {{ chat.user.phone }}
        </p>
      </div>
      <p
        v-if="chat.latest_message"
        :class="chat_id === chat.id ? 'chat__focus' : ''"
        class="chat__item-message"
      >
        {{ chat.latest_message.content }}
      </p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.chat
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
