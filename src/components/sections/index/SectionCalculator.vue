<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="calculator box-y pr cf gap2">
    <img class="img pa wh" src="@/assets/img/claculator bg.jpg" alt="claculator bg" />
    <LayoutWrapper class="box-x gap2 pr calculator__wrapper">
      <div class="box-y gap flex">
        <h2>УЗНАЙТЕ СТОИМОСТЬ ПРОЕКТА В ПАРУ КЛИКОВ</h2>
        <p>
          Посчитам предварительную стоимость прооекта в удобном калькуляторе для вас. Можно
          отправить результаты на почту!
        </p>
      </div>
      <div class="flex box-x">
        <div class="flex"></div>
        <RouterLink :to="{ name: 'calculator' }" class="button"> КАЛЬКУЛЯТОР </RouterLink>
      </div>
    </LayoutWrapper>
  </section>
</template>

<style scoped lang="sass">
.calculator
  &__wrapper
    padding: 4.375rem 0
</style>
