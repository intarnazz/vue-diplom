<script setup>
import { message as m, auth } from '@/api/api.js'
import { onMounted, ref, watch } from 'vue'

const props = defineProps(['id'])
const messages = ref(null)
const isLoding = ref(true)
const user = ref(null)
const text = ref('')

function isMyMessage(message) {
  return message.user_id === user.value.id
}

async function init() {
  window.Echo.leave(`private-chat.${props.id}`)
  isLoding.value = true
  const res = await m.get(props.id, {
    limit: '50',
    offset: '0',
  })
  if (res.success) {
    messages.value = res.data
    isLoding.value = false
    window.Echo.private(`chat.${props.id}`).listen('ChatMessageSent', (e) => {
      messages.value.push(e)
    })
  }
}

onMounted(async () => {
  const res = await auth.user()
  if (res.success) user.value = res.data
  if (props.id) await init()
})

async function send() {
  const res = await m.add({
    content: text.value,
    chat_id: props.id,
  })
  if (res.success) {
    text.value = ''
    init()
  }
}
watch(() => props.id, init)
</script>

<template>
  <section class="chat pr wh">
    <img class="img pa" src="@/assets/img/cyg23qqdamt41.jpg" alt="reg-bg" />
    <div class="chat_wrapper pr box-y wh p2 gap2">
      <div class="flex"></div>
      <div class="chat__list box-y pa" v-if="user">
        <div class="flex"></div>
        <div v-for="(message, key) in messages" :key="key" class="box-x">
          <div v-if="isMyMessage(message)" class="flex"></div>
          <p :class="isMyMessage(message) ? 'chat__message_my' : ''" class="chat__message">
            {{ message.content }}
          </p>
        </div>
      </div>
      <form @submit.prevent="send" class="chat__message-bar-wrapper box-x">
        <input v-model="text" placeholder="Сообщение..." class="chat__message-bar wh" type="text" />
        <button class="box-x" type="submit">
          <img src="@/assets/icons/send.svg" alt="send" />
        </button>
      </form>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.chat
  font-size: 1.3rem
  background-color: #000
  & form
    position: relative
  &__list
    overflow-y: scroll
    padding: 0 2rem
    height: 91%
  & img
    opacity: 30%
  &__message
    padding: .5rem 1rem
    border-radius: 20px
    background-color: #fff
    color: #000
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    margin: .5rem 0
    &_my
      background-color: #04838E
      color: #fff
  &__message-bar-wrapper
    padding: .5rem 1rem
    border-radius: 20px
    background-color: #fff
    border: 1px solid #888
</style>
