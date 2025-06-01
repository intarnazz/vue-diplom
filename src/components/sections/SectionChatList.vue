<script setup>
import { onMounted, ref } from 'vue'
import { chat as ch } from '@/api/api.js'
import { date } from '@/utilte/utilte.js'

const isLoding = ref(true)
const chatList = ref(null)

async function init() {
  isLoding.value = true
  const res = await ch.all()
  if (res.success) chatList.value = res.data
  isLoding.value = false
}

onMounted(async () => {
  await init()
})
</script>

<template>
  <section v-if="!isLoding">
    <div class="box-y">
      <div v-for="(chat, id) in chatList" :key="id" class="box-y chat-list">
        <div class="box-y gap5">
          <div class="box-y gap25">
            <div class="box-x chat-list__item">
              <h3>
                {{ chat.user.email }}
              </h3>
              <p class="chat-list__item-data">{{ date(chat.updated_at) }}</p>
              <p class="chat-list__item-status flex">{{ chat.status }}</p>
            </div>
            <p class="chat-list__item-phone">{{ chat.user.phone }}</p>
          </div>
          <p class="chat-list__item-massage">{{ chat.latest_massage.content }}</p>
        </div>
      </div>
    </div>
    <div class="box-y"></div>
  </section>
</template>

<style lang="sass" scoped>
.chat-list
  padding: .5rem 1rem
  border: 1px solid $th
  border-bottom: none
  &__item-massage
    color: #888
  &__item-phone
    color: #1D9BF0
  &__item-status
    background-color: #04B82B
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
</style>
