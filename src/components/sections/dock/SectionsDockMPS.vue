<script setup></script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8 bg-white text-gray-800">
    <!-- Title and Breadcrumbs -->
    <div class="border-b border-gray-200 pb-4 mb-8">
      <h1 class="text-4xl font-extrabold text-gray-900">
        Металлочерепица, профлист, металлический сайдинг
      </h1>
      <p class="text-sm text-gray-500 mt-1">
        <RouterLink :to="{ name: 'home' }"> Главная </RouterLink>

        /

        <RouterLink :to="{ name: 'dock' }"> Техническая документация </RouterLink>

        / Металлочерепица, профлист, металлический сайдинг
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid gap-6 md:grid-cols-2">
      <!-- Card 1 -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-purple-50 to-white p-6 border border-purple-100"
      >
        <h2 class="text-xl font-semibold text-purple-700 mb-2">
          Инструкция по монтажу FAST CLICK фальцевые панели
        </h2>
        <a
          href="https://drive.google.com/file/d/17zgIRRPLc-YbSZ42E3lomID761GlyPN_/view"
          target="_blank"
          rel="noopener"
          class="inline-block mt-3 text-sm text-purple-600 hover:underline font-medium"
        >
          ПОДРОБНЕЕ
        </a>
      </div>

      <!-- Card 2 -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-purple-50 to-white p-6 border border-purple-100"
      >
        <h2 class="text-xl font-semibold text-purple-700 mb-2">
          Кровельная система. Инструкция по монтажу
        </h2>
        <a
          href="https://drive.google.com/file/d/1A0kZJovgRaEmt2uKC8OOkKJZLswoXy8g/view"
          target="_blank"
          rel="noopener"
          class="inline-block mt-3 text-sm text-purple-600 hover:underline font-medium"
        >
          ПОДРОБНЕЕ
        </a>
      </div>

      <!-- Card 3 -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-purple-50 to-white p-6 border border-purple-100"
      >
        <h2 class="text-xl font-semibold text-purple-700 mb-2">Сайдинг. Инструкция по монтажу</h2>
        <a
          href="https://drive.google.com/file/d/1SSNOzXvutDVja5gCGuvSTRoVGKaaGymr/view"
          target="_blank"
          rel="noopener"
          class="inline-block mt-3 text-sm text-purple-600 hover:underline font-medium"
        >
          ПОДРОБНЕЕ
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
