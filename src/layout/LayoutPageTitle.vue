<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
</script>

<template>
  <header class="header-page-title w-full box-y gap2">
    <div class="relative header-page-title__wrapper">
      <slot class="absolute inset-0 w-full h-full object-cover z-0" name="image"> </slot>
      <!-- <div class="bg-gradient-to-t from-black to-transparent pa wh"></div> -->
      <LayoutWrapper class="h p box-x">
        <slot name="default"> </slot>
      </LayoutWrapper>
    </div>
  </header>
</template>

<style lang="sass" scoped>
.header-page-title
  &__wrapper
    height: 300px

@media screen and (max-width: 666px)
  .header-page-title
    &__wrapper
      height: 200px
</style>
