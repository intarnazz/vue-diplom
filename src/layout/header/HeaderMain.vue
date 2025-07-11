<script setup>
// import SvgMenu from '@/components/svg/SvgMenu.vue'
// import ComponentLogo from '@/components/ComponentLogo.vue'
// import { User } from '@/storage/user.js'
// import { auth } from '@/api/api.js'
// import { RouterLink, useRoute, useRouter } from 'vue-router'
// import { onMounted, onUnmounted, ref, computed } from 'vue'

// const user = User()
// const menu = ref(false)
// const route = useRoute()

// const isTransparent = computed(() => {
//   return route.name === 'home'
// })

import { ref } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
// import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const menuItems = ref([
  'Share your files',
  'Protect your files',
  'Customize your page',
  'Give & get feedback',
  'Collaborate with your team',
  'Get paid for your work',
  'Distribute your content',
  'Get benefits & perks',
])
</script>

<template>
  <header
    class="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-black/70 to-black/30 text-white"
  >
    <div class="flex items-center space-x-6">
      <Menu as="div" class="relative">
        <MenuButton class="flex items-center space-x-1 hover:underline">
          <span>Features</span>
          <!-- <ChevronDownIcon class="w-4 h-4" /> -->
          <img src="" alt="ChevronDownIcon" />
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
            class="absolute left-0 mt-2 w-64 origin-top-left rounded-xl bg-white text-black shadow-lg ring-1 ring-black/5 p-2 space-y-1 z-50"
          >
            <MenuItem v-for="(item, index) in menuItems" :key="index" v-slot="{ active }">
              <button
                :class="['w-full text-left px-4 py-2 rounded-md', active ? 'bg-gray-100' : '']"
              >
                {{ item }}
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>

      <button class="hover:underline">Pricing</button>
      <button class="hover:underline">Use cases</button>
      <button class="hover:underline">Resources</button>
    </div>

    <div class="flex space-x-4">
      <button class="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-100">Log in</button>
      <button
        class="px-4 py-2 rounded-md bg-black text-white border border-white hover:bg-white hover:text-black"
      >
        Sign up
      </button>
    </div>
  </header>
</template>

<style lang="sass" scoped></style>
