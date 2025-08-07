<script setup>
import { message as m, auth } from '@/api/api.js'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import ComponentMessage from '@/components/ComponentMessage.vue'

const props = defineProps(['id'])
const emit = defineEmits(['cansel'])
const messagesArr = ref([])
const isLoding = ref(true)
const user = ref(null)
const text = ref('')
const chat = ref()

const limitLocal = ref(100)
const totalCount = ref(null)
const sentinel = ref(null)
let observer = null

const messages = computed(() => messagesArr.value)

const offset = computed(() => messages.value.length)
const limit = computed(() => props.limit || limitLocal.value)
const canLoding = computed(() => totalCount.value === null || offset.value < totalCount.value)

async function down() {
  await nextTick()
  chat.value.scrollTop = chat.value.scrollHeight
}

function chatMessageSentEve(data) {
  console.log('chatMessageSentEve')

  const msg = messages.value.find((e) => e.content === data.content && e.isLoding === true)
  if (msg) msg.isLoding = false

  m.get(props.id, {
    limit: '0',
    offset: '0',
  })
}

async function init() {
  if (!canLoding.value) return
  if (!props.id) return
  const chatScrollHeightOld = chat.value.scrollHeight

  window.Echo.leave(`chat.${props.id}`)
  isLoding.value = true
  const res = await m.get(props.id, {
    limit: limit.value,
    offset: offset.value,
  })
  if (res.success) {
    window.Echo.private(`chat.${props.id}`).listen('ChatMessageSent', chatMessageSentEve)
  }
  if (res.success) {
    res.data
      .slice()
      .reverse()
      .forEach((e) => {
        let index
        index = messagesArr.value.findIndex((i) => i.id === e.id)
        if (index === -1) messagesArr.value.unshift(e)
      })
    totalCount.value = res.pagingInfo.totalCount
    isLoding.value = false
    await nextTick()
    const chatScrollHeightNew = chat.value.scrollHeight
    const chatScrollHeightDelta = chatScrollHeightNew - chatScrollHeightOld
    console.log(chatScrollHeightDelta)
    console.log(chat.value.scrollTop)
    chat.value.scrollTop = chat.value.scrollTop + chatScrollHeightDelta
    console.log(chat.value.scrollTop)
  }
  nextTick(() => {
    resetObserver()
  })
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
  console.log('onMounted')
  const res = await auth.user()
  if (res.success) user.value = res.data
  window.addEventListener('keydown', handleKeyDown)
  await init()
  if (chat.value) chat.value.addEventListener('scroll', onScroll)
  await down()
  setupObserver()
})

onUnmounted(() => {
  if (chat.value) chat.value.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', handleKeyDown)
  if (observer && sentinel.value) {
    observer.unobserve(sentinel.value)
    observer.disconnect()
  }
})

function _send_error(content) {
  const msg = messages.value.find((e) => e.content === content && e.isLoding === true)
  if (msg) (msg.isSuccess = false), (msg.isLoding = false)
}

async function send() {
  if (!text.value) return
  const t = text.value
  text.value = ''

  messages.value.push({
    content: t,
    isSuccess: true,
    isLoding: true,
    created_at: new Date(),
    user_id: user.value.id,
  })

  down()

  try {
    const res = await m.add({
      content: t,
      chat_id: props.id,
    })
    if (!res.success) {
      _send_error(t)
    }
  } catch (e) {
    console.error(e)
    _send_error(t)
  }
}

function resetObserver() {
  if (observer && sentinel.value) {
    observer.unobserve(sentinel.value)
    observer.disconnect()
  }
  setupObserver()
}

isLoding.value = false
// Переинициализировать observer после подгрузки
nextTick(() => {
  resetObserver()
})

function setupObserver() {
  if (!sentinel.value) return
  observer = new IntersectionObserver(
    async ([entry]) => {
      if (entry.isIntersecting && canLoding.value && !isLoding.value) {
        await init()
      }
    },
    {
      root: chat.value,
      threshold: 1.0,
    },
  )
  observer.observe(sentinel.value)
}

watch(
  () => props.id,
  async (newId, oldId) => {
    if (oldId) {
      window.Echo.leave(`private-chat.${oldId}`)
    }
    messagesArr.value = []
    totalCount.value = null
    await init()
    down()
  },
)
</script>

<template>
  <section class="chat wh">
    <!-- <div class="bg-white pa text-black p-6 rounded-2xl shadow-xl text-center max-w-md w-full"></div> -->

    <img
      class="img pa opacity-20"
      src="@/assets/img/cyg23qqdamt41.webp"
      alt="Фоновое изображение"
    />

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
        <!-- Sentinel для подгрузки -->
        <div ref="sentinel" class="min-h-[1rem]"></div>
        <div v-for="(message, key) in messages" :key="key" class="box-x">
          <template v-if="message.user_id">
            <ComponentMessage :message="message" :user="user" />
          </template>
        </div>
        <form @submit.prevent="send" class="chat__message-bar-wrapper box-x">
          <h1>{{ isPageAtTop }}</h1>
          <input
            max="255"
            maxlength="255"
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
  padding-top: $header
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
  &__message-bar-wrapper
    padding: .5rem 1rem
    border-radius: 20px
    background-color: #fff
    border: 1px solid #888
</style>
