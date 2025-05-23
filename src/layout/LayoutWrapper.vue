<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const defaultWrapperClass = 'wrapper'

const specialRouteClass = 'special-wrapper'

const route = useRoute()

const wrapperClass = computed(() => {
  return route.path === '/contact-us' || route.path === '/catalog'
    ? specialRouteClass
    : defaultWrapperClass
})

// watchEffect(() => {
//   if (route.path === '/special-route') {
//     //
//   }
// })
</script>

<template>
  <div :class="`${wrapperClass} default`">
    <slot> </slot>
  </div>
</template>

<style lang="sass" scoped>
.default
  transition: .5s

.special-wrapper
  width: calc( 100dvw - 8rem )

.wrapper
  width: 1300px

@media screen and (max-width: 1440px)
  .special-wrapper
    width: 100%
  .wrapper
    width: 100%
    margin: 0
    padding: 0

@media screen and (max-width: 590px)
  .wrapper
    width: 100%
    margin: 0
    padding: 0
</style>
