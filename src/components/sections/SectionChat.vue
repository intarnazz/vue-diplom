<script setup>
import { message as m, auth } from '@/api/api.js'
import { nextTick, onMounted, ref, watch } from 'vue'
import ComponentMessage from '@/components/ComponentMessage.vue'

const props = defineProps(['id'])
const messages = ref([])
const isLoding = ref(true)
const user = ref(null)
const text = ref('')
const chat = ref()

async function down() {
  await nextTick()
  chat.value.scrollTop = chat.value.scrollHeight
  console.log(chat.value.scrollTop)
  console.log(chat.value.scrollHeight)
}

function chatMessageSentEve(data) {
  messages.value.push(data)
}

async function init() {
  window.Echo.leave(`private-chat.${props.id}`)
  isLoding.value = true
  const res = await m.get(props.id, {
    limit: '100',
    offset: '0',
  })
  if (res.success) {
    messages.value = res.data
    isLoding.value = false
    window.Echo.private(`chat.${props.id}`).listen('ChatMessageSent', chatMessageSentEve)
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
watch(
  () => props.id,
  async () => {
    messages.value = null
    await init()
    down()
  },
)

watch(() => messages, down, { deep: true })
</script>

<template>
  <section class="chat pr wh">
    <img class="img pa" src="@/assets/img/cyg23qqdamt41.jpg" alt="reg-bg" />
    <div class="chat_wrapper pr box-y wh p2 gap2">
      <div class="flex"></div>
      <div ref="chat" class="chat__list box-y pa" v-if="user">
        <div class="flex"></div>
        <div v-for="(message, key) in messages" :key="key" class="box-x">
          <template v-if="message.user_id">
            <ComponentMessage :message="message" :user="user" />
          </template>
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
  &__message-bar-wrapper
    padding: .5rem 1rem
    border-radius: 20px
    background-color: #fff
    border: 1px solid #888
</style>
