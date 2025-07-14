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
  <section class="text-black">
    <LayoutWrapper v-if="!isLoding && portfolio">
      <RouterLink
        :to="{ name: 'portfolio' }"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Назад в портфолио
      </RouterLink>
      <div class="box-y gap2">
        <!-- Изображение -->
        <div class="rounded-xl overflow-hidden shadow-lg">
          <ComponentImg
            :id="portfolio.image_id"
            class="w-full h-auto object-cover"
            :alt="portfolio.title"
          />
        </div>

        <!-- Контент -->
        <div class="space-y-8">
          <div>
            <h1 class="bg-yellow-100 text-3xl sm:text-4xl font-bold tracking-tight">
              {{ portfolio.title }}
            </h1>
          </div>

          <div v-if="portfolio.description">
            <h2 class="text-base font-semibold text-black/60 mb-1">Описание</h2>
            <p class="text-black/90 leading-relaxed whitespace-pre-wrap">
              {{ portfolio.description }}
            </p>
          </div>

          <div v-if="portfolio.client">
            <h2 class="text-base font-semibold text-black/60 mb-1">Клиент</h2>
            <p class="text-black/80">{{ portfolio.client }}</p>
          </div>

          <div v-if="portfolio.completed_at">
            <h2 class="text-base font-semibold text-black/60 mb-1">Завершено</h2>
            <p class="text-black/80">
              {{ new Date(portfolio.completed_at).toLocaleDateString() }}
            </p>
          </div>

          <div v-if="portfolio.notes">
            <h2 class="text-base font-semibold text-black/60 mb-1">Заметки</h2>
            <p class="text-black/70 whitespace-pre-wrap">{{ portfolio.notes }}</p>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  </section>
</template>
