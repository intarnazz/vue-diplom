<script setup></script>

<template>
  <section class="w-full">
    <!-- Hero image + title -->
    <div class="relative h-[300px] pr">
      <!-- Изображение на заднем плане -->
      <img
        src="@/assets/img/about-us image.webp"
        alt="About Us"
        class="absolute inset-0 w-full h-full object-cover z-0 img pa"
      />
      <!-- Текст -->
      <h1 class="my-[5rem] mx-[2rem] bottom-6 left-6 text-white text-4xl font-bold z-20 pr">
        О компании
      </h1>
    </div>

    <!-- Intro section -->
    <div class="relative px-6 py-12 bg-white">
      <div
        class="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full opacity-90 -z-10 translate-x-10 translate-y-10"
      />
      <h2 class="text-3xl font-bold mb-4">
        Больше удовольствия<br />
        Для всех — <br />
        Вперёд в будущее!
      </h2>
      <p class="max-w-2xl text-gray-700 leading-relaxed">
        Наша компания занимается проектированием и производством фасадных решений любой сложности.
        Мы предлагаем надёжные и эстетически выверенные решения, разработанные с учётом всех
        современных стандартов качества. Работаем быстро, точно и без лишних затрат.
      </p>
    </div>

    <!-- Benefits grid -->
    <div class="bg-gray-50 py-16 px-6 grid gap-10 lg:grid-cols-3">
      <div class="space-y-2">
        <h3 class="text-xl font-semibold">1. Гибкая система цен</h3>
        <p class="text-gray-700">
          Мы подскажем, как оптимизировать затраты без ущерба надёжности конструкции и внешнему
          виду.
        </p>
        <span class="text-sm text-blue-500 cursor-pointer">Пример расчета работ</span>
      </div>

      <div class="space-y-2">
        <h3 class="text-xl font-semibold">2. Проектирование</h3>
        <p class="text-gray-700">
          Разработаем рабочую проектную документацию для фасадных систем любой сложности.
        </p>
      </div>

      <div class="space-y-2">
        <h3 class="text-xl font-semibold">3. Современное оборудование</h3>
        <p class="text-gray-700">Собственное производство, полностью обновлённое в 2022 году.</p>
        <span class="text-sm text-blue-500 cursor-pointer">Видео с производства</span>
      </div>

      <div class="space-y-2">
        <h3 class="text-xl font-semibold">4. Срочные задачи</h3>
        <p class="text-gray-700">
          Производство, проектный отдел и логистика — всё в одном месте. Минимум рисков, максимум
          скорости.
        </p>
        <span class="text-sm text-blue-500 cursor-pointer">Пример рабочего проекта</span>
      </div>

      <div class="space-y-2">
        <h3 class="text-xl font-semibold">5. Точность до миллиметра</h3>
        <p class="text-gray-700">
          Изделия обрабатываются на станках с ЧПУ — исключены неточности форм и размеров.
        </p>
      </div>

      <div class="space-y-2">
        <h3 class="text-xl font-semibold">6. Минимальная партия от 1 м²</h3>
        <p class="text-gray-700">
          Производим от 1 изделия — идеальное решение для нестандартных задач.
        </p>
        <span class="text-sm text-blue-500 cursor-pointer">Пример фасада</span>
      </div>

      <div class="space-y-2">
        <h3 class="text-xl font-semibold">7. Оптимизация стоимости</h3>
        <p class="text-gray-700">Проектировщики сокращают отходы на 30% при раскрое материалов.</p>
        <span class="text-sm text-blue-500 cursor-pointer">Усреднённый расчёт монтажа</span>
      </div>
    </div>

    <!-- Company facts -->
    <div class="bg-white py-16 text-center">
      <h2 class="text-2xl font-bold mb-8">О компании в цифрах</h2>
      <div class="flex flex-wrap justify-center gap-10">
        <div class="text-center">
          <div class="text-4xl font-bold text-blue-600">2010</div>
          <div class="text-gray-600">Год основания</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-blue-600">30+</div>
          <div class="text-gray-600">Специалистов</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-blue-600">1 млн м²</div>
          <div class="text-gray-600">Площадь фасадов</div>
        </div>
      </div>
    </div>

    <!-- Certificates -->
    <div class="bg-gray-100 py-16 px-6">
      <h2 class="text-2xl font-bold mb-8 text-center">Сертификаты</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <img
          v-for="n in 5"
          :key="n"
          :src="'@/assets/img/about-us image.webp'"
          alt="Сертификат"
          class="rounded shadow-md object-cover w-full h-48"
        />
      </div>
    </div>

    <!-- Contact form -->
    <div class="py-16 px-6 bg-white">
      <h2 class="text-2xl font-bold mb-4">Связаться с нами</h2>
      <p class="mb-6 text-gray-600">
        Оставьте свои контакты, чтобы обсудить проект или задать вопрос. Мы свяжемся с вами в
        течение рабочего дня.
      </p>

      <form class="grid gap-4 max-w-xl">
        <input type="text" placeholder="Ваше имя" class="border p-3 rounded" />
        <input type="tel" placeholder="+7 (999) 999-99-99" class="border p-3 rounded" />
        <input type="text" placeholder="Компания" class="border p-3 rounded" />

        <label class="flex items-center space-x-2 text-sm text-gray-600">
          <input type="checkbox" class="accent-blue-500" />
          <span>Я согласен с политикой обработки персональных данных</span>
        </label>
        <label class="flex items-center space-x-2 text-sm text-gray-600">
          <input type="checkbox" class="accent-blue-500" />
          <span>Я согласен с политикой конфиденциальности</span>
        </label>

        <button type="submit" class="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700">
          Отправить
        </button>
      </form>

      <p class="mt-6 text-sm text-gray-500">Минимальный заказ от 100 м²</p>
    </div>
  </section>
</template>

<style lang="sass" scoped></style>
