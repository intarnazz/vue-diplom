<script setup></script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8 bg-white text-gray-800">
    <!-- Title and Breadcrumbs -->
    <div class="border-b border-gray-200 pb-4 mb-8">
      <h1 class="text-4xl font-extrabold text-gray-900">
        Сэндвич-панели поэлементной сборки (СППС)
      </h1>
      <p class="text-sm text-gray-500 mt-1">
        <RouterLink :to="{ name: 'home' }"> Главная </RouterLink>

        /
        <RouterLink :to="{ name: 'dock' }"> Техническая документация </RouterLink>

        / Сэндвич-панели поэлементной сборки (СППС)
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid gap-6 md:grid-cols-2">
      <!-- Card 1 -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,95%,96%)] to-white p-6 border border-[hsl(185,95%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,95%,30%)] mb-2">
          Сэндвич-панели поэлементной сборки
        </h2>
        <a
          href="https://drive.google.com/file/d/1T0Ax81WH2rYCzbtimoELAhFdVSHF2bRF/view"
          target="_blank"
          rel="noopener"
          class="inline-block mt-3 text-sm text-[hsl(185,95%,35%)] hover:underline font-medium"
        >
          ПОДРОБНЕЕ
        </a>
      </div>

      <!-- Card 2 -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,95%,96%)] to-white p-6 border border-[hsl(185,95%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,95%,30%)] mb-2">
          ППР: монтаж кровли из сэндвич–панелей поэлементной сборки
        </h2>
        <a
          href="https://drive.google.com/file/d/15j6vH3CK5-bsQ5ghvhw9RyqjyagusGKp/view"
          target="_blank"
          rel="noopener"
          class="inline-block mt-3 text-sm text-[hsl(185,95%,35%)] hover:underline font-medium"
        >
          ПОДРОБНЕЕ
        </a>
      </div>

      <!-- Card 3 -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,95%,96%)] to-white p-6 border border-[hsl(185,95%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,95%,30%)] mb-2">
          ППР: облицовка фасадов сэндвич–панелями поэлементной сборки
        </h2>
        <a
          href="https://drive.google.com/file/d/1y9qXB72uAw18lcUm9-HRCGvKbbBjE_5O/view"
          target="_blank"
          rel="noopener"
          class="inline-block mt-3 text-sm text-[hsl(185,95%,35%)] hover:underline font-medium"
        >
          ПОДРОБНЕЕ
        </a>
      </div>

      <!-- Card 4 -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,15%,95%)] to-white p-6 border border-[hsl(185,15%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,30%,25%)] mb-2">
          Посмотреть или скачать папку «Прочее»
        </h2>
        <a
          href="https://disk.yandex.ru/d/4GIhitnsJHhpWw"
          target="_blank"
          rel="noopener"
          class="inline-block mt-3 text-sm text-[hsl(185,30%,35%)] hover:underline font-medium"
        >
          ПЕРЕЙТИ
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
