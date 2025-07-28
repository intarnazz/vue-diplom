<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8 bg-white text-gray-800">
    <!-- Title and Header -->
    <div class="border-b border-gray-200 pb-4 mb-8">
      <h1 class="text-4xl font-extrabold text-gray-900">Техническая документация</h1>
      <p class="text-sm text-gray-500 mt-1">
        <RouterLink :to="{ name: 'home' }"> Главная </RouterLink>

        /
        <RouterLink :to="{ name: 'dock' }"> Техническая документация </RouterLink>
      </p>
    </div>

    <!-- Document Sections -->
    <div class="grid gap-6 md:grid-cols-2">
      <!-- Вентилируемые фасады -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,95%,96%)] to-white p-6 border border-[hsl(185,95%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,95%,30%)] mb-2">Вентилируемые фасады</h2>
        <p class="text-sm text-[hsl(185,30%,30%)]">
          Раздел содержит материалы для проектирования и рабочие чертежи конструкции навесных
          фасадных систем "ВФ МП" для облицовки фасадов и утепления стен снаружи.
        </p>
        <RouterLink
          :to="{ name: 'd.vf' }"
          class="inline-block mt-3 text-sm text-[hsl(185,95%,35%)] hover:underline font-medium"
          >Подробнее →</RouterLink
        >
      </div>

      <!-- Сэндвич-панели -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,95%,96%)] to-white p-6 border border-[hsl(185,95%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,95%,30%)] mb-2">
          Трехслойные сэндвич-панели
        </h2>
        <p class="text-sm text-[hsl(185,30%,30%)]">
          Документация и сертификаты для проектирования и монтажа панелей с минеральной ватой и ПИР.
        </p>
        <RouterLink
          :to="{ name: 'd.tspvp' }"
          class="inline-block mt-3 text-sm text-[hsl(185,95%,35%)] hover:underline font-medium"
          >Подробнее →</RouterLink
        >
      </div>

      <!-- СППС -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,95%,96%)] to-white p-6 border border-[hsl(185,95%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,95%,30%)] mb-2">
          Сэндвич-панели поэлементной сборки (СППС)
        </h2>
        <p class="text-sm text-[hsl(185,30%,30%)]">
          Техническая документация по СППС с различными видами облицовки.
        </p>
        <RouterLink
          :to="{ name: 'd.sppss' }"
          class="inline-block mt-3 text-sm text-[hsl(185,95%,35%)] hover:underline font-medium"
          >Подробнее →</RouterLink
        >
      </div>

      <!-- Металлочерепица и профлист -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,95%,96%)] to-white p-6 border border-[hsl(185,95%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,95%,30%)] mb-2">
          Металлочерепица, профлист, металлический сайдинг
        </h2>
        <p class="text-sm text-[hsl(185,30%,30%)]">
          Общий раздел по фасадной и кровельной облицовке листовыми металлическими материалами.
        </p>
        <RouterLink
          :to="{ name: 'd.mps' }"
          class="inline-block mt-3 text-sm text-[hsl(185,95%,35%)] hover:underline font-medium"
          >Подробнее →</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
