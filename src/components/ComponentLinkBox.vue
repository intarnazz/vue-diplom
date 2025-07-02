<script setup>
import { RouterLink } from 'vue-router'
import left from '@/assets/icons/arrow_left.svg'
import right from '@/assets/icons/arrow_right.svg'
const props = defineProps(['link', 'title', 'subTitle', 'text', 'img', 'arrow'])
</script>

<template>
  <RouterLink class="link-box wh pr" :to="{ name: props.link }">
    <img class="img pa" :src="props.img" alt="bg" />
    <div
      class="link-box__wrapper box-x wh"
      :style="`flex-direction:${props.arrow === 'left' ? 'row-reverse' : 'row'};`"
    >
      <div
        class="link-box__content box-x as flex"
        :style="`flex-direction:${props.arrow === 'left' ? 'row-reverse' : 'row'};`"
      >
        <div class="box-y gap2 center p5">
          <h2>{{ props.title }}</h2>
          <p>
            {{ props.text }}
          </p>
          <h3>{{ props.subTitle }}</h3>
        </div>
        <div class="box-y link-box__arrow-x">
          <div class="flex"></div>
          <img :src="props.arrow === 'left' ? left : right" alt="arrow_right" />
          <div class="flex"></div>
        </div>
      </div>
      <div class="flex"></div>
    </div>
  </RouterLink>
</template>

<style scoped lang="sass">
.link-box
  &__arrow-x
    border-right: 1px solid #fff
    border-left: 1px solid #fff
  &__content
    background-color: #000
    color: #fff
    opacity: 80%
</style>
