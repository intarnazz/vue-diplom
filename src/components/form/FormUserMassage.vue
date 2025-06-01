<script setup>
import FormMain from '@/layout/LayoutForm.vue'
import { ref } from 'vue'
import { massage } from '@/api/api.js'

const text = ref('')
const emit = defineEmits(['init'])

async function submit() {
  const res = await massage.add({
    content: text.value,
  })
  if (res.success) emit('init')
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
