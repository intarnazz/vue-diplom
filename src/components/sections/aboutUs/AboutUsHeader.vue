<script setup>
import LayoutPageTitle from '@/layout/LayoutPageTitle.vue'
import ComponentXLTitle from '@/components/ComponentXLTitle.vue'
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
      <div class="box-y">
        <div class="flex"></div>
        <ComponentXLTitle
          :h1="`О компании, которой доверяют частные и корпоративные клиенты`"
          :h3="`Много лет опыта, реализованные проекты и сплочённая команда`"
        />
        <div class="flex"></div>
      </div>
    </template>
  </LayoutPageTitle>
</template>

<style lang="sass" scoped></style>
