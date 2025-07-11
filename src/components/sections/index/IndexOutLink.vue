<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
</script>

<template>
  <section class="out-link wh">
    <LayoutWrapper class="box-y gap2">
      <div class="box-x gap2">
        <div class="box-y flex gap">
          <h2 class="a">
            <RouterLink to="/portfolio">Наши проекты</RouterLink>
          </h2>
          <p>
            Посмотрите фасады, которые мы реализовали в разных регионах: от жилых домов до
            промышленных комплексов. Качественный монтаж, индивидуальные решения и соблюдение
            сроков.
          </p>
        </div>
        <div class="box-y flex gap">
          <h2 class="a">
            <RouterLink to="/technical-documentation">Техническая документация</RouterLink>
          </h2>
          <p>
            Здесь вы найдёте технические паспорта, схемы раскладки, инструкции по монтажу и другие
            документы, необходимые для проектирования и согласований.
          </p>
        </div>
      </div>
      <img
        class="img"
        src="@/assets/img/steve-dimatteo-gObie1HkQV4-unsplash.webp"
        alt="Фасадный объект"
      />
      <div class="box-y flex gap">
        <h2 class="a">
          <RouterLink to="/contact-us">Связаться с нами</RouterLink>
        </h2>
        <p>
          Остались вопросы? Напишите нам, и менеджер свяжется с вами в течение рабочего дня. Обсудим
          проект, материалы, сроки и предложим решение под ваш бюджет.
        </p>
      </div>
    </LayoutWrapper>
  </section>
</template>

<style scoped lang="sass">
.out-link
  background-image: url('@/assets/img/out-link-bg-textur.webp')
  background-repeat: repeat
  background-size: auto
  background-color: #ffffff
  position: relative
  padding: 5rem 0
  &::before
    content: ''
    position: absolute
    inset: 0
    background-image: url('@/assets/img/out-link-bg-textur.webp')
    background-repeat: repeat
    opacity: 0.5
    pointer-events: none
    z-index: -1
</style>
