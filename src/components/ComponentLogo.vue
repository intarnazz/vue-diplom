<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['fill'])

const fill = computed(() => props.fill || '#02838D')
</script>

<template>
  <RouterLink :to="{ name: 'home' }">
    <svg class="logo logo_b" :fill="fill" viewBox="0 0 1403 353" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M130 27H27V352H130V248.202H201.5L301 352H446L287.5 187.736L446 27H287.5L169 151.961H130V27Z"
        stroke="black"
      />
      <path
        d="M823 352H446V270.5H767V245L726.5 231H507L446 166V72.5L494.5 27H868V110L549.5 114V139L605.5 152H823L868 209V306.5L823 352Z"
        stroke="black"
      />
      <path
        d="M1305 352H1216.39V128.873L1054.2 288.888V192.979L984.617 118.934V352H887V27H1021.66L1107.26 113.468L1196.37 27H1305V352Z"
        stroke="black"
      />
      <rect x="1358" y="272" width="10" height="80" />
      <rect x="1323" y="307" width="80" height="10" />
      <rect
        width="12.5707"
        height="100.565"
        transform="matrix(0.707108 -0.707106 0.707108 0.707106 1323 35.8896)"
      />
      <rect
        width="100.565"
        height="12.5707"
        transform="matrix(0.707108 -0.707106 0.707108 0.707106 1323 98.1101)"
      />
      <rect x="14" width="4" height="32" />
      <rect y="14" width="32" height="4" />
    </svg>
    <img class="logo logo_m" src="@/assets/icons/logo/logo M fff.svg" alt="" />
  </RouterLink>
</template>

<style scoped lang="sass">
.logo
  &_m
    height: 10rem
    width: auto
    display: none
  &_b
    height: 2rem
    width: auto
// @media screen and (max-width: 910px)
//   .logo
//     &_b
//       display: none
//     &_m
//       display: block
</style>
