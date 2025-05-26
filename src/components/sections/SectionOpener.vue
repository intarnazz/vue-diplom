<script setup></script>

<template>
  <section class="opener">
    <img src="@/assets/img/_Fjord_Plaza_.jpg 1.png" alt="_Fjord_Plaza_" />
    <div class="opener__linear"></div>
    <div class="opener__content box-y">
      <div class="flex"></div>
      <div class="box-x">
        <div class="flex"></div>
        <div class="">
          <h1>КСМ</h1>
          <h1>Комплексные решения для фасадов</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.opener
  position: relative
  background-color: #00f
  height: calc( 100dvh - $header )
  width: 100%
  position: relative
  &__content
    color: #fff
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    padding: 2rem 1rem
  &__linear
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: linear-gradient(#00000000, #000);
    opacity: 90%
  & img
    width: 100%
    height: 100%
    object-fit: cover
</style>
