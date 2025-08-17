<script setup>
import { onMounted, ref } from 'vue'
import { contact as c } from '@/api/api.js'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
// import vkIcon from '@/assets/icons/link/VK.svg'
import telegram from '@/assets/icons/link/Telegram.svg'
import whatsapp from '@/assets/icons/link/whatsapp.svg'

const isLoding = ref(true)
const links = ref(true)

async function init() {
  isLoding.value = true
  const res = await c.all()
  if (!res.success) return

  links.value = res.data
  isLoding.value = false
}

onMounted(async () => {
  await init()
})
</script>

<template>
  <footer class="bg-black p text-white p4">
    <LayoutWrapper>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div class="flex box-y top-y">
          <h3 class="text-lg font-semibold mb-4">Компания</h3>
          <ul class="space-y-2">
            <li><RouterLink to="/" class="hover:underline">Главная</RouterLink></li>
            <li>
              <RouterLink :to="{ name: 'about-us' }" class="hover:underline">О нас</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'contact-us' }" class="hover:underline"
                >Наши офисы</RouterLink
              >
            </li>
          </ul>
        </div>

        <div class="flex box-y top-y">
          <h3 class="text-lg font-semibold mb-4">Техническая документация</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink :to="{ name: 'dock' }" class="hover:underline"
                >Общая документация</RouterLink
              >
            </li>
            <li>
              <RouterLink :to="{ name: 'd.vf' }" class="hover:underline"
                >Вентилируемые фасады</RouterLink
              >
            </li>
            <li>
              <RouterLink :to="{ name: 'd.tspvp' }" class="hover:underline"
                >Сэндвич-панели (вата/пенопласт)</RouterLink
              >
            </li>
            <li>
              <RouterLink :to="{ name: 'd.sppss' }" class="hover:underline">Сборка СППС</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'd.mps' }" class="hover:underline"
                >Металлочерепица и сайдинг</RouterLink
              >
            </li>
          </ul>
        </div>

        <div class="flex box-y top-y">
          <h3 class="text-lg font-semibold mb-4">Услуги</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink :to="{ name: 'calculator' }" class="hover:underline"
                >Калькулятор</RouterLink
              >
            </li>
            <li>
              <RouterLink :to="{ name: 'portfolio' }" class="hover:underline">Портфолио</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'message-me' }" class="hover:underline"
                >Оставить сообщение</RouterLink
              >
            </li>
          </ul>
        </div>

        <!-- Новый блок с контактами -->
        <div class="flex box-y top-y">
          <h3 class="text-lg font-semibold mb-4">Контакты</h3>
          <ul v-if="!isLoding" class="space-y-2">
            <li>
              <a :href="`mailto:${links.mail_snab.link}`" class="hover:underline">{{
                links.mail_snab.description
              }}</a>
            </li>
            <li>
              <a :href="`mailto:${links.mail_sale.link}`" class="hover:underline">{{
                links.mail_sale.description
              }}</a>
            </li>
            <li>
              <a :href="`tel:${links.phone_sale.link}`" class="hover:underline">{{
                links.phone_sale.description
              }}</a>
            </li>
            <li>
              <a :href="`tel:${links.phone_snab.link}`" class="hover:underline">{{
                links.phone_snab.description
              }}</a>
            </li>
            <li class="flex items-center space-x-2">
              <img :src="telegram" alt="telegram" class="w-4 h-4" />
              <a :href="links.telegram.link" target="_blank" class="hover:underline">{{
                links.telegram.description
              }}</a>
            </li>
            <li class="flex items-center space-x-2">
              <img :src="whatsapp" alt="whatsapp" class="w-4 h-4" />
              <a :href="links.whatsapp.link" target="_blank" class="hover:underline">{{
                links.whatsapp.description
              }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center mt-10 text-xs text-gray-400">
        &copy; {{ new Date().getFullYear() }} ООО "КСМ". Все права защищены.
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
  padding: 4rem 0
  display: flex
  justify-content: center
  align-items: center
  &__grid
    display: grid
    grid-template-columns: 1fr 1fr 1fr 1fr
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
