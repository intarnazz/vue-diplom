<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
</script>

<template>
  <section class="w-full box-y gap2">
    <!-- Hero -->
    <div class="relative h-[300px]">
      <img
        src="@/assets/img/dfy--_rVqLaOGV4-unsplash.jpg"
        alt="О компании"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="bg-gradient-to-t from-black to-transparent pa wh"></div>
      <LayoutWrapper class="h box-x">
        <h1 class="bottom-8 left-8 text-white text-4xl font-bold z-10 drop-shadow-md">
          О компании
        </h1>
      </LayoutWrapper>
    </div>

    <LayoutWrapper>
      <!-- More Fun Section -->
      <div class="relative bg-white">
        <div class="absolute">
          <img src="@/assets/img/Rectangle 153.png" class="opacity-50" alt="" />
        </div>
        <div class="relative z-10">
          <h2 class="text-4xl font-extrabold leading-tight mb-6 text-[#202040]">
            Комплексные<br />
            Системы<br />
            Монтажа
          </h2>

          <div class="w box-x">
            <div class="flex"></div>
            <p class="text-gray-700 w-[90%] text-base leading-relaxed">
              Мы — команда профессионалов, специализирующаяся на проектировании, производстве и
              монтаже навесных вентилируемых фасадов. С 2010 года реализуем проекты различной
              сложности по всей России.
              <br /><br />

              <strong>1. Гибкая система ценообразования:</strong> Предлагаем индивидуальные условия
              для каждого проекта. Помогаем с оптимизацией бюджета без потери качества. <br /><br />

              <strong>2. Сильный проектный отдел:</strong> Разрабатываем полные комплекты проектной
              документации для фасадных решений. Работаем с BIM, CAD, Revit. <br /><br />

              <strong>3. Точное производство:</strong> Используем современное оборудование с ЧПУ.
              Производственные линии обновлены в 2022 году. Качество соответствует ГОСТ и
              международным стандартам. <br /><br />

              <strong>4. Оперативность:</strong> Выполняем срочные заказы. За счёт собственного
              производства, логистики и проектирования не зависим от подрядчиков. <br /><br />

              <strong>5. Минимальные партии:</strong> Возможность изготовления от 1 м². Работаем как
              с крупными, так и с частными заказчиками. <br /><br />

              <strong>6. Минимум отходов — максимум эффективности:</strong> Наши инженеры подбирают
              оптимальные схемы раскроя и узлов — это позволяет сократить отходы до 30%.
            </p>
          </div>
        </div>
      </div>

      <!-- Who are we? -->
      <div class="relative bg-white">
        <div class="absolute right-0">
          <img class="opacity-50" src="@/assets/img/Rectangle 154.png" alt="" />
        </div>
        <div class="relative z-10">
          <h2 class="text-4xl font-extrabold leading-tight mb-6 text-[#202040]">
            О нас<br />
            в деталях
          </h2>

          <div class="w box-x">
            <div class="flex"></div>
            <p class="text-gray-700 w-[90%] text-base leading-relaxed">
              За годы работы мы успешно реализовали сотни проектов — от частных домов до крупных
              коммерческих и промышленных объектов. Мы гордимся доверием наших партнёров и
              репутацией ответственного подрядчика.
              <br /><br />

              Наши основные преимущества:
              <br /><br />

              <strong>✔ Собственное производство:</strong> Это позволяет контролировать качество на
              каждом этапе. <br /><br />

              <strong>✔ Комплексный подход:</strong> Проектируем, поставляем и монтируем. Один
              подрядчик — меньше рисков. <br /><br />

              <strong>✔ Команда:</strong> В штате — инженеры, архитекторы, технологи, монтажники и
              логисты с многолетним опытом. <br /><br />

              <strong>✔ Прозрачность:</strong> Открытая система расчётов, договорные сроки и
              гарантийные обязательства.
            </p>
          </div>
        </div>
      </div>

      <!-- Сертификаты -->
      <div class="bg-white px-6 py-20">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-10">Сертификаты</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <img
              src="@/assets/img/Frame_9.png.webp"
              alt="Сертификат 1"
              class="w-full rounded shadow"
            />
            <img
              src="@/assets/img/Frame_10.png.webp"
              alt="Сертификат 2"
              class="w-full rounded shadow"
            />
            <img
              src="@/assets/img/Frame_11.png.webp"
              alt="Сертификат 3"
              class="w-full rounded shadow"
            />
            <img
              src="@/assets/img/Frame_12.png.webp"
              alt="Сертификат 4"
              class="w-full rounded shadow"
            />
            <img
              src="@/assets/img/Frame_13.png.webp"
              alt="Сертификат 5"
              class="w-full rounded shadow"
            />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  </section>
</template>

<style lang="sass" scoped></style>
