<script setup>
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
</script>

<template>
  <section class="mission-values w-full box-y gap2">
    <div class="py-20 bg-white">
      <LayoutWrapper>
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold text-[#202040] mb-6">Наша миссия</h2>
            <p class="text-gray-700 leading-relaxed text-base">
              Мы стремимся формировать современную и надёжную архитектурную среду, используя
              передовые технологии и индивидуальный подход. Наша цель — создавать фасадные решения,
              которые сочетают в себе эстетику, функциональность и долговечность.
            </p>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-[#202040] mb-6">Наши ценности</h2>
            <ul class="space-y-4 text-gray-700 text-base">
              <li><strong>• Качество:</strong> Без компромиссов — от сырья до монтажа.</li>
              <li>
                <strong>• Надёжность:</strong> Честные сроки, прозрачные договоры, чёткие гарантии.
              </li>
              <li>
                <strong>• Инновации:</strong> Используем современные материалы, технологии и
                цифровые инструменты.
              </li>
              <li><strong>• Командность:</strong> Доверие и уважение — основа нашей культуры.</li>
            </ul>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  </section>
</template>

<style lang="sass" scoped></style>
