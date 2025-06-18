<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps(['user', 'message'])
const messageClass = ref('')

function init() {
  messageClass.value =
    props.message.user_id === props.user.id ? 'chat__message_my' : 'chat__message_not-my'
}

onMounted(async () => {
  init()
})
</script>

<template>
  <div v-if="messageClass == 'chat__message_my'" class="flex"></div>
  <p :class="messageClass" class="chat__message">
    {{ props.message.content }}
  </p>
</template>

<style lang="sass" scoped>
.chat
  &__message
    padding: .5rem 1rem
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
