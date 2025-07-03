<script setup>
import FormMain from '@/layout/LayoutForm.vue'
import { ref } from 'vue'
import { message as m } from '@/api/api.js'

const text = ref('')
const emit = defineEmits(['init'])
const message = ref('')

async function submit() {
  const res = await m.add({
    content: text.value,
  })
  if (res.success) emit('init')
  else message.value = res.message
}
</script>

<template>
  <FormMain class="flex form-user-message wh" @submit="submit" :message="message">
    <div class="box-y gap flex wh">
      <h2>Отправить запрос</h2>
      <div class="box-y flex">
        <div class="form__box flex">
          <textarea
            v-model="text"
            class="flex wh"
            id="text"
            name="text"
            type="text"
            placeholder="text..."
          />
        </div>
      </div>
      <div class="box-y">
        <button type="submit" class="button">ОТПРАВИТЬ</button>
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
