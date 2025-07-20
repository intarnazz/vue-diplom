<script setup></script>

<template>
  <div class="opener w">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
$headerCalc: calc( 100dvh )
$menuCalc: calc( 100dvh )
.opener
  min-height: $headerCalc
  // height: $headerCalc
// @media screen and (max-width: 480px)
//   .opener
//     min-height: $menuCalc
//     // height: $menuCalc
</style>
