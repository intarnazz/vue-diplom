<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import vkIcon from '@/assets/icons/link/VK.svg' // Добавлено: иконка VK
</script>

<template>
  <footer class="bg-black text-white p4">
    <LayoutWrapper>
      <div class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h3 class="text-lg font-semibold mb-4">Компания</h3>
          <ul class="space-y-2">
            <li><RouterLink to="/" class="hover:underline">Главная</RouterLink></li>
            <li><RouterLink :to="{ name: 'about-us' }" class="hover:underline">О нас</RouterLink></li>
            <li><RouterLink :to="{ name: 'contact-us' }" class="hover:underline">Наши офисы</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Техническая документация</h3>
          <ul class="space-y-2">
            <li><RouterLink :to="{ name: 'dock' }" class="hover:underline">Общая документация</RouterLink></li>
            <li><RouterLink :to="{ name: 'd.vf' }" class="hover:underline">Вентилируемые фасады</RouterLink></li>
            <li><RouterLink :to="{ name: 'd.tspvp' }" class="hover:underline">Сэндвич-панели (вата/пенопласт)</RouterLink></li>
            <li><RouterLink :to="{ name: 'd.sppss' }" class="hover:underline">Сборка СППС</RouterLink></li>
            <li><RouterLink :to="{ name: 'd.mps' }" class="hover:underline">Металлочерепица и сайдинг</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Услуги</h3>
          <ul class="space-y-2">
            <li><RouterLink :to="{ name: 'calculator' }" class="hover:underline">Калькулятор</RouterLink></li>
            <li><RouterLink :to="{ name: 'portfolio' }" class="hover:underline">Портфолио</RouterLink></li>
            <li><RouterLink :to="{ name: 'message-me' }" class="hover:underline">Оставить сообщение</RouterLink></li>
          </ul>
        </div>

        <!-- Новый блок с контактами -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Контакты</h3>
          <ul class="space-y-2">
            <li>
              <a href="mailto:ksm@mail.ru" class="hover:underline">ksm@mail.ru</a>
            </li>
            <li>
              <a href="tel:+79116137127" class="hover:underline">+7 911 613 71 27</a>
            </li>
            <li class="flex items-center space-x-2">
              <img :src="vkIcon" alt="ВК" class="w-4 h-4" />
              <a href="https://vk.com/ksm" target="_blank" class="hover:underline">Группа ВКонтакте</a>
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
