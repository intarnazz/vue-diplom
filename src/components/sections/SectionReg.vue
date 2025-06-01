<script setup>
import ComponentOpener from '@/layout/LayoutOpener.vue'
import FormReg from '@/layout/form/FormReg.vue'
</script>

<template>
  <ComponentOpener>
    <section class="reg wh box-x">
      <div class="wh">
        <img class="img" src="@/assets/img/reg-bg.jpg" alt="reg-bg" />
      </div>
      <div class="reg__wrapper wh box-y gap p5">
        <h2>Регистрация</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores voluptatem
          expedita! Provident odio possimus unde labore hic nisi optio nesciunt alias! Est accusamus
          quaerat soluta consectetur aperiam fugiat laboriosam.
        </p>
        <div class="box-x">
          <FormReg />
          <div class="flex"></div>
        </div>
        <div class="flex"></div>
      </div>
    </section>
  </ComponentOpener>
</template>

<style lang="sass" scoped>
.reg
  & > div
    &:first-child
      flex: 9
    &:last-child
      flex: 16
</style>
