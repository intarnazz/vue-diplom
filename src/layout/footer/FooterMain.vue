<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import { ref } from 'vue'
import phone from '@/assets/icons/link/phone.svg'
import mail from '@/assets/icons/link/mail.svg'
import vk from '@/assets/icons/link/VK.svg'
import whatsapp from '@/assets/icons/link/whatsapp.svg'

const licks = ref([
  {
    img: phone,
    name: 'Телефон',
    text: '+7 (962) 085-82-34',
    href: 'tel:+79620858234'
  },
  {
    img: mail,
    name: 'Почта',
    text: 'sk-mihalych@mail.ru',
    href: 'mailto:sk-mihalych@mail.ru'
  },
  {
    img: vk,
    name: 'Группа в ВК',
    text: 'Двери и окна в г. Александров',
    href: 'https://vk.com/dveri_aleksandrov'
  },
  {
    img: whatsapp,
    name: 'whatsapp',
    text: 'напишите нам в WhatsApp',
    href: 'https://wa.me/79620858234'
  }
  // {
  //   img: instagram,
  //   name: 'Instagram',
  //   text: '@NotNot',
  //   href: 'http://localhost:5173/contact-us'
  // }
])
</script>

<template>
  <footer class="footer box-shadow">
    <LayoutWrapper class="box-x footer__wrapper gap2">
      <div class="flex">
      </div>
      <nav class="box-x">
        <!-- <RouterLink :to="{ name: 'catalog' }">Каталог</RouterLink>
        <RouterLink :to="{ name: 'contact' }">Контакты</RouterLink> -->
      </nav>
      <div class="box-x footer__web-wrapper flex">
        <ul class="box-y gap">
          <li v-for="(lick, key) in licks" :key="key">
            <a class="box-x gap contact__item" :href="lick.href" target="_blank">
              <div class="box-x gap">
                <p>{{ lick.name }}</p>
                <p>{{ lick.text }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </LayoutWrapper>
  </footer>
</template>

<style lang="sass" scoped>
a
  color: $footerColor
  text-decoration: underline
.contact
  &__item
    & img
      width: 25px
      height: 25px

.footer
  font-size: .9rem
  background-color: #2f2f2f
  color: $footerColor
  margin-top: 2rem
  padding: 4rem 0
  display: flex
  justify-content: center
  align-items: center
  &__wrapper
    align-items: flex-start
  & nav
    gap: 1em
  &__web-wrapper
    justify-content: flex-end
    gap: 1em
  & img
    font-family: Source-Serif-4
    font-weight: 500
    font-size: 2.3em
@media screen and (max-width: 1070px)
  .footer
    &__wrapper
      flex-direction: column
</style>
