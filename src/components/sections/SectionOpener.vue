<script setup></script>

<template>
  <section class="opener w">
    <slot></slot>
  </section>
</template>

<style lang="sass" scoped>
.opener
  height: calc( 100dvh - $header )
</style>
