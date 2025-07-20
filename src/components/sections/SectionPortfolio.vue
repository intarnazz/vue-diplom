<script setup>
import { onMounted, ref } from 'vue'
import { portfolio as p } from '@/api/api.js'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ComponentImg from '@/components/ComponentImg.vue'

const props = defineProps(['id'])
const isLoding = ref(true)
const portfolio = ref(null)

async function init() {
  isLoding.value = true
  const res = await p.get(props.id)
  if (res.success) portfolio.value = res.data
  isLoding.value = false
}

onMounted(async () => {
  await init()
})
</script>

<template>
  <section class="bg-white text-black py-12">
    <LayoutWrapper v-if="!isLoding && portfolio">
      <div class="mb-6">
        <RouterLink
          :to="{ name: 'portfolio' }"
          class="p inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
        >
          ← Назад в портфолио
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <!-- Изображение -->
        <div
          class="w-full aspect-video overflow-hidden rounded-2xl shadow-lg border border-gray-100"
        >
          <ComponentImg
            :id="portfolio.image_id"
            class="w-full h-full object-cover"
            :alt="portfolio.title"
          />
        </div>

        <!-- Контент -->
        <div class="space-y-8 p">
          <div>
            <h1 class="text-4xl font-bold tracking-tight text-gray-900">
              {{ portfolio.title }}
            </h1>
          </div>

          <div v-if="portfolio.description">
            <div class="space-y-1">
              <h2 class="text-sm font-semibold text-gray-500 uppercase">Описание</h2>
              <p class="text-base text-gray-700 whitespace-pre-wrap leading-relaxed">
                {{ portfolio.description }}
              </p>
            </div>
          </div>

          <div v-if="portfolio.client">
            <div class="space-y-1">
              <h2 class="text-sm font-semibold text-gray-500 uppercase">Клиент</h2>
              <p class="text-base text-gray-800">
                {{ portfolio.client }}
              </p>
            </div>
          </div>

          <div v-if="portfolio.completed_at">
            <div class="space-y-1">
              <h2 class="text-sm font-semibold text-gray-500 uppercase">Завершено</h2>
              <p class="text-base text-gray-800">
                {{ new Date(portfolio.completed_at).toLocaleDateString() }}
              </p>
            </div>
          </div>

          <div v-if="portfolio.notes">
            <div class="space-y-1">
              <h2 class="text-sm font-semibold text-gray-500 uppercase">Заметки</h2>
              <p class="text-base text-gray-700 whitespace-pre-wrap leading-relaxed">
                {{ portfolio.notes }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  </section>
</template>
