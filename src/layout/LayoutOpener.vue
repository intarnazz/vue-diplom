<script setup></script>

<template>
  <div class="opener w">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
.opener
  min-height: calc( 100dvh )
  // height: calc( 100dvh - $header )
@media screen and (max-width: 910px)
  .opener
    min-height: calc( 100dvh )
    // height: calc( 100dvh - $menu )
</style>
