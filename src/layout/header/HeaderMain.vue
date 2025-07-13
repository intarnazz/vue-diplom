<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import ComponentLogo from '@/components/ComponentLogo.vue'
import { RouterLink, useRoute } from 'vue-router'

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
    <div class="flex justify-end px-6 py-4 space-x-4">
      <RouterLink
        v-if="route.name !== 'home'"
        :to="{ name: 'home' }"
        class="inline-flex items-center bg-white bg-opacity-90 rounded-xl shadow-lg px-6 py-4 space-x-6 pointer-events-auto"
      >
        <ComponentLogo />
      </RouterLink>

      <div class="flex"></div>
      <!-- Левый контейнер: "О компании" + "Message me" -->
      <nav
        class="inline-flex items-center bg-white bg-opacity-90 rounded-xl shadow-lg px-6 py-4 space-x-6 pointer-events-auto"
      >
        <RouterLink :to="{ name: 'message-me' }" class="hover:underline text-black">
          Message me
        </RouterLink>

        <!-- Dropdown "О компании" -->
        <Menu as="div" class="relative">
          <MenuButton class="flex items-center space-x-1 hover:underline text-black">
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
            enter="transition duration-100 ease-out"
            enter-from="transform scale-95 opacity-0"
            enter-to="transform scale-100 opacity-100"
            leave="transition duration-75 ease-in"
            leave-from="transform scale-100 opacity-100"
            leave-to="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute left-0 mt-8 w-56 origin-top-left rounded-xl bg-white text-black shadow-lg ring-1 ring-black/5 p-2 space-y-1 z-50 pointer-events-auto"
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
            </MenuItems>
          </Transition>
        </Menu>
      </nav>

      <!-- Правый контейнер: Log in / Sign up -->
      <div
        class="inline-flex items-center bg-white bg-opacity-90 rounded-xl shadow-lg px-6 py-4 space-x-4 pointer-events-auto"
      >
        <RouterLink :to="{ name: 'login' }" class="text-black hover:underline"> Log in </RouterLink>
        <RouterLink
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
