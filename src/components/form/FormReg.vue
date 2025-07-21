<script setup>
import FormMain from '@/layout/LayoutForm.vue'
import { ref } from 'vue'
import { auth } from '@/api/api.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const name = ref('')
const phone = ref('')
const password = ref('')
const company = ref('')
const message = ref('')
const errors = ref([])

async function submit() {
  message.value = null
  errors.value = null
  const res = await auth.reg({
    email: email.value,
    name: name.value,
    phone: phone.value,
    company: company.value,
    password: password.value,
  })
  if (res.success) router.push({ name: 'profile' })
  else (message.value = res.message), (errors.value = res.errors)
}
</script>

<template>
  <FormMain @submit="submit" :message="message" :errors="errors">
    <div class="box-x media down flex wh">
      <div class="box-y wh flex">
        <!-- Email -->
        <div class="form__box">
          <input
            v-model="email"
            class="flex"
            :class="{ 'bg-error': errors?.email }"
            id="email"
            name="email"
            type="email"
            placeholder="Введите e-mail"
          />
        </div>

        <!-- Имя -->
        <div class="form__box">
          <input
            v-model="name"
            class="flex"
            :class="{ 'bg-error': errors?.name }"
            id="name"
            name="name"
            type="text"
            placeholder="Введите имя"
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
            type="tel"
            placeholder="Введите номер телефона"
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

        <!-- Пароль -->
        <div class="form__box">
          <input
            v-model="password"
            class="flex"
            :class="{ 'bg-error': errors?.password }"
            id="password"
            name="password"
            type="password"
            placeholder="Придумайте пароль"
          />
        </div>
      </div>

      <div class="box-y h">
        <div class="flex"></div>
        <button type="submit" class="button">Зарегистрироваться</button>
      </div>
    </div>
  </FormMain>
</template>

<style lang="sass" scoped></style>
