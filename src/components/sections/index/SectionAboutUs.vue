<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ComponentLinkBox from '@/components/ComponentLinkBox.vue'
import img1 from '@/assets/img/serge-fedorov-YiZel7UYgsg-unsplash 2.png'
import img2 from '@/assets/img/bui-hoang-long-jBUQ7KOHXZ0-unsplash 1.png'
import img3 from '@/assets/img/iryna-tysiak-kRaH720CCRE-unsplash (1) 1.png'
</script>

<template>
  <section class="about-us wh">
    <LayoutWrapper class="about-us__wrapper box-y gap">
      <ComponentLinkBox
        :arrow="'right'"
        :img="img1"
        :link="'about-us'"
        :sub-title="'О нас →'"
        :text="'С 2010 года работаем в сфере проектирования, поставки и монтажа фасадных систем различного уровня сложности'"
        :title="'О компании'"
      />
      <ComponentLinkBox
        :arrow="'left'"
        :img="img2"
        :link="'portfolio'"
        :title="'Портфолио'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum nibh at elementum sodales.'"
        :sub-title="'Наши проекты → '"
      />
      <ComponentLinkBox
        :arrow="'right'"
        :img="img3"
        :link="'calculator'"
        :title="'calculator'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum nibh at elementum sodales.'"
        :sub-title="'Примерная стоимость проекта → '"
      />
    </LayoutWrapper>
  </section>
</template>

<style scoped lang="sass">
.link-box
  &__arrow-x
    +h
    border-right: 1px solid #fff
    border-left: 1px solid #fff
  &__content
    +h
    background-color: #000
    color: #fff
    opacity: 80%
</style>
