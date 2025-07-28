<script setup>
import FormReg from '@/components/form/FormReg.vue'
</script>

<template>
  <h2>Регистрация</h2>
  <p>
    Создайте аккаунт, чтобы получить доступ ко всем возможностям сайта. Заполните форму ниже для
    быстрой и простой регистрации.
  </p>
  <div class="box-x">
    <FormReg />
    <div class="flex media"></div>
  </div>
  <RouterLink :to="{ name: 'login' }" class="a"><h3>Уже есть аккаунт?</h3></RouterLink>
  <div class="flex"></div>
</template>

<style lang="sass" scoped></style>
