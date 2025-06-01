<script setup>
import FormMain from '@/layout/LayoutForm.vue'
import { ref } from 'vue'
import { auth } from '@/api/api.js'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

async function submit() {
  const res = await auth.login({
    email: email.value,
    password: password.value,
  })
  if (res.success) router.push({ name: 'profile' })
}
</script>

<template>
  <FormMain @submit="submit">
    <div class="box-x flex wh">
      <div class="box-y flex">
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
        <button type="submit" class="button">ВОЙТИ</button>
      </div>
    </div>
  </FormMain>
</template>

<style lang="sass" scoped></style>
