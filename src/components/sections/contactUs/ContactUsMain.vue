<script setup>
import { ref } from 'vue'
import phone from '@/assets/icons/link/phone.svg'
import mail from '@/assets/icons/link/mail.svg'
import vk from '@/assets/icons/link/VK.svg'
// import telegram from '@/assets/icons/link/Telegram.svg'
// import instagram from '@/assets/icons/link/Instagram.svg'

const licks = ref([
  {
    img: mail,
    name: 'Почта',
    text: 'ksm@mail.ru',
    href: 'mailto:ksm@mail.ru',
  },
  {
    img: vk,
    name: 'Группа в ВК',
    text: 'КСМ',
    href: 'https://vk.com/ksm',
  },
  {
    img: phone,
    name: 'Телефон',
    text: '+7 911 613 71 27',
    href: 'tel:+79116137127',
  },
  // {
  //   img: whatsapp,
  //   name: 'whatsapp',
  //   text: 'напишите нам в WhatsApp',
  //   href: 'https://wa.me/79007892244',
  // },
  // {
  //   img: instagram,
  //   name: 'Instagram',
  //   text: '@NotNot',
  //   href: 'http://localhost:5173/contact-us'
  // }
])
</script>

<template>
  <section class="contact box-x">
    <aside class="box-y contact__wrapper flex">
      <div class=""></div>
      <h2>Наши <span style="color: #04838e">контакты</span></h2>
      <ul class="box-y">
        <li v-for="(lick, key) in licks" :key="key">
          <a class="box-x contact__item" :href="lick.href" target="_blank">
            <img v-if="lick.img" :src="lick.img" :alt="lick.name" />
            <div class="box-y gap">
              <h3>{{ lick.name }}</h3>
              <p>{{ lick.text }}</p>
            </div>
          </a>
        </li>
      </ul>
    </aside>
    <iframe
      class="map shadow-xl/30"
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A2ae3f67321f7550843ef568969a6ce60d52a488b98d9b237c5488d763513bfde&amp;source=constructor"
      frameborder="0"
    ></iframe>
  </section>
</template>

<style lang="sass" scoped>
.map
  width: 100%
  height: calc( 100dvh - $header )
.contact
  white-space: nowrap
  overflow: hidden
  width: 100%
  align-items: flex-start
  & ul
    gap: 1rem
  &__item
    justify-content: flex-start
    gap: 2rem
    font-size: 1rem
    transition: .2s
    padding: 1rem
    border-radius: 10px
    outline: 3px solid #00000000
    margin-left: -1rem
    &:hover
      background-color: #e5f0ec
      outline: 3px solid #00774d
  &__wrapper
    justify-content: flex-start
    gap: 1.6rem
    padding: 0 4rem 1rem 2rem
    & img
      width: 32px
  &__box-decor
    position: absolute
    &_box
      z-index: 1
      background-color: #6DE1C2
      width: 365px
      height: 798px
      border-radius: 42px
      right: -140px
      top: 0px
    &_line
      z-index: 2
      right: 0
      top: 286px

@media screen and (max-width: 680px)
  .contact
    flex-direction: column
</style>
