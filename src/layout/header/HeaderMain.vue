<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import ComponentLogo from '@/components/ComponentLogo.vue'
import { RouterLink, useRoute } from 'vue-router'
import { auth } from '@/api/api.js'
import { User } from '@/storage/user.js'

const user = User()
const route = useRoute()

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
  <header class="sticky top-0 w-full z-50 pointer-events-none">
    <div class="flex justify-end px-6 py-4 gap-4">
      <RouterLink
        v-if="route.name !== 'home'"
        :to="{ name: 'home' }"
        class="inline-flex items-center rounded-xl bg-white/90 shadow-lg px-6 py-4 gap-6 pointer-events-auto"
      >
        <ComponentLogo />
      </RouterLink>

      <div class="flex"></div>

      <!-- Левый контейнер: "О компании" + "Message me" -->
      <nav
        class="inline-flex items-center rounded-xl bg-white/90 shadow-lg px-6 py-4 gap-6 pointer-events-auto"
      >
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

        <!-- Dropdown "О компании" -->
        <Menu as="div" class="relative">
          <MenuButton class="flex items-center gap-1 text-black hover:underline">
            <span>О компании</span>
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
                  :to="{ name: 'about-us' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  О нас
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="{ name: 'contact-us' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  Контакты
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="{ name: 'calculator' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  Калькулятор
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="{ name: 'portfolio' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  Портфолио
                </RouterLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <RouterLink
                  :to="{ name: 'dock' }"
                  :class="[
                    'block w-full text-left px-4 py-2 rounded-md',
                    active ? 'bg-gray-100' : '',
                  ]"
                >
                  Техническая документация
                </RouterLink>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </nav>

      <!-- Правый контейнер: Log in / Sign up -->
      <div
        class="inline-flex items-center rounded-xl bg-white/90 shadow-lg px-6 py-4 gap-4 pointer-events-auto"
      >
        <RouterLink
          v-if="user.get.value"
          :to="{ name: 'profile' }"
          class="text-black hover:underline"
        >
          мой профиль
        </RouterLink>
        <RouterLink v-else :to="{ name: 'login' }" class="text-black hover:underline">
          Log in
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
          Sign up
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>
header
  margin-bottom: -$header
</style>
