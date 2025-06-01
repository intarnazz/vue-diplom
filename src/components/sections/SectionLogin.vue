<script setup>
import ComponentOpener from '@/layout/LayoutOpener.vue'
import FormLogin from '@/layout/form/FormLogin.vue'
</script>

<template>
  <ComponentOpener>
    <section class="login wh box-x">
      <div class="wh">
        <img class="img" src="@/assets/img/login-bg.jpg" alt="login-bg" />
      </div>
      <div class="login__wrapper wh box-y gap p5">
        <h2>Авторизация</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores voluptatem
          expedita! Provident odio possimus unde labore hic nisi optio nesciunt alias! Est accusamus
          quaerat soluta consectetur aperiam fugiat laboriosam.
        </p>
        <div class="box-x">
          <FormLogin />
          <div class="flex"></div>
        </div>
        <div class="flex"></div>
      </div>
    </section>
  </ComponentOpener>
</template>

<style lang="sass" scoped>
.login
  & > div
    &:first-child
      flex: 9
    &:last-child
      flex: 16
</style>
