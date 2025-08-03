<script setup>
import ComponentTitle from '@/components/ComponentTitle.vue'

const props = defineProps(['h1', 'h3'])
</script>

<template>
  <div class="box-y gap down relative">
    <ComponentTitle :text="props.h1" />
    <h3 class="mr-[-7px] bg-white text-black m0">
      {{ props.h3 }}
    </h3>
  </div>
</template>

<style lang="sass" scoped></style>
