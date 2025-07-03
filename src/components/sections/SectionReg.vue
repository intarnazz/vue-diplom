<script setup>
import ComponentOpener from '@/layout/LayoutOpener.vue'
import FormReg from '@/components/form/FormReg.vue'
</script>

<template>
  <ComponentOpener>
    <section class="reg wh box-x">
      <div class="wh flex9 flex media">
        <img class="img" src="@/assets/img/reg-bg.jpg" alt="reg-bg" />
      </div>
      <div class="reg__wrapper wh box-y gap p5 flex16 flex">
        <h2>Регистрация</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores voluptatem
          expedita! Provident odio possimus unde labore hic nisi optio nesciunt alias! Est accusamus
          quaerat soluta consectetur aperiam fugiat laboriosam.
        </p>
        <div class="box-x">
          <FormReg />
          <div class="flex media"></div>
        </div>
        <div class="flex"></div>
      </div>
    </section>
  </ComponentOpener>
</template>

<style lang="sass" scoped></style>
