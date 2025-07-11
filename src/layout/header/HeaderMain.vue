<script setup>
import SvgMenu from '@/components/svg/SvgMenu.vue'
import ComponentLogo from '@/components/ComponentLogo.vue'
import { User } from '@/storage/user.js'
import { auth } from '@/api/api.js'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { onMounted, onUnmounted, ref, computed } from 'vue'

const user = User()
const menu = ref(false)

const route = useRoute()
const router = useRouter()

const scrollY = ref(0)

const updateScroll = () => {
  scrollY.value = window.scrollY || 0
}

const isTransparent = computed(() => {
  return route.name === 'home' && scrollY.value <= 10
})

// Закрываем меню при переходах
const closeMenuOnRouteChange = () => {
  menu.value = false
  requestAnimationFrame(updateScroll)
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll)
  router.afterEach(closeMenuOnRouteChange)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<template>
  <button @click="() => (menu = true)" class="menu menu__button">
    <SvgMenu />
  </button>
  <header
    class="header box-shadow wh"
    :class="{ transparent: isTransparent, menu: menu, 'header_home-page': route.name === 'home' }"
  >
    <div class="box-x wh gap">
      <ComponentLogo />
      <div class="flex"></div>
      <div class="box-x">
        <div class="header__bg-module box-x gap2">
          <RouterLink class="box-x" :to="{ name: 'home' }"> Главная </RouterLink>
          <RouterLink class="box-x" :to="{ name: 'portfolio' }"> Портфолио </RouterLink>
          <RouterLink class="box-x" :to="{ name: 'about-us' }"> О нас </RouterLink>
          <RouterLink class="box-x" :to="{ name: 'calculator' }"> Калькулятор </RouterLink>
          <RouterLink class="box-x" :to="{ name: 'contact-us' }"> Контакты </RouterLink>
          <RouterLink class="box-x" :to="{ name: 'message-me' }">
            Напишите нам сообщение
          </RouterLink>
        </div>
        |
        <div class="header__bg-module box-x gap2">
          <template v-if="!user.get.value">
            <RouterLink class="box-x" :to="{ name: 'login' }"> Войти </RouterLink>
            <RouterLink class="box-x" :to="{ name: 'reg' }"> Зарегестрироваться </RouterLink>
          </template>
          <template v-else>
            <RouterLink class="box-x button1" :to="{ name: 'chat' }"> Мои чаты </RouterLink>
            <RouterLink class="box-x button" :to="{ name: 'profile' }"> Profile </RouterLink>
            <button @click="auth.logout" class="box-x button">Logout</button>
          </template>
        </div>
      </div>
    </div>
    <button @click="() => (menu = false)" class="menu menu__button_cansel flex wh"></button>
  </header>
</template>

<style lang="sass" scoped>
.header
  transition: opacity 0.3s ease, background-color 0.3s ease
  opacity: 1
  pointer-events: auto
  &_home-page
    margin-top: -$header
  &.transparent
    background-color: #00000000
    // pointer-events: none
    box-shadow: 0 0 0 0 #000
  &__bg-module
    background-color: #fff
    border-radius: 20px
    opacity: 1 !important
    padding: .5rem 2rem
.menu
  display: none
.header
  padding: 1rem 2rem
  background-color: #fff
  box-shadow: 0 0 10px 0 #000
  // max-height: $header
  // min-height: $header
  position: sticky
  top: 0
  z-index: 99
  display: flex
  justify-content: center
  align-items: center
  width: 100%
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
