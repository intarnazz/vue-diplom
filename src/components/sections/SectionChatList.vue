<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { chat as ch, auth } from '@/api/api.js'
import ComponentChatListItem from '@/components/ComponentChatListItem.vue'

const emit = defineEmits(['chat_id'])
const props = defineProps(['limit'])
const isLoding = ref(true)
const chatList = ref([])
const chat_id = ref(0)
const user = ref(null)

const limitLocal = ref(10)
const offset = ref(0)
const totalCount = ref(null)

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

onMounted(async () => {
  await _init_user()
  await init()
  window.Echo.private(`user.${user.value.id}.new-chat-create`).listen('NewChatCreate', () => init())
})

onUnmounted(() => {
  window.Echo.leave(`user.${user.value.id}.new-chat-create`)
})
</script>

<template>
  <section class="chat-list">
    <div class="box-y">
      <ComponentChatListItem
        @click="((chat_id = chat.id), emit('chat_id', chat.id))"
        v-for="(chat, key) in chatList"
        :key="key"
        :chat="chat"
        :chat_id="chat_id"
      />
    </div>
    <div v-if="isLoding" class="box-y chat">
      <div class="box-y gap5">
        <div class="box-y gap25">
          <div class="box-x chat__item">
            <h3>isLoding...</h3>
            <p class="chat__item-data">isLoding...</p>
            <p class="chat__item-status flex">isLoding...</p>
          </div>
          <p class="chat__item-phone">isLoding...</p>
        </div>
        <p class="chat__item-message">isLoding...</p>
      </div>
    </div>
    <button v-if="canLoding" @click="() => init()" class="box-y chat flex w">Ещё чаты</button>
    <div class="box-y"></div>
  </section>
</template>

<style lang="sass" scoped>
.chat-list
  overflow: scroll
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
