<script setup>
import FormMain from '@/layout/LayoutForm.vue'
import { ref } from 'vue'
import { message as m } from '@/api/api.js'

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
  const res = await m.add({
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
        <!-- Сообщение -->
        <div class="form__box flex">
          <textarea
            v-model="content"
            class="flex wh"
            :class="{ 'bg-error': errors?.content }"
            id="content"
            name="content"
            placeholder="Введите сообщение..."
          />
        </div>
      </div>

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
