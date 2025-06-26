<script setup>
import { onMounted, ref } from 'vue'
import { date } from '@/utilte/utilte.js'

const emit = defineEmits(['chat-eve'])
const props = defineProps(['chat', 'chat_id'])
const isLoding = ref(true)

async function init() {
  isLoding.value = true
  window.Echo.private(`chat-status.${props.chat.id}`).listen('ChatStatusChange', (e) =>
    emit('chatEve', e),
  )
  isLoding.value = false
}

onMounted(async () => {
  await init()
})
</script>

<template>
  <div class="box-y chat-list" :class="props.chat_id === props.chat.id ? 'chat-list__focus' : ''">
    <div class="box-y gap5">
      <div class="box-y gap25">
        <div class="box-x chat-list__item">
          <h3>
            {{ props.chat.user.email }}
          </h3>
          <p
            class="chat-list__item-data"
            :class="props.chat_id === props.chat.id ? 'chat-list__focus' : ''"
          >
            {{ date(props.chat.updated_at) }}
          </p>
          <p
            class="chat-list__item-status flex"
            :class="`${props.chat_id === props.chat.id ? 'chat-list__focus' : ''}
            chat-list__item-status--${props.chat.status}
            `"
          >
            {{ props.chat.status }}
          </p>
        </div>
        <p
          class="chat-list__item-phone"
          :class="props.chat_id === props.chat.id ? 'chat-list__focus' : ''"
        >
          {{ props.chat.user.phone }}
        </p>
      </div>
      <p
        v-if="props.chat.latest_massage"
        :class="props.chat_id === props.chat.id ? 'chat-list__focus' : ''"
        class="chat-list__item-message"
      >
        {{ props.chat.latest_massage.content }}
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
    background-color: #888
    color: #fff
    padding-right: 1rem
    &--new
      background-color: #04B82B
      color: #fff
      padding-right: 1rem
    &--viewed
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
