<script setup>
import { computed, ref, watch } from 'vue'

const emit = defineEmits(['submit'])
const props = defineProps(['message', 'errors', 'success', 'loding'])
const isOk = ref(false)
const isLoding = ref(false)

const loding = computed(() => props.loding ?? true)

function submit() {
  isLoding.value = true
  emit('submit')
}

watch(
  () => props.message,
  () => (isOk.value = false),
)
</script>

<template>
  <div class="flex box-y gap2 form__wrapper w">
    <div class="box-y gap">
      <h2
        v-if="props.message && !isOk && !errors"
        class="form__error p"
        :class="{ success: success }"
      >
        {{ message }}
      </h2>
      <h2 v-else-if="isLoding && !isOk && loding && !errors" class="form__error p isLoding">
        Загрузка...
      </h2>
      <template v-if="props.message && !isOk">
        <p class="form__error" v-for="(error, key) in props.errors" :key="key">{{ error[0] }}</p>
      </template>

      <div v-if="props.message && !isOk" class="box-x">
        <button @click="() => (isOk = true)" class="button__form">Ok</button>
      </div>
    </div>
    <form
      @submit.prevent="() => submit()"
      class="form w"
      :class="{ error: props.message && !isOk }"
    >
      <slot> </slot>
    </form>
  </div>
</template>

<style lang="sass">
.error
  .bg-error
    background-color: #ffdbdb
    color: #000

.form
  max-width: 450px
  width: 450px
  // margin: auto
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
    box-shadow: 0 0 0 0 hsla(0,0%,0%,.6)
    &:hover
      margin: 0 0 0 0
      box-shadow: 0 0 0 0 #04838E
      background-color: #02838D

.success
  color: $successColor
  background-color: $successBg

.isLoding
  color: $isLodingColor
  background-color: $isLodingBg


@media screen and (max-width: 510px)
  .form
    max-width: none
    width: 100%
    margin: auto
</style>
