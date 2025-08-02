<script setup>
import FormLogin from '@/components/form/FormLogin.vue'
</script>

<template>
  <h2>Авторизация</h2>
  <p>
    Введите свои данные для входа в личный кабинет. Если у вас еще нет аккаунта, зарегистрируйтесь,
    чтобы получить полный доступ ко всем функциям сайта.
  </p>
  <div class="box-x">
    <FormLogin />
    <div class="flex media"></div>
  </div>
  <RouterLink :to="{ name: 'reg' }" class="a"><h3>Нет аккаунта?</h3></RouterLink>
  <div class="flex"></div>
</template>

<style lang="sass" scoped></style>
