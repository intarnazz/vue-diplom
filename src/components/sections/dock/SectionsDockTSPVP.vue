<script setup></script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8 bg-white text-gray-800">
    <!-- Title and Breadcrumbs -->
    <div class="border-b border-gray-200 pb-4 mb-8">
      <h1 class="text-4xl font-extrabold text-gray-900">
        Трехслойные сэндвич-панели. Минеральная вата, Пенополиизоцианурат
      </h1>
      <p class="text-sm text-gray-500 mt-1">
        <RouterLink :to="{ name: 'home' }"> Главная </RouterLink>

        /

        <RouterLink :to="{ name: 'dock' }"> Техническая документация </RouterLink>

        / Трехслойные сэндвич-панели. Минеральная вата, Пенополиизоцианурат
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid gap-6 md:grid-cols-2">
      <!-- Card 1 -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,95%,96%)] to-white p-6 border border-[hsl(185,95%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,95%,30%)] mb-2">
          Альбом технических решений Airpanel
        </h2>
        <a
          href="https://drive.google.com/file/d/1Rm7ouDJCKxysL-dO19fION3MZLXF7AMn/view"
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
          Легкосбрасываемые конструкции стен из трёхслойных сэндвич-панелей «МЕТАЛЛ ПРОФИЛЬ»
        </h2>
        <a
          href="https://drive.google.com/file/d/1jOf89sCMAPz7vH62VX4Y9wSwb-tm87Jr/view"
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
          Трехслойные сэндвич-панели «Металл Профиль»
        </h2>
        <a
          href="https://drive.google.com/file/d/1qp9agxcY031qlTWCjlI4lTIIYyofyLEi/view"
          target="_blank"
          rel="noopener"
          class="inline-block mt-3 text-sm text-[hsl(185,95%,35%)] hover:underline font-medium"
        >
          ПОДРОБНЕЕ
        </a>
      </div>

      <!-- Card 4 -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,95%,96%)] to-white p-6 border border-[hsl(185,95%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,95%,30%)] mb-2">
          ППР: монтаж фасадов из трёхслойных сэндвич–панелей
        </h2>
        <a
          href="https://drive.google.com/file/d/1lGHZHkSAsyua6c-dDk3jb7XBPEegZuId/view"
          target="_blank"
          rel="noopener"
          class="inline-block mt-3 text-sm text-[hsl(185,95%,35%)] hover:underline font-medium"
        >
          ПОДРОБНЕЕ
        </a>
      </div>

      <!-- Card 5 -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,95%,96%)] to-white p-6 border border-[hsl(185,95%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,95%,30%)] mb-2">
          ППР: монтаж кровли из трёхслойных сэндвич–панелей
        </h2>
        <a
          href="https://drive.google.com/file/d/1DC3nOYla-M3izVYY5wzqiZJMlKp_qPKZ/view"
          target="_blank"
          rel="noopener"
          class="inline-block mt-3 text-sm text-[hsl(185,95%,35%)] hover:underline font-medium"
        >
          ПОДРОБНЕЕ
        </a>
      </div>

      <!-- Card 6 -->
      <div
        class="rounded-2xl shadow-md bg-gradient-to-br from-[hsl(185,15%,95%)] to-white p-6 border border-[hsl(185,15%,80%)]"
      >
        <h2 class="text-xl font-semibold text-[hsl(185,30%,25%)] mb-2">
          Посмотреть или скачать папку «Прочее»
        </h2>
        <a
          href="https://disk.yandex.ru/d/LoxHk_HAhWuWvg"
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
