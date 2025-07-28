<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps(['user', 'message'])
const messageClass = ref('')

function init() {
  messageClass.value =
    props.message.user_id === props.user.id ? 'chat__message_my' : 'chat__message_not-my'
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

onMounted(() => {
  init()
})
</script>

<template>
  <div :class="messageClass" class="chat__message">
    <div class="box-y">
      <p v-if="messageClass == 'chat__message_my'" class="text-white opacity-50 text-sm chat__you">
        Вы:
      </p>
      <p v-else class="chat__you text-sm opacity-50">Админ:</p>
      <p class="">
        {{ props.message.content }}
        <span class="text-sm italic opacity-50 pl-4">{{
          formatDate(props.message.created_at)
        }}</span>
      </p>
    </div>
  </div>
  <div class="flex"></div>
</template>

<!-- <template>
  <div :class="['chat__message-wrapper', messageClass]">
    <div class="chat__meta">
      <span class="chat__user">
        {{ props.message.user_id === props.user.id ? 'Вы' : 'Админ' }}
      </span>
    </div>
    <p class="chat__message-content">
      {{ props.message.content }}
      <span class="text-sm italic">{{ formatDate(props.message.created_at) }}</span>
    </p>
  </div>
</template> -->

<style lang="sass" scoped>
.chat
  &__message
    padding: .1rem 1rem .5rem
    border-radius: 20px
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    margin: .5rem 0
    display: none
    &_not-my
      display: block
      background-color: #fff
      color: #000
    &_my
      display: block
      background-color: #04838E
      color: #fff
</style>
