<script setup>
const props = defineProps(['text'])
</script>

<template>
  <div class="title box-y">
    <h1 class="bg-white text-black">{{ props.text }}</h1>
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
