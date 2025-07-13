<script setup>
import ComponentOpener from '@/layout/LayoutOpener.vue'
import FormLogin from '@/components/form/FormLogin.vue'
</script>

<template>
  <ComponentOpener>
    <section class="login wh box-x">
      <div class="wh flex9 flex media">
        <img class="img" src="@/assets/img/login-bg.webp" alt="login-bg" />
      </div>
      <div class="login__wrapper wh box-y gap p5 flex16 flex">
      <div class="header-spase"></div>
        <h2>Авторизация</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores voluptatem
          expedita! Provident odio possimus unde labore hic nisi optio nesciunt alias! Est accusamus
          quaerat soluta consectetur aperiam fugiat laboriosam.
        </p>
        <div class="box-x">
          <FormLogin />
          <div class="flex media"></div>
        </div>
        <div class="flex"></div>
      </div>
    </section>
  </ComponentOpener>
</template>

<style lang="sass" scoped></style>
