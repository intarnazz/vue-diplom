<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ComponentLogo from '@/components/ComponentLogo.vue'
</script>

<template>
  <footer class="footer">
    <LayoutWrapper class="box-y gap">
      <ComponentLogo fill="#fff" />
      <RouterLink :to="{ name: 'contact-us' }"> Наши офисы </RouterLink>
      <RouterLink :to="{ name: 'messageMe' }"> Напишите нам сообщение </RouterLink>
      <RouterLink :to="{ name: 'login' }"> Войти </RouterLink>
      <RouterLink :to="{ name: 'reg' }"> Регистрация </RouterLink>
      <RouterLink :to="{ name: 'chat' }"> Мои чаты </RouterLink>
      <RouterLink :to="{ name: 'profile' }"> Profile </RouterLink>
      <RouterLink :to="{ name: 'home' }"> Главная </RouterLink>
      <RouterLink :to="{ name: 'portfolio' }"> Портфолио </RouterLink>
      <RouterLink :to="{ name: 'about-us' }"> О нас </RouterLink>
      <RouterLink :to="{ name: 'calculator' }"> Калькулятор </RouterLink>
      <RouterLink :to="{ name: 'contact-us' }"> Контакты </RouterLink>
    </LayoutWrapper>
  </footer>
</template>

<style lang="sass" scoped>
a
  color: $footerColor
  text-decoration: underline
.contact
  &__item
    & img
      width: 25px
      height: 25px

.footer
  font-size: .9rem
  background-color: #2f2f2f
  color: $footerColor
  padding: 4rem 0
  display: flex
  justify-content: center
  align-items: center
  &__wrapper
    align-items: flex-start
  & nav
    gap: 1em
  &__web-wrapper
    justify-content: flex-end
    gap: 1em
  & img
    font-family: Source-Serif-4
    font-weight: 500
    font-size: 2.3em
@media screen and (max-width: 1070px)
  .footer
    &__wrapper
      flex-direction: column
</style>
