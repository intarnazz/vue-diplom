<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { chat as ch, auth } from '@/api/api.js'
import ComponentChatListItem from '@/components/ComponentChatListItem.vue'
import ComponentTitle from '@/components/ComponentTitle.vue'

const emit = defineEmits(['chat_id'])
const props = defineProps(['limit', 'chat_id'])
const isLoding = ref(true)
const chatList = ref([])
const user = ref(null)
const chatListRef = ref(null)
const limitLocal = ref(10)
const offset = ref(0)
const totalCount = ref(null)

const chat_id = computed(() => props.chat_id || 0)

const chatListSort = computed(() =>
  chatList.value.length
    ? [...chatList.value].sort(
        (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
    : [],
)
const canLoding = computed(
  () => totalCount.value === null || chatList.value.length < totalCount.value,
)

const limit = computed(() => {
  return props.limit || limitLocal.value
})

async function _init_user() {
  const res = await auth.user()
  if (res.success) user.value = res.data
}

async function _init_chatList() {
  const res = await ch.all({
    limit: limit.value,
    offset: offset.value,
  })
  if (res.success)
    chatList.value.push(...res.data),
      (offset.value = chatList.value.length),
      (totalCount.value = res.pagingInfo.totalCount)
}

async function init() {
  if (!canLoding.value) return
  isLoding.value = true
  await _init_chatList()
  isLoding.value = false
}

// Обработчик scroll-события
function onScroll() {
  chatListRef.value.style.willChange = 'scroll-position'
  requestAnimationFrame(() => {
    chatListRef.value.scrollTop = chatListRef.value.scrollTop
  })
}

onMounted(async () => {
  await _init_user()
  await init()
  if (chatListRef.value) chatListRef.value.addEventListener('scroll', onScroll)
  window.Echo.private(`user.${user.value.id}.new-chat-create`).listen('NewChatCreate', (e) =>
    new_chat_init(e),
  )
})

onUnmounted(() => {
  if (chatListRef.value) chatListRef.value.removeEventListener('scroll', onScroll)
  window.Echo.leave(`user.${user.value.id}.new-chat-create`)
})

async function new_chat_init(e) {
  const res = await ch.get(e.id)
  console.log(res)
  if (res.success) {
    chatList.value.push(res.data)
    emit('chat_id', res.data.id)
  }
}

async function chat_init(e) {
  const index = chatList.value.findIndex((i) => i.id === e.id)
  const res = await ch.get(e.id)
  if (res.success) {
    chatList.value[index] = { ...res.data }
  }
}
</script>

<template>
  <section ref="chatListRef" class="chat-list pr">
    <div class="box-y">
      <ComponentTitle :is-h2="true" :text="`Ваши чаты`" />
      <ComponentChatListItem
        @click="((chat_id = chat.id), emit('chat_id', chat.id))"
        @eve-chat="(e) => chat_init(e)"
        v-for="chat in chatListSort"
        :key="chat.id"
        :chat="chat"
        :chat_id="chat_id"
      />
    </div>
    <div v-if="isLoding" class="box-y chat">
      <div class="box-y gap5">
        <div class="box-y gap25">
          <div class="box-x chat__item">
            <h3>Загрузка...</h3>
            <p class="chat__item-data">Данные загружаются</p>
            <p class="chat__item-status flex">Статус обновляется</p>
          </div>
          <p class="chat__item-phone">Телефон загружается</p>
        </div>
        <p class="chat__item-message">Сообщения загружаются</p>
      </div>
    </div>
    <button v-if="canLoding" @click="() => init()" class="box-y chat flex w">
      Показать ещё чаты
    </button>
    <div class="box-y"></div>
  </section>
</template>

<style lang="sass" scoped>
.chat-list
  z-index: 1
  background-color: #fff
  will-change: auto;
  transform: none;
  filter: none;
  contain: layout style
  overflow-y: scroll
  & button
    border: 1px solid $th
    border-top: none

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
