<script setup>
import FormMain from '@/layout/LayoutForm.vue'
import { ref, computed, onMounted } from 'vue'
import { service } from '@/api/api.js'

const coatings = ref(null)
const insulationOptions = ref(null)
const selectedCoating = ref(null)
const selectedInsulation = ref(null)
const area = ref(100)
const glazing = ref('no')
const price = ref(0)
const isLoding = ref(true)

async function init() {
  isLoding.value = true
  const res = await service.all()
  if (res.success) {
    coatings.value = res.data.coatings
    selectedCoating.value = coatings.value[0]
    insulationOptions.value = res.data.insulationOptions
    selectedInsulation.value = insulationOptions.value[0]
  }
  isLoding.value = false
}

onMounted(async () => {
  await init()
})

function submit() {
  let total = (selectedCoating.value.price + selectedInsulation.value.price) * area.value

  if (glazing.value === 'yes') {
    total *= 1.4 // скидка при остеклении
  }

  price.value = Math.round(total)
}

const formattedPrice = computed(() => price.value.toLocaleString('ru-RU'))
</script>

<template>
  <FormMain v-if="!isLoding" @submit="submit">
    <div class="box-y gap2 wh">
      <div class="box-y">
        <!-- Тип фасадного покрытия -->
        <div class="form__box">
          <select v-model="selectedCoating" class="" id="coating" name="coating">
            <option v-for="(coating, index) in coatings" :key="index" :value="coating">
              {{ coating.name }}
            </option>
          </select>
        </div>

        <!-- Площадь фасада -->
        <div class="form__box">
          <input
            v-model.number="area"
            class=""
            id="area"
            name="area"
            type="number"
            placeholder="ПЛОЩАДЬ ФАСАДА (м²)"
          />
        </div>

        <!-- Утеплитель -->
        <div class="form__box">
          <select v-model="selectedInsulation" class="" id="insulation" name="insulation">
            <option v-for="(insul, index) in insulationOptions" :key="index" :value="insul">
              {{ insul.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="gap box-y">
        <p>ОСТЕКЛЕНИЕ > 40%:</p>
        <div class="">
          <label>
            <input type="radio" name="glazing" value="yes" v-model="glazing" />
            Да
          </label>
          <label>
            <input type="radio" name="glazing" value="no" v-model="glazing" />
            Нет
          </label>
        </div>
      </div>

      <div class="box-y gap h">
        <div class="">
          <h3>{{ formattedPrice }} ₽</h3>
        </div>
        <p>* предварительная стоимость с учетом НДС. Стоимость указана за материалы + работы</p>
        <button type="submit" class="button">РАССЧИТАТЬ</button>
      </div>
    </div>
  </FormMain>
</template>

<style lang="sass" scoped></style>
