<script setup>
import ComponentOpener from '@/layout/LayoutOpener.vue'
import FormMain from '@/layout/form/FormMain.vue'
import { ref } from 'vue'
import { auth } from '@/api/api.js'

const email = ref('')
const password = ref('')

async function submit() {
  const res = await auth.login({
    email: email.value,
    password: password.value,
  })
  console.log(res)
}
</script>

<template>
  <ComponentOpener>
    <section class="reg wh box-x">
      <div class="wh">
        <img class="img" src="@/assets/img/reg-bg.jpg" alt="reg-bg" />
      </div>
      <div class="reg__wrapper wh box-y gap p5">
        <h2>Авторизация</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores voluptatem
          expedita! Provident odio possimus unde labore hic nisi optio nesciunt alias! Est accusamus
          quaerat soluta consectetur aperiam fugiat laboriosam.
        </p>
        <div class="box-x">
          <FormMain @submit="submit">
            <div class="box-x flex wh">
              <div class="box-y flex">
                <div class="form__box">
                  <input
                    v-model="email"
                    class="flex"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email..."
                  />
                </div>
                <div class="form__box">
                  <input
                    v-model="password"
                    class="flex"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password..."
                  />
                </div>
              </div>
              <div class="box-y h">
                <div class="flex"></div>
                <button type="submit" class="button">ВОЙТИ</button>
              </div>
            </div>
          </FormMain>
          <div class="flex"></div>
        </div>
        <div class="flex"></div>
      </div>
    </section>
  </ComponentOpener>
</template>

<style lang="sass" scoped>
.reg
  & > div
    &:first-child
      flex: 9
    &:last-child
      flex: 16
</style>
