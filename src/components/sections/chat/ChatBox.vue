<script setup>
import { message as m, auth } from '@/api/api.js'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import ComponentMessage from '@/components/ComponentMessage.vue'

const props = defineProps(['id'])
const emit = defineEmits(['cansel'])
const messages = ref([])
const isLoding = ref(true)
const user = ref(null)
const text = ref('')
const chat = ref()

async function down() {
  await nextTick()
  chat.value.scrollTop = chat.value.scrollHeight
}

function chatMessageSentEve(data) {
  messages.value.push(data)
  m.get(props.id, {
    limit: '0',
    offset: '0',
  })
}

async function init() {
  if (!props.id) return
  window.Echo.leave(`chat.${props.id}`)
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

function handleKeyDown(e) {
  if (e.key === 'Escape') {
    emit('cansel')
  }
}

// Обработчик scroll-события
function onScroll() {
  chat.value.style.willChange = 'scroll-position'
  requestAnimationFrame(() => {
    chat.value.scrollTop = chat.value.scrollTop
  })
}

onMounted(async () => {
  const res = await auth.user()
  if (res.success) user.value = res.data
  window.addEventListener('keydown', handleKeyDown)
  await init()
  if (chat.value) chat.value.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  if (chat.value) chat.value.removeEventListener('scroll', onScroll)

  window.removeEventListener('keydown', handleKeyDown)
})

async function send() {
  const res = await m.add({
    content: text.value,
    chat_id: props.id,
  })
  if (res.success) {
    text.value = ''
  }
}
watch(
  () => props.id,
  async (newId, oldId) => {
    if (oldId) {
      window.Echo.leave(`private-chat.${oldId}`)
    }
    messages.value = null
    await init()
    down()
  },
)

watch(() => messages, down, { deep: true })
</script>

<template>
  <section class="chat wh">
    <!-- <div class="bg-white pa text-black p-6 rounded-2xl shadow-xl text-center max-w-md w-full"></div> -->

    <img class="img pa" src="@/assets/img/cyg23qqdamt41.webp" alt="Фоновое изображение" />

    <div
      v-if="!props.id"
      class="absolute top-1/3 left-4/7 -translate-x-1/2 w-full max-w-md px-4 pointer-events-none"
    >
      <div
        class="pointer-events-auto relative bg-[#fefadc] border-[3px] border-black text-black rounded-[1.25rem] shadow-[6px_6px_0_0_#000] px-6 py-5 font-sans"
        style="rotate: -1.5deg"
      >
        <!-- Заголовок -->
        <h2 class="text-xl font-bold tracking-tight leading-tight">💬 Тут можно написать админу</h2>

        <!-- Тело -->
        <p class="mt-2 text-sm leading-snug text-zinc-800">Мы отвечаем честно и быстро.</p>

        <!-- Подпись как на записке -->
        <div class="mt-4 text-[11px] italic text-zinc-500 text-right">
          ответим в течении 5 минут
        </div>
      </div>
    </div>

    <div class="chat_wrapper pr box-y wh p2 gap2">
      <div class="flex"></div>
      <div ref="chat" class="chat__list wh box-y pa" v-if="user">
        <div class="flex"></div>
        <div v-for="(message, key) in messages" :key="key" class="box-x">
          <template v-if="message.user_id">
            <ComponentMessage :message="message" :user="user" />
          </template>
        </div>
        <form @submit.prevent="send" class="chat__message-bar-wrapper box-x">
          <h1>{{ isPageAtTop }}</h1>
          <input
            v-model="text"
            placeholder="Сообщение..."
            class="chat__message-bar wh"
            type="text"
          />
          <button class="box-x" type="submit">
            <img src="@/assets/icons/send.svg" alt="send" />
          </button>
        </form>
      </div>
    </div>
    <button @click="emit('cansel')" class="button button_off absolute top-[5rem] left-[1rem] media">
      Нзад
    </button>
  </section>
</template>

<style lang="sass" scoped>
.chat
  font-size: 1.3rem
  & form
    position: relative
  &__list
    overflow-y: scroll
    padding: 0 2rem 1rem
    will-change: auto;
    transform: none;
    filter: none;
    contain: layout style
    overflow-y: scroll
  & img
    opacity: 30%
  &__message-bar-wrapper
    padding: .5rem 1rem
    border-radius: 20px
    background-color: #fff
    border: 1px solid #888
</style>
