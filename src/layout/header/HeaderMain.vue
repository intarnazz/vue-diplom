<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import SvgMenu from '@/components/svg/SvgMenu.vue'
import ComponentLogo from '@/components/ComponentLogo.vue'
import { User } from '@/storage/user.js'
import { auth } from '@/api/api.js'
import { RouterLink, useRouter } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'

const user = User()
const menu = ref(false)
const router = useRouter()

const closeMenuOnRouteChange = () => {
  menu.value = false
}

onMounted(() => {
  router.afterEach(closeMenuOnRouteChange)
})

onUnmounted(() => {
  router.afterEach(() => {})
})
</script>

<template>
  <button @click="() => (menu = true)" class="menu menu__button">
    <SvgMenu />
  </button>
  <header class="header box-shadow" :class="{ menu: menu }">
    <LayoutWrapper class="box-y header__wrapper gap2">
      <div class="box-y gap2">
        <div class="box-x gap">
          <div class="box-x flex">
            <RouterLink class="box-x" :to="{ name: 'contact-us' }"> Наши офисы </RouterLink>
            <div class="flex"></div>
          </div>
          <ComponentLogo />
          <div class="box-x gap flex">
            <div class="flex"></div>
            <RouterLink class="box-x" :to="{ name: 'message-me' }">
              Напишите нам сообщение
            </RouterLink>
            <template v-if="!user.get.value">
              <RouterLink class="box-x button" :to="{ name: 'login' }"> Войти </RouterLink>
              <RouterLink class="box-x button" :to="{ name: 'reg' }"> Регистрация </RouterLink>
            </template>
            <template v-else>
              <RouterLink class="box-x button" :to="{ name: 'chat' }"> Мои чаты </RouterLink>
              <RouterLink class="box-x button" :to="{ name: 'profile' }"> Profile </RouterLink>
              <button @click="auth.logout" class="box-x button">Logout</button>
            </template>
          </div>
        </div>
        <div class="box-x gap">
          <div class="flex"></div>
          <div class="box-x gap">
            <RouterLink class="box-x" :to="{ name: 'home' }"> Главная </RouterLink>
            <RouterLink class="box-x" :to="{ name: 'portfolio' }"> Портфолио </RouterLink>
            <RouterLink class="box-x" :to="{ name: 'about-us' }"> О нас </RouterLink>
            <RouterLink class="box-x" :to="{ name: 'calculator' }"> Калькулятор </RouterLink>
            <RouterLink class="box-x" :to="{ name: 'contact-us' }"> Контакты </RouterLink>
          </div>
          <div class="flex"></div>
        </div>
      </div>
    </LayoutWrapper>
    <button @click="() => (menu = false)" class="menu menu__button_cansel flex wh"></button>
  </header>
</template>

<style lang="sass" scoped>
.menu
  display: none
.header
  padding: 1rem 0
  box-shadow: 0 0 10px 0 #d4d4d4
  max-height: $header
  min-height: $header
  position: relative
  z-index: 1
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  display: none
  &__wrapper
     transition: 0s
  & nav
    justify-content: start
    gap: 1em
  & img
    font-family: Source-Serif-4
    font-weight: 500
    font-size: 2.3rem

@media screen and (max-width: 910px)
  .menu
    display: block
    &__button
      min-height: $menu
      max-height: $menu
      &_cansel
        background-color: #00000000 !important
  .header
    position: fixed
    z-index: -1
    color: #fff
    max-height: none
    min-height: none
    padding-left: 4rem
    +wh
    padding: 0
    transition: 0s
    display: flex
    flex-direction: row
    justify-content: flex-start
    &.menu
      background-color: #00000088
      z-index: 99
      & .header
        transition: .5s
        &__wrapper
          margin-left: 0
          transition: .2s
    & .gap
      gap: 2rem
    & .gap2
      gap: 3rem
    &__wrapper
      background-color: #000000
      +h
      width: auto
      padding: 1rem 1rem 1rem 5rem
      margin-left: -400px
    & a
      color: #fff
      background-color: #000000
      text-decoration: underline
      &.button
        text-decoration: none
    & button
      color: #fff
      background-color: #000000
    & .box-x
      flex-direction: column
      align-items: flex-start

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
