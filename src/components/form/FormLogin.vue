<script setup>
import FormMain from '@/layout/LayoutForm.vue'
import { ref } from 'vue'
import { auth } from '@/api/api.js'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const message = ref('')
const errors = ref('')
const router = useRouter()

async function submit() {
  message.value = null
  errors.value = null
  const res = await auth.login({
    email: email.value,
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
        <div class="form__box">
          <input
            v-model="email"
            class="flex"
            :class="{ 'bg-error': errors?.email }"
            id="email"
            name="email"
            type="text"
            placeholder="email..."
          />
        </div>
        <div class="form__box">
          <input
            v-model="password"
            class="flex"
            :class="{ 'bg-error': errors?.password }"
            id="password"
            name="password"
            type="password"
            placeholder="password..."
          />
        </div>
      </div>
      <div class="box-y h">
        <div class="flex"></div>
        <button type="submit" class="button">ВОЙТИ</button>
      </div>
    </div>
  </FormMain>
</template>

<style lang="sass" scoped></style>
