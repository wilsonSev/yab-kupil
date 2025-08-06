<template>
  <Glass class="w-72 aspect-square">
    <img :src="image" alt="Product image" class="w-58 mx-auto drop-shadow-lg" />
  </Glass>
</template>

<script setup>
import Glass from "./Glass.vue"
defineProps({
  image: String
})
</script>