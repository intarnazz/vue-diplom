<script setup>
import FormMain from '@/layout/LayoutForm.vue'
import { ref } from 'vue'
import { guest_query } from '@/api/api.js'

const emit = defineEmits(['init'])
const success = ref(false)
const message = ref('')
const errors = ref('')

const name = ref('')
const email = ref('')
const phone = ref('')
const company = ref('')
const description = ref('')
const content = ref('')

async function submit() {
  message.value = null
  errors.value = null
  const res = await guest_query.add({
    name: name.value,
    email: email.value,
    phone: phone.value,
    company: company.value,
    description: description.value,
    content: content.value,
  })
  success.value = res.success
  if (success.value) emit('init')
  else errors.value = res.errors
  message.value = res.message
}
</script>

<template>
  <FormMain
    class="flex form-user-message wh"
    @submit="submit"
    :message="message"
    :errors="errors"
    :success="success"
  >
    <div class="box-y gap flex wh">
      <h2>Отправить запрос</h2>

      <div class="box-y flex">
        <!-- Имя -->
        <div class="form__box">
          <input
            v-model="name"
            class="flex"
            :class="{ 'bg-error': errors?.name }"
            id="name"
            name="name"
            type="text"
            placeholder="Ваше имя"
          />
        </div>

        <!-- Email -->
        <div class="form__box">
          <input
            v-model="email"
            class="flex"
            :class="{ 'bg-error': errors?.email }"
            id="email"
            name="email"
            type="email"
            placeholder="Ваш e-mail"
          />
        </div>

        <!-- Телефон -->
        <div class="form__box">
          <input
            v-model="phone"
            class="flex"
            :class="{ 'bg-error': errors?.phone }"
            id="phone"
            name="phone"
            type="text"
            placeholder="Ваш телефон"
          />
        </div>

        <!-- Компания -->
        <div class="form__box">
          <input
            v-model="company"
            class="flex"
            :class="{ 'bg-error': errors?.company }"
            id="company"
            name="company"
            type="text"
            placeholder="Название компании"
          />
        </div>

        <!-- Краткое описание -->
        <div class="form__box">
          <input
            v-model="description"
            class="flex"
            :class="{ 'bg-error': errors?.description }"
            id="description"
            name="description"
            type="text"
            placeholder="Краткое описание запроса"
          />
        </div>

        <!-- Сообщение -->
        <div class="form__box flex">
          <textarea
            v-model="content"
            class="flex wh h-[500px]"
            :class="{ 'bg-error': errors?.content }"
            id="content"
            name="content"
            placeholder="Подробности запроса..."
          />
        </div>
      </div>

      <!-- Кнопка отправки -->
      <div class="box-y">
        <button type="submit" class="button">Отправить</button>
      </div>
    </div>
  </FormMain>
</template>

<style lang="sass">
textarea
  resize: none

.form-user-message
  & form
    max-width: none
    +wh
</style>
