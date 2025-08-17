<script setup>
import { onMounted, ref } from 'vue'
import { contact as c } from '@/api/api.js'
import phone from '@/assets/icons/link/phone.svg'
import mail from '@/assets/icons/link/mail.svg'
// import vk from '@/assets/icons/link/VK.svg'
import telegram from '@/assets/icons/link/Telegram.svg'
import whatsapp from '@/assets/icons/link/whatsapp.svg'

const isLoding = ref(true)
const links = ref(true)

async function init() {
  isLoding.value = true
  const res = await c.all()
  if (!res.success) return

  links.value = [
    {
      img: mail,
      name: 'Почта отдела закупок',
      text: res.data.mail_sale.description,
      href: `mailto:${res.data.mail_sale.link}`,
    },
    {
      img: mail,
      name: 'Почта отдела продаж',
      text: res.data.mail_snab.description,
      href: `mailto:${res.data.mail_snab.link}`,
    },
    {
      img: telegram,
      name: 'Telegram',
      text: res.data.telegram.description,
      href: `${res.data.telegram.link}`,
    },
    {
      img: whatsapp,
      name: 'WhatsApp',
      text: res.data.whatsapp.description,
      href: `${res.data.whatsapp.link}`,
    },
    {
      img: phone,
      name: 'Отдел прожаж',
      text: res.data.phone_sale.description,
      href: `tel:${res.data.phone_sale.link}`,
    },
    {
      img: phone,
      name: 'Отдел закупок',
      text: res.data.phone_snab.description,
      href: `tel:${res.data.phone_snab.link}`,
    },
  ]
  isLoding.value = false
}

onMounted(async () => {
  await init()
})
</script>

<template>
  <section class="contact box-x flex as">
    <aside class="box-y gap contact__wrapper">
      <h2 class="px-[1rem]">Наши <span style="color: #04838e">контакты</span></h2>
      <p class="px-[1rem]">
        Санкт-Петербург, <br />
        проспект Юрия Гагарина, 1
      </p>
      <ul class="box-y">
        <li
          class="hover:bg-[#00000011] py-[.5rem] px-[1rem]"
          v-for="(lick, key) in links"
          :key="key"
        >
          <a class="box-x contact__item" :href="lick.href" target="_blank">
            <img v-if="lick.img" :src="lick.img" :alt="lick.name" />
            <div class="box-y gap">
              <h3>{{ lick.name }}</h3>
              <p>{{ lick.text }}</p>
            </div>
          </a>
        </li>
      </ul>
      <div class="flex"></div>
    </aside>
    <iframe
      class="flex shadow-xl/30"
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A2ae3f67321f7550843ef568969a6ce60d52a488b98d9b237c5488d763513bfde&amp;source=constructor&z=17"
      frameborder="0"
    ></iframe>
  </section>
</template>

<style lang="sass" scoped>
h4
  font-size: 1.5rem
  font-weight: 400
.map
  width: 100%
  height: calc( 100dvh - $header )
.contact
  &__item
    justify-content: flex-start
    gap: 2rem
    transition: .1s
    // margin-left: -1rem
    +w
    & img
      width: 32px

@media screen and (max-width: 680px)
  .contact
    flex-direction: column
</style>
