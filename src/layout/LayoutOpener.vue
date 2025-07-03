<script setup></script>

<template>
  <div class="opener w">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
.opener
  min-height: calc( 100dvh - $header )
  max-height: calc( 100dvh - $header )
</style>
