<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import { RouterLink } from 'vue-router'
// import SvgHome from '@/components/svg/SvgHome.vue'
</script>

<template>
  <header class="header box-shadow">
    <LayoutWrapper class="box-y header__wrapper gap2">
      <div class="box-y gap2">
        <div class="box-x gap">
          <div class="box-x flex">
            <RouterLink class="box-x" :to="{ name: 'contact-us' }"> Наши офисы </RouterLink>
            <div class="flex"></div>
          </div>
          <img src="@/assets/icons/КСМ.svg" alt="КСМ" />
          <div class="box-x gap flex">
            <div class="flex"></div>
            <RouterLink class="box-x button" :to="{ name: 'login' }"> Войти </RouterLink>
            <RouterLink class="box-x button" :to="{ name: 'reg' }"> Регистрация </RouterLink>
          </div>
        </div>
        <div class="box-x gap">
          <div class="flex"></div>
          <div class="box-x gap">
            <RouterLink class="box-x" :to="{ name: 'home' }"> Главная </RouterLink>
            <RouterLink class="box-x" :to="{ name: 'portfolio' }"> Портфолио </RouterLink>
            <RouterLink class="box-x" :to="{ name: 'about-us' }"> О нас </RouterLink>
            <RouterLink class="box-x" :to="{ name: 'home' }"> Калькулятор </RouterLink>
            <RouterLink class="box-x" :to="{ name: 'contact-us' }"> Контакты </RouterLink>
          </div>
          <div class="flex"></div>
        </div>
      </div>
    </LayoutWrapper>
  </header>
</template>

<style lang="sass" scoped>
.header
  padding: 1rem 0
  box-shadow: 0 0 10px 0 #d4d4d4
  height: $header
  position: relative
  z-index: 1
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  & nav
    justify-content: start
    gap: 1em
  & img
    font-family: Source-Serif-4
    font-weight: 500
    font-size: 2.3rem

@media screen and (max-width: 820px)
  .header
    & nav
      justify-content: space-between
  .logo
    &_l
      display: none
    &_s
      display: flex

@media screen and (max-width: 630px)
  .header
    & nav
      width: 100%
    &__wrapper
      flex-direction: column
  .search
    width: 100%
  .logo
    &_s
      display: none
    &_nav
      display: flex
</style>
