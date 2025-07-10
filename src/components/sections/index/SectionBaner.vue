<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="baner wh pr">
    <img class="img slide pa" src="@/assets/img/_Fjord_Plaza_.jpg 1.webp" alt="_Fjord_Plaza_" />
    <img class="img slide pa" src="@/assets/img/IMG_9879.jpg 3.webp" alt="IMG_9879.jpg 3" />
    <img class="img slide pa" src="@/assets/img/reg-bg.webp" alt="_Fjord_Plaza_" />

    <div class="baner__linear pa wh"></div>
    <div class="baner__content pa wh box-y p2">
      <div class="box-y flex">
        <div class="box-x">
          <div class="flex"></div>
          <img class="baner__logo" src="@/assets/icons/logo/logo B fff.svg" alt="logo" />
          <div class="flex"></div>
        </div>
        <div class="box-x">
          <div class="flex"></div>
          <RouterLink :to="{ name: 'message-me' }" class="button"> ОТПРАВИТЬ ЗАЯВКУ </RouterLink>
          <div class="flex"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.slide
  opacity: 0
  animation: fade 18s infinite

.slide:nth-child(1)
  animation-delay: 0s

.slide:nth-child(2)
  animation-delay: 6s

.slide:nth-child(3)
  animation-delay: 12s

@keyframes fade
  0%
    opacity: 0
  11%
    opacity: 1
  33%
    opacity: 1
  44%
    opacity: 0
  100%
    opacity: 0

.baner
  background-color: #000
  z-index: 1
  min-height: 100dvh
  height: 100dvh
  border-bottom: 13px solid #04838E;
  box-shadow: 0 0 50px 0 #000
  &__logo
    width: 382px
  &__content
    color: #fff
  &__linear
    background: linear-gradient(
      to bottom,
      #000 0%,
      #00000000 25%,
      #00000000 82%,
      #000 94%
    )
    opacity: 77%
</style>
