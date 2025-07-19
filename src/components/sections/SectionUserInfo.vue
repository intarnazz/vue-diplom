<script setup>
import { onMounted, ref } from 'vue'
import { auth } from '@/api/api.js'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'

const isLoding = ref(true)
const user = ref(true)

async function init() {
  isLoding.value = true
  const res = await auth.user()
  if (res.success) {
    user.value = res.data
  }
  isLoding.value = false
}

onMounted(async () => {
  await init()
})

function date(s) {
  const d = new Date(s)
  const formatter = new Intl.DateTimeFormat('ru-RU', { year: 'numeric', month: 'long' })
  const formatted = formatter.format(d) // например: "июль 2025 г."

  // Разделим на части и обработаем первую букву месяца
  const [month, year] = formatted.replace(' г.', '').split(' ')
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1)

  return `${capitalizedMonth}. ${year}`
}
</script>

<template>
  <LayoutWrapper>
    <section v-if="!isLoding" class="">
      <!-- Techy corner marks -->
      <div class="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-black"></div>
      <div class="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-black"></div>
      <div
        class="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-black"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-black"
      ></div>

      <!-- Nerd Header -->
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-4xl font-bold tracking-widest uppercase">Профиль KSM</h1>
        <span class="bg-black text-white text-xs px-3 py-1 rounded-full">{{
          date(user.created_at)
        }}</span>
      </div>

      <!-- User data block -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-zinc-600">👤</span>
            <span class="font-semibold tracking-wider uppercase">Name:</span>
            <span class="ml-auto">{{ user.name }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-zinc-600">🏢</span>
            <span class="font-semibold tracking-wider uppercase">Company:</span>
            <span class="ml-auto">{{ user.company }}</span>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-zinc-600">✉️</span>
            <span class="font-semibold tracking-wider uppercase">Email:</span>
            <span class="ml-auto">{{ user.email }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-zinc-600">📞</span>
            <span class="font-semibold tracking-wider uppercase">Phone:</span>
            <span class="ml-auto">{{ user.phone }}</span>
          </div>
        </div>
      </div>

      <!-- Footer touch -->
      <div class="mt-10 flex justify-between items-center border-t border-black pt-4">
        <span class="text-xs italic opacity-70">powered by ZIP 🐒</span>
        <button
          class="px-4 py-1 border-2 border-black bg-black text-white rounded-lg hover:bg-white hover:text-black transition"
        >
          Edit ✎
        </button>
      </div>
    </section>
  </LayoutWrapper>
</template>
