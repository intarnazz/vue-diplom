<script setup></script>

<template>
  <section class="about-us w cf">
    <div class="box-x media about-us__item pr w">
      <div class="flex pr h">
        <img
          class="img img__top pa"
          src="@/assets/img/krakenimages-376KN_ISplE-unsplash.webp"
          alt="Производство фасадов"
        />
      </div>
      <div class="flex pr h">
        <img class="img pa" src="@/assets/img/about-us bg.webp" alt="Фон" />
        <div class="box-y pr about-us__item-info gap">
          <h2>Надёжность с 2010 года</h2>
          <hr />
          <p>
            Мы предлагаем комплексные решения для фасадов — от концепции до монтажа. Работаем по
            всей России, оснащены современным производственным оборудованием, и гарантируем контроль
            качества на каждом этапе.
          </p>
        </div>
      </div>
    </div>

    <div class="box-x media about-us__item pr w left">
      <div class="flex pr h">
        <img
          class="img pa"
          src="@/assets/img/nwar-igbariah-AteFNIFVGdo-unsplash.webp"
          alt="Команда монтажников"
        />
      </div>
      <div class="flex pr h">
        <img class="img pa" src="@/assets/img/about-us bg.webp" alt="Фон" />
        <div class="box-y pr about-us__item-info gap">
          <h2>Проектирование и монтаж</h2>
          <hr />
          <p>
            Мы разрабатываем рабочие проекты, подготавливаем спецификации и осуществляем монтаж
            фасадных систем. Опытные инженеры и сертифицированные бригады обеспечивают точность и
            надёжность.
          </p>
        </div>
      </div>
    </div>

    <div class="box-x media about-us__item pr w">
      <div class="flex pr h">
        <img
          class="img pa"
          src="@/assets/img/ant-rozetsky-SLIFI67jv5k-unsplash.webp"
          alt="Фасадные материалы"
        />
      </div>
      <div class="flex pr h">
        <img class="img pa" src="@/assets/img/about-us bg.webp" alt="Фон" />
        <div class="box-y pr about-us__item-info gap">
          <h2>Собственное производство</h2>
          <hr />
          <p>
            Мы используем современное оборудование (обновлено в 2022 году) для изготовления фасадных
            конструкций. Это позволяет нам контролировать сроки, снижать издержки и гарантировать
            высокое качество.
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
