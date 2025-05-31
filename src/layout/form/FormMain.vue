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
  &__wrapper
    display: flex
  &__box
    border: 1px solid #CBCDD2
    padding: 1rem .5rem
    width: 100%
    border-bottom: none
    &:last-child
      border-bottom: 1px solid #CBCDD2
  & button
    border-radius: 0px
    border: none
    color: #fff
    font-weight: 400
    background: #02838D
    padding: 1rem
</style>
