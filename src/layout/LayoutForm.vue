<script setup>
const emit = defineEmits(['submit'])
const props = defineProps(['message', 'errors'])

function submit() {
  emit('submit')
}
</script>

<template>
  <div class="flex box-y gap2 form__wrapper w">
    <div v-if="props.message" class="box-y gap">
      <h2 class="form__error">{{ message }}</h2>
      <p class="form__error" v-for="(error, key) in props.errors" :key="key">{{ error[0] }}</p>
    </div>
    <form @submit.prevent="submit()" class="form w">
      <slot> </slot>
    </form>
  </div>
</template>

<style lang="sass">
.form
  max-width: 450px
  &__error
    color: #f00
  & input[type='radio']
    cursor: pointer
  &__wrapper
    display: flex
  &__box
    height: 3.25rem
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
    height: 3.25rem
    border-radius: 0px
    border: none
    color: #fff
    font-weight: 400
    background: #02838D
    padding: 1rem
</style>
