<template>
  <Glass class="w-64 sm:w-72 aspect-square flex flex-col justify-between cursor-pointer" @click="$emit('click')">
    <div class="w-full">
      <div class="flex flex-col gap-y-2 grow items-center">
      <img :src="image" alt="Product image"
      :class="[imageWidth, 'mx-auto drop-shadow-xl']" />
      <h3 class="w-full px-4 text-left text-base sm:text-lg font-semibold text-[#6B440D] leading-snug">{{ title }}</h3>
      <p class="w-full px-4 text-left text-xs text-neutral-600 line-clamp-2">{{ description }}</p>
    </div>
    <div>
    <div class="flex items-center grow justify-between">
      <div class="text-left ml-4">
        <p class="text-2xl font-bold text-[#4B2D02]">{{ price }}$</p>
      </div>
      <button class="
        mt-auto bg-[#4B2D02] text-white text-[10px] font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 flex items-center gap-2 justify-center
      " @click.stop="$emit('add-to-cart', $event)">
        <img src="/CartIcon.svg" class="w-[12px] mb-[1px] brightness-0 invert">
        <span>В тележку</span>
      </button>
    </div>
    </div>
    </div>
  </Glass>
</template>

<script setup>
import Glass from "./Glass.vue"
defineEmits(['click', 'add-to-cart'])
defineProps({
  image: String,
  title: String,
  price: [Number, String],
  description: {
    type: String,
    default: ''
  },
  imageWidth: {
    type: String,
    default: 'w-58' // Tailwind класс по умолчанию
  }
})

</script>