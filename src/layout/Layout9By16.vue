<script setup>
import ComponentOpener from '@/layout/LayoutOpener.vue'
</script>

<template>
  <ComponentOpener>
    <section class="login w box-x h-screen">
      <div class="wh pr flex9 flex media">
        <slot name="image"></slot>
      </div>
      <div class="login__wrapper wh box-y gap p5 flex16 flex">
        <div class="header-spase"></div>
        <slot name="default"></slot>
      </div>
    </section>
  </ComponentOpener>
</template>

<style lang="sass" scoped></style>
