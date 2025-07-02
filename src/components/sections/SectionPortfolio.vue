<script setup>
import { onMounted, ref } from 'vue'
import { portfolio as p } from '@/api/api.js'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import ComponentImg from '@/components/ComponentImg.vue'

const props = defineProps(['id'])
const isLoding = ref(true)
const portfolio = ref(null)

async function init() {
  isLoding.value = true
  const res = await p.get(props.id)
  if (res.success) portfolio.value = res.data
  isLoding.value = false
}

onMounted(async () => {
  await init()
})
</script>

<template>
  <section class="portfolio">
    <LayoutWrapper v-if="!isLoding">
      <div class="box-x top gap2">
        <div class="h flex9">
          <ComponentImg class="img" :id="portfolio.image_id" />
        </div>
        <div class="flex16 box-x">
          <div class="flex"></div>
          <div class="box-x gap">
            <div class="box-y gap">
              <div class="box-x top gap">
                <h3>Название</h3>
                <p class="flex">{{ portfolio.title }}</p>
              </div>
              <div class="box-x gap top">
                <h3>Описание</h3>
                <p>{{ portfolio.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  </section>
</template>

<style lang="sass" scoped></style>
