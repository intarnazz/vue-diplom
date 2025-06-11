<script setup>
import { message as m, auth } from '@/api/api.js'
import { onMounted, ref } from 'vue'

const props = defineProps(['id'])
const messages = ref(null)
const isLoding = ref(true)
const user = ref(null)

function isMyMessage(message) {
  return message.user_id === user.value.id
}

async function init() {
  isLoding.value = true
  const res = await m.get(props.id)
  if (res.success) {
    messages.value = res.data
    isLoding.value = false
  }
}

onMounted(async () => {
  const res = await auth.user()
  if (res.success) user.value = res.data
  if (props.id) await init()
})
</script>

<template>
  <section class="chat pr wh">
    <img class="img pa" src="@/assets/img/cyg23qqdamt41.jpg" alt="reg-bg" />
    <div v-if="!isLoding" class="chat_wrapper pr box-y wh p2 gap2">
      <div class="flex"></div>
      <div v-for="(message, id) in messages" :key="id" class="box-x">
        <div v-if="isMyMessage(message)" class="flex"></div>
        <p :class="isMyMessage(message) ? 'chat__message_my' : ''" class="chat__message">
          {{ message.content }}
        </p>
      </div>
      <div class="chat__message-bar-wrapper">
        <input placeholder="Сообщение..." class="chat__message-bar wh" type="text" />
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.chat
  font-size: 1.3rem
  background-color: #000
  & img
    opacity: 30%
  &__message
    padding: .5rem 1rem
    border-radius: 20px
    background-color: #fff
    color: #000
    &_my
      background-color: #04838E
      color: #fff
  &__message-bar
    padding: .5rem 1rem
  &__message-bar-wrapper
    border-radius: 20px
    background-color: #fff
    border: 1px solid #888
</style>
