<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
</script>

<template>
  <header class="about-us-header w-full box-y gap2">
    <div class="relative h-[300px]">
      <img
        src="@/assets/img/dfy--_rVqLaOGV4-unsplash.jpg"
        alt="О компании"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="bg-gradient-to-t from-black to-transparent pa wh"></div>
      <LayoutWrapper class="h box-x">
        <h2 class="bottom-8 left-8 text-white text-4xl font-bold z-10 drop-shadow-md">
          О компании
        </h2>
      </LayoutWrapper>
    </div>
  </header>
</template>

<style lang="sass" scoped></style>
