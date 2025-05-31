<script setup></script>

<template>
  <div class="opener w">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
.opener
  height: calc( 100dvh - $header )
</style>
