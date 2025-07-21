<script setup>
import FormGuestQuery from '@/components/form/FormGuestQuery.vue'
</script>

<template>
  <section class="box-y flex">
    <h2>Ваш запрос без регистрации</h2>
    <p>
      Здесь незарегистрированные пользователи могут оставить свои запросы или вопросы. Мы
      обязательно рассмотрим ваше сообщение и свяжемся с вами.
    </p>
    <FormGuestQuery />
  </section>
</template>

<style lang="sass" scoped></style>
