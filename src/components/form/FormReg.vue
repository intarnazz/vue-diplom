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
        <div class="form__box">
          <input
            v-model="email"
            class="flex"
            id="email"
            name="email"
            type="email"
            placeholder="email..."
          />
        </div>
        <div class="form__box">
          <input
            v-model="name"
            class="flex"
            id="name"
            name="name"
            type="name"
            placeholder="name..."
          />
        </div>
        <div class="form__box">
          <input
            v-model="phone"
            class="flex"
            id="phone"
            name="phone"
            type="phone"
            placeholder="phone..."
          />
        </div>
        <div class="form__box">
          <input
            v-model="company"
            class="flex"
            id="company"
            name="company"
            type="company"
            placeholder="company..."
          />
        </div>
        <div class="form__box">
          <input
            v-model="password"
            class="flex"
            id="password"
            name="password"
            type="password"
            placeholder="password..."
          />
        </div>
      </div>
      <div class="box-y h">
        <div class="flex"></div>
        <button type="submit" class="button">РЕГИСТРАЦИЯ</button>
      </div>
    </div>
  </FormMain>
</template>

<style lang="sass" scoped></style>
