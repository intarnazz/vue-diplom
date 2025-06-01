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
    <div class="box-y gap flex wh">
      <h2>Отправить запрос</h2>
      <div class="box-y flex">
        <div class="form__box">
          <textarea
            v-model="text"
            class="flex"
            id="text"
            name="text"
            type="text"
            placeholder="text..."
          />
        </div>
      </div>
      <div class="box-y h">
        <div class="flex"></div>
        <button type="submit" class="button">ОТПРАВИТЬ</button>
      </div>
    </div>
  </FormMain>
</template>

<style lang="sass" scoped></style>
