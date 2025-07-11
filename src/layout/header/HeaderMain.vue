<script setup>
// import SvgMenu from '@/components/svg/SvgMenu.vue'
import ComponentLogo from '@/components/ComponentLogo.vue'
// import { User } from '@/storage/user.js'
// import { auth } from '@/api/api.js'
// import { RouterLink, useRoute, useRouter } from 'vue-router'
// import { onMounted, onUnmounted, ref, computed } from 'vue'

// const user = User()
// const menu = ref(false)
// const route = useRoute()

// const isTransparent = computed(() => {
//   return route.name === 'home'
// })
</script>

<template>
  <header class="box-x top header">
    <ComponentLogo />
    <nav class="header__nav box-x top">
      <div class="box-y header__nav-sub-menu-wrapper header__nav-sub-menu-wrapper_1">
        <button class="">О нас</button>
        <div class="box-y header__nav-sub-menu header__nav-sub-menu_1">
          <div class="box-x">О нас подробнее</div>
          <div class="box-x">О нас подробнее2</div>
        </div>
      </div>
      <div class="box-y header__nav-sub-menu-wrapper header__nav-sub-menu-wrapper_2">
        <button class="">О вас</button>
        <div class="box-y header__nav-sub-menu header__nav-sub-menu_2">
          <div class="box-x">О вас подробнее</div>
          <div class="box-x">О вас подробнее2</div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
.header
  padding: 1rem 2rem
  &__nav
    background-color: #fff
    box-shadow: 0 0 10px #000
    border-radius: 20px
    & > .header__nav-sub-menu-wrapper
      > button
        padding: 1rem 0rem 1rem 2rem
      .header__nav-sub-menu
        padding: 1rem 2rem
        display: none
        max-width: 0px
        max-height: 0px
        position: absolute
        cursor: pointer
        &:hover
          display: flex
      &:hover .header__nav-sub-menu
        display: flex
</style>
