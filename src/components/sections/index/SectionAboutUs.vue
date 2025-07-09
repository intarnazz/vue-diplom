<script setup></script>

<template>
  <section class="about-us w cf">
    <div class="box-x about-us__item pr w">
      <div class="flex pr h">
        <img class="img pa" src="@/assets/img/about-us image.png" alt="about-us image" />
      </div>
      <div class="flex pr h">
        <img class="img pa" src="@/assets/img/about-us bg.png" alt="about-us bg" />
        <div class="box-y pr about-us__item-info gap">
          <h2>LIFE-CHANGING MOMENTS</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere ipsum magna, sed
            consectetur dui condimentum id. Donec eget vehicula elit. Aenean id orci eu lorem
          </p>
        </div>
      </div>
    </div>
    <div class="box-x about-us__item pr w left">
      <div class="flex pr h">
        <img class="img pa" src="@/assets/img/about-us image.png" alt="about-us image" />
      </div>
      <div class="flex pr h">
        <img class="img pa" src="@/assets/img/about-us bg.png" alt="about-us bg" />
        <div class="box-y pr about-us__item-info gap">
          <h2>LIFE-CHANGING MOMENTS</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere ipsum magna, sed
            consectetur dui condimentum id. Donec eget vehicula elit. Aenean id orci eu lorem
          </p>
        </div>
      </div>
    </div>
    <div class="box-x about-us__item pr w">
      <div class="flex pr h">
        <img class="img pa" src="@/assets/img/about-us image.png" alt="about-us image" />
      </div>
      <div class="flex pr h">
        <img class="img pa" src="@/assets/img/about-us bg.png" alt="about-us bg" />
        <div class="box-y pr about-us__item-info gap">
          <h2>LIFE-CHANGING MOMENTS</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere ipsum magna, sed
            consectetur dui condimentum id. Donec eget vehicula elit. Aenean id orci eu lorem
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.left
  & .about-us
    &__item-info
      align-items: flex-end
      text-align: end
.about-us
  border-bottom: 13px solid #04838E
  &__item-info
    align-items: flex-start
    justify-content: flex-end
    padding: 2.0625rem 1.375rem
    & h2,
    p
      max-width: 558px
  &__item
    min-height: 301px
    height: 301px
    box-shadow: 0 0 50px 0 #000
    &.left
      flex-direction: row-reverse
  & hr
    border-bottom: 10px solid #E6CE30
    width: 235px
</style>
