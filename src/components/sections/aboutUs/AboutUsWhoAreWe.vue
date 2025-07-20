<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
</script>

<template>
  <section class="who-are-we w-full box-y gap2 p">
    <LayoutWrapper>
      <!-- Who are we? -->
      <div class="relative bg-white">
        <div class="absolute right-0">
          <img class="opacity-50" src="@/assets/icons/Rectangle 154.svg" alt="" />
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
    </LayoutWrapper>
  </section>
</template>

<style lang="sass" scoped></style>
