<script setup>
import { onMounted, ref } from 'vue'
import { auth } from '@/api/api.js'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'

const isLoding = ref(true)
const user = ref(true)

async function init() {
  isLoding.value = true
  const res = await auth.user()
  if (res.success) {
    user.value = res.data
    // to connect the privatechannel
  }
  isLoding.value = false
}

onMounted(async () => {
  // console.log('e')
  // // to connect the public channel
  // window.Echo.channel('public').listen('Hello', (e) => {
  //   console.log('go public')
  //   //code for displaying the serve data
  //   console.log(e) // the data from the server
  // })
  await init()
})
</script>

<template>
  <LayoutWrapper>
    <section v-if="!isLoding" class="user-info box-y gap2">
      <div class=""></div>
      <div class="box-x top">
        <h1>{{ user.name }}</h1>
        <div class="box-y">
          <div class="box-x gap">
            <div class="box-y gap">
              <h3 class="box-x">Компания</h3>
              <h3 class="box-x">Почта</h3>
              <h3 class="box-x">Телефон</h3>
            </div>
            <div class="box-y gap">
              <h3 class="box-x">{{ user.company }}</h3>
              <h3 class="box-x">{{ user.email }}</h3>
              <h3 class="box-x">{{ user.phone }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class=""></div>
    </section>
  </LayoutWrapper>
</template>

<style lang="sass" scoped>
.user-info
  border-bottom: 1px solid $th
</style>
