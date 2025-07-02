<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import FormCalculator from '@/components/form/FormCalculator.vue'
</script>

<template>
  <section class="claculator">
    <LayoutWrapper class="box-x" v-if="!isLoding">
      <div class="flex"></div>
      <FormCalculator />
      <div class="flex"></div>
    </LayoutWrapper>
  </section>
</template>

<style lang="sass" scoped></style>
