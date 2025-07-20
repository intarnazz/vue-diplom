<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="calculator box-y  pr cf gap2">
    <img class="img pa wh" src="@/assets/img/claculator bg.webp" alt="Калькулятор фона" />
    <LayoutWrapper class="box-x p media gap2 pr calculator__wrapper">
      <div class="box-y gap flex">
        <h2>Рассчитайте стоимость фасадного проекта за 2 минуты</h2>
        <p>
          Наш онлайн-калькулятор поможет быстро и удобно получить предварительную стоимость работ и
          материалов. Вы можете отправить расчёт себе на почту или сразу обсудить его с менеджером.
        </p>
      </div>
      <div class="flex box-x">
        <div class="flex"></div>
        <RouterLink :to="{ name: 'calculator' }" class="button">
          Перейти к калькулятору
        </RouterLink>
      </div>
    </LayoutWrapper>
  </section>
</template>

<style scoped lang="sass">
.calculator
  &__wrapper
    padding: 4.375rem 0
</style>
