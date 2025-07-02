<script setup>
const emit = defineEmits(['submit'])

function submit() {
  emit('submit')
}
</script>

<template>
  <div class="flex form__wrapper w">
    <form @submit.prevent="submit()" class="form w">
      <slot> </slot>
    </form>
  </div>
</template>

<style lang="sass">
.form
  max-width: 450px
  & input[type='radio']
    cursor: pointer
  &__wrapper
    display: flex
  &__box
    & > input
      border: 1px solid $th
      padding: 1rem .5rem
      border-bottom: none
      +wh
    & > select
      border: 1px solid $th
      padding: 1rem .5rem
      border-bottom: none
      +wh
    &:last-child
      border-bottom: 1px solid $th
    & > textarea
      border: 1px solid $th
      padding: 1rem .5rem
      border-bottom: none
      +wh
    &:last-child
      border-bottom: 1px solid $th
  & button
    border-radius: 0px
    border: none
    color: #fff
    font-weight: 400
    background: #02838D
    padding: 1rem
</style>
