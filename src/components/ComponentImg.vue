<script setup>
import { computed } from 'vue'
import { image } from '@/api/api.js'

const props = defineProps(['id', 'alt'])

const alt = computed(() => (props.alt ? props.alt : 'image'))
</script>

<template>
  <img :src="image.get(props.id)" :alt="alt" />
</template>

<style scoped lang="sass"></style>
