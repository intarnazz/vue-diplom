<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { auth } from '@/api/api.js'
import { User } from '@/storage/user.js'

const user = User()
const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <!-- Бургер и фон -->
  <div class="md:hidden">
    <!-- Кнопка -->
    <button
      @click="toggleMenu"
      class="fixed top-4 left-4 z-[110] bg-black text-white p-2 rounded-lg shadow-md"
    >
      <span class="block w-5 h-0.5 bg-white mb-1"></span>
      <span class="block w-5 h-0.5 bg-white mb-1"></span>
      <span class="block w-5 h-0.5 bg-white"></span>
    </button>

    <!-- Затемнение -->
    <div
      v-if="isOpen"
      @click="toggleMenu"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
      onwheel="event.preventDefault()"
      ontouchmove="event.preventDefault()"
      style="overflow: hidden"
    ></div>

    <!-- Меню -->
    <transition
      class="main"
      onwheel="event.preventDefault()"
      ontouchmove="event.preventDefault()"
      style="overflow: hidden"
      name="slide"
    >
      <nav
        v-if="isOpen"
        class="fixed top-0 left-0 h-full w-[260px] bg-[#fdfcf5] border-r-4 border-black shadow-[8px_0_0_0_black] z-[100] p-[1rem] pt-[4rem] flex flex-col gap"
        style="rotate: -0.4deg"
      >
        <!-- Заголовок -->
        <h2 class="font-bold tracking-wider uppercase">KSM</h2>

        <u1l class="space-y-4">
          <li><RouterLink @click="toggleMenu" :to="{ name: 'home' }">🏠 Главная</RouterLink></li>
          <li>
            <RouterLink @click="toggleMenu" :to="{ name: 'dock' }">📚 Документация</RouterLink>
          </li>
          <li>
            <RouterLink @click="toggleMenu" :to="{ name: 'message-me' }"
              >✉️ Написать как гость</RouterLink
            >
          </li>
          <li>
            <RouterLink @click="toggleMenu" :to="{ name: 'calculator' }">🧮 Калькулятор</RouterLink>
          </li>
          <li>
            <RouterLink @click="toggleMenu" :to="{ name: 'portfolio' }">🗂️ Портфолио</RouterLink>
          </li>
          <li>
            <RouterLink @click="toggleMenu" :to="{ name: 'contact-us' }">📞 Контакты</RouterLink>
          </li>
          <li><RouterLink @click="toggleMenu" :to="{ name: 'about-us' }">ℹ️ О нас</RouterLink></li>
          <template v-if="user.get.value">
            <li><RouterLink @click="toggleMenu" :to="{ name: 'chat' }">💬 Мой чат</RouterLink></li>
            <li>
              <RouterLink @click="toggleMenu" :to="{ name: 'profile' }">👤 Профиль</RouterLink>
            </li>
            <li><button @click="auth.logout">🔐 Выйти</button></li>
          </template>
          <template v-else>
            <li><RouterLink @click="toggleMenu" :to="{ name: 'login' }">🔐 Войти</RouterLink></li>
            <li>
              <RouterLink @click="toggleMenu" :to="{ name: 'reg' }">📝 Регистрация</RouterLink>
            </li>
          </template>
        </u1l>

        <div class="mt-auto text-[10px] text-zinc-400">KSM</div>
      </nav>
    </transition>
  </div>
</template>

<style lang="sass" scoped>

.main
  font-size: 1.5rem

.slide-enter-active,
.slide-leave-active
  transition: transform 0.15s ease-in-out

.slide-enter-from
  transform: translateX(-100%)

.slide-enter-to
  transform: translateX(0%)

.slide-leave-from
  transform: translateX(0%)

.slide-leave-to
  transform: translateX(-100%)
</style>
