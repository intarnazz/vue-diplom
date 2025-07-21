<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { date } from '@/utilte/utilte.js'

const props = defineProps(['chat', 'chat_id'])
const emit = defineEmits(['eve-chat'])

const chat = computed(() => {
  return props.chat
})

onMounted(() => {
  window.Echo.private(`chat-status.${chat.value.id}`).listen('ChatStatusChange', (e) =>
    emit('eve-chat', e),
  )
})

onUnmounted(() => {
  window.Echo.leave(`chat-status.${chat.value.id}`)
})
</script>

<template>
  <div
    class="p-4 border-b border-zinc-200 transition cursor-pointer"
    :class="{
      'bg-cyan-700 text-white': chat_id === chat.id,
      'hover:bg-zinc-50 bg-white text-black': chat_id !== chat.id,
    }"
  >
    <!-- ВЕРХ: Email + время + badge -->
    <div class="flex justify-between items-center chat__item">
      <h3 class="font-semibold text-sm truncate max-w-[60%]">
        {{ chat.user.email }}
      </h3>

      <div class="flex items-center">
        <p class="text-xs" :class="chat_id === chat.id ? 'text-white/70' : 'text-zinc-400'">
          {{ date(chat.updated_at) }}
        </p>

        <p
          v-if="chat.viewedMessage.countNotViewed"
          class="px-2 h-6 min-w-6 rounded-full text-xs text-white bg-green-500 flex items-center justify-center shadow"
          :class="chat_id === chat.id ? 'text-white bg-white/20' : 'bg-green-500 text-white'"
          style="font-weight: 500; font-size: 13px"
        >
          {{ chat.viewedMessage.countNotViewed }}
        </p>
      </div>
    </div>

    <!-- ТЕЛЕФОН -->
    <p class="text-xs mt-1" :class="chat_id === chat.id ? 'text-cyan-200' : 'text-cyan-600'">
      {{ chat.user.phone }}
    </p>

    <!-- ПОСЛЕДНЕЕ СООБЩЕНИЕ -->
    <p
      v-if="chat.latest_message"
      class="text-sm mt-2 truncate"
      :class="chat_id === chat.id ? 'text-white/80' : 'text-zinc-600'"
    >
      {{ chat.latest_message.content }}
    </p>
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
    &>  :not(:first-child)::before
      content: '•'
      margin: .25rem;
  &:last-child
    border-bottom: 1px solid $th
  &__focus
    color: #fff
    background-color: #04838E
</style>
