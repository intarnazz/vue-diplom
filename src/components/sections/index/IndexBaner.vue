<script setup>
// import { RouterLink } from 'vue-router'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ComponentTitle from '@/components/ComponentTitle.vue'
</script>

<template>
  <section class="baner wh pr">
    <img class="img slide pa" src="@/assets/img/_Fjord_Plaza_.jpg 1.webp" alt="_Fjord_Plaza_" />
    <img class="img slide pa" src="@/assets/img/IMG_206.jpg.webp" alt="_Fjord_Plaza_" />
    <img class="img slide pa" src="@/assets/img/IMG_9879.jpg 3.webp" alt="IMG_9879.jpg 3" />
    <div class="baner__linear pa wh"></div>
    <div class="baner__content pa wh z-99">
      <LayoutWrapper class="wh">
        <div class="wh baner__wrapper pt-[10rem] pb-[2rem] box-y top">
          <div class="box-y gap down">
            <ComponentTitle :text="`Комплексные Системы Монтажа фасадов с гарантией качества`" />
            <h3 class="mr-[-7px] bg-white text-black m0">
              Производство, проектирование и монтаж фасадных систем
            </h3>
          </div>
          <div class="flex wh box-y">
            <div class="flex wh"></div>
            <div class="box-x media gap2">
              <div class="box-y">
                <h3 class="rotate-[-2.01deg]">
                  Экономия до 30% за счёт оптимизации проектных решений
                </h3>
                <p class="rotate-[-2.01deg]">
                  Собственное производство. Современное оборудование. Гарантированное качество.
                </p>
              </div>
              <RouterLink :to="{ name: 'message-me' }" class="button">
                ОТПРАВИТЬ ЗАЯВКУ
              </RouterLink>
            </div>
          </div>
        </div>
      </LayoutWrapper>
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
  height: 100dvh
  max-height: 100dvh
  border-bottom: 13px solid #04838E;
  box-shadow: 0 0 50px 0 #000
  &__logo
    width: 382px
  &__content
    color: #fff
  &__linear
    background-color: #000
    opacity: 77%

@media screen and (max-width: 480px)
  .baner
    &__wrapper
      padding: 6rem 1rem 1rem

</style>
