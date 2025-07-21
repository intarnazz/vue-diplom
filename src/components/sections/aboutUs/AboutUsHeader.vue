<script setup>
import LayoutPageTitle from '@/layout/LayoutPageTitle.vue'
</script>

<template>
  <LayoutPageTitle>
    <template #image>
      <img
        src="@/assets/img/dfy--_rVqLaOGV4-unsplash.webp"
        alt="Фасад современного здания — изображение для страницы «О компании»"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
    </template>
    <template #default>
      <h2 class="bottom-8 left-8 text-white text-4xl font-bold z-10 drop-shadow-md">О компании</h2>
    </template>
  </LayoutPageTitle>
</template>

<style lang="sass" scoped></style>
