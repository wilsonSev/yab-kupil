<template>
  <Glass class="w-72 aspect-square flex flex-col justify-between items-center p-4 text-center relative">
    <img :src="image" alt="Product image" class="w-58 mx-auto drop-shadow-lg" />
    <div class="flex items-center justify-between mt-4 gap-2 w-68">
      <div class="w-full text-left ml-4">
        <h3 class="text-xl font-semibold text-[#6B440D] mt-6">{{ title }}</h3>
        <p class="text-3xl font-bold text-[#4B2D02] -mt-1">{{ price }}$</p>
      </div>
      <button class="
        leading-none
        px-3 py-3
        mt-8
        mr-2
      bg-[#4B2D02] 
      text-white text-sm font-semibold
        rounded-full
        shadow-md
        hover:shadow-lg
        hover:scale-102
        active:scale-98
        transition-all duration-200
        w-64
        flex
        items-center
        gap-2
      ">
        <img src="/CartIcon.svg" class="w-[12px] mb-[1px]">
        <span>В тележку</span>
      </button>
    </div>
  </Glass>
</template>

<script setup>
import Glass from "./Glass.vue"
defineProps({
  image: String,
  title: String,
  price: Number
})
</script>