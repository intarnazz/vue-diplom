<script setup>
const emit = defineEmits(['submit'])

function submit() {
  emit('submit')
}
</script>

<template>
  <div class="flex search__wrapper">
    <form @submit.prevent="submit()" class="search">
      <slot> </slot>
    </form>
  </div>
</template>

<style lang="sass">
.search
  min-width: 275px
  &__wrapper
    display: flex
    justify-content: flex-end
  & div
    border-bottom: 1px solid #000
    width: 100%
</style>
