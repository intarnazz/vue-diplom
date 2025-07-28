<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import ComponentLogo from '@/components/ComponentLogo.vue'
import { RouterLink } from 'vue-router'
import { auth } from '@/api/api.js'
import { User } from '@/storage/user.js'

const user = User()

// const menuItems = ref([
//   'Share your files',
//   'Protect your files',
//   'Customize your page',
//   'Give & get feedback',
//   'Collaborate with your team',
//   'Get paid for your work',
//   'Distribute your content',
//   'Get benefits & perks',
// ])
</script>
<template>
  <header class="sticky bg-white top-0 w z-50 box-x shadow-xl">
    <div class="box-x w gap px-[1rem]">
      <RouterLink :to="{ name: 'home' }" class="media-1290 open pointer-events-auto">
        <ComponentLogo />
      </RouterLink>

      <div class="flex"></div>

      <nav class="box-x gap2">
        <Menu v-if="user.get.value" as="div" class="relative">
          <MenuButton class="flex items-center gap-1 text-black hover:underline">
            <span>Напишите нам</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M5.172 8 8 10.828 10.83 8"
              ></path>
            </svg>
          </MenuButton>
          <Transition
            enter="transition ease-out duration-100"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <MenuItems
              class="absolute left-0 mt-8 w-56 origin-top-left rounded-xl bg-white text-black shadow-lg ring-1 ring-black/5 p-2 flex flex-col gap-1 z-50 pointer-events-auto"
            >
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="{ name: 'chat' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  Чат с админом
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="{ name: 'message-me' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  Написать как гость
                </RouterLink>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
        <RouterLink v-else :to="{ name: 'message-me' }" class="text-black hover:underline">
          Напишите нам
        </RouterLink>

        <!-- Простые ссылки "О компании" -->
        <RouterLink :to="{ name: 'about-us' }" class="text-black hover:underline">
          О нас
        </RouterLink>
        <RouterLink :to="{ name: 'contact-us' }" class="text-black hover:underline">
          Контакты
        </RouterLink>
        <RouterLink :to="{ name: 'calculator' }" class="text-black hover:underline">
          Калькулятор
        </RouterLink>
        <RouterLink :to="{ name: 'portfolio' }" class="text-black hover:underline">
          Портфолио
        </RouterLink>
        <!-- Меню "Техническая документация" -->
        <Menu as="div" class="relative">
          <MenuButton class="flex items-center gap-1 text-black hover:underline">
            <span>Документация</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M5.172 8 8 10.828 10.83 8"
              ></path>
            </svg>
          </MenuButton>
          <Transition
            enter="transition ease-out duration-100"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 mt-8 w-[300px] origin-top-right rounded-xl bg-white text-black shadow-lg ring-1 ring-black/5 p-2 flex flex-col gap-1 z-50 pointer-events-auto"
            >
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="{ name: 'dock' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  Вся документация
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="{ name: 'd.vf' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  Вентилируемые фасады
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="{ name: 'd.tspvp' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  Трехслойные сэндвич-панели
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="{ name: 'd.sppss' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  Сэндвич-панели поэлементной сборки (СППС)
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="{ name: 'd.mps' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  Металлочерепица, профлист, металлический сайдинг
                </RouterLink>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </nav>
      |
      <!-- Правый контейнер: Log in / Sign up -->
      <div class="box-x gap">
        <RouterLink
          v-if="user.get.value"
          :to="{ name: 'profile' }"
          class="text-black hover:underline"
        >
          мой профиль
        </RouterLink>
        <RouterLink v-else :to="{ name: 'login' }" class="text-black hover:underline">
          Войти
        </RouterLink>
        <button
          v-if="user.get.value"
          @click="auth.logout"
          class="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
        >
          Выйти
        </button>
        <RouterLink
          v-else
          :to="{ name: 'reg' }"
          class="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
        >
          Регистрация
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>
header
  height: $header
  margin-bottom: -$header
</style>
