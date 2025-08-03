<script setup>
const props = defineProps(['text', 'isH2', 'isP'])
</script>

<template>
  <div class="title box-y" :class="{ 'title__is-p': props.isP }">
    <h2 v-if="props.isH2" class="bg-white text-black">{{ props.text }}</h2>
    <h1 v-else class="bg-white text-black">{{ props.text }}</h1>
    <div class="title__underline"></div>
  </div>
</template>

<style lang="sass" scoped>
.title
  max-width: 901px
  &__is-p
    & h1, h2
      padding: 0 1rem
  & h1, h2
    margin-bottom: 7px
  &__underline
    background-color: #E6CE30
    height: 10px
    width: 100%
</style>
