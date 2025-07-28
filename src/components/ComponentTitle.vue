<script setup>
const props = defineProps(['text', 'isH2'])
</script>

<template>
  <div class="title box-y">
    <h2 v-if="props.isH2" class="bg-white text-black pl-[1rem]">{{ props.text }}</h2>
    <h1 v-else class="bg-white text-black">{{ props.text }}</h1>
    <div class="title__underline"></div>
  </div>
</template>

<style lang="sass" scoped>
.title
  max-width: 901px
  & h1
    margin-bottom: 7px
  &__underline
    background-color: #E6CE30
    height: 10px
    width: 100%
</style>
