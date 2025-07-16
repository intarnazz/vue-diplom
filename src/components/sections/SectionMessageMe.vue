<script setup>
import FormGuestQuery from '@/components/form/FormGuestQuery.vue'
import LayoutOpener from '@/layout/LayoutOpener.vue'
</script>

<template>
  <section>
    <LayoutOpener class="login box-x as">
      <div class="box-y flex9">
        <div class="pr flex media">
          <img
            class="img pa"
            src="@/assets/img/prateek-katyal-bQIgHc6AHUI-unsplash.webp"
            alt="login-bg"
          />
        </div>
      </div>
      <div class="login__wrapper wh box-y gap p5 flex16 flex">
        <div class="header-spase"></div>
        <h2>Message Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores voluptatem
          expedita! Provident odio possimus unde labore hic nisi optio nesciunt alias! Est accusamus
          quaerat soluta consectetur aperiam fugiat laboriosam.
        </p>
        <FormGuestQuery class="flex" />
      </div>
    </LayoutOpener>
  </section>
</template>

<style lang="sass" scoped></style>
