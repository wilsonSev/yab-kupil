<template>
  <div class="h-164 pt-10 relative overflow-hidden"
    style="
    background: 
      linear-gradient(
        to right,
        rgba(251, 166, 45, 1),
        rgba(251, 166, 45, 0)
      ),
      linear-gradient(
        to bottom,
        #f9ad43 50%,
        #f9d49f 100%
      );
    "
  >
    <div class="flex justify-between items-center w-full">
      <div pl-12>
        <img
          src="/can.png"
          :style="{ transform: `translateY(${scrollY * 0.2}px)` }"
          class="absolute top-[-20px] left-[-36px] w-60 z-10 transition-transform duration-75"
        >

        <img
          src="/banana.png"
          :style="{ transform: `translateY(${scrollY * 0.15}px)` }"
          class="absolute top-46 left-[-20px] w-56 z-10 transition-transform duration-15"
        >

        <img
          src="/jar.png"
          :style="{ transform: `translateY(${scrollY * 0.35}px)` }"
          class="absolute top-24 left-120 w-56 z-10 transition-transform duration-15"
        >

        <img src="/hero.svg" class="h-56 w-auto ml-16 mt-24"
        :style="{ transform: `translateY(${scrollY * 0.1}px)` }">
        <div class="transition-transform duration-15" :style="{ transform: `translateY(${scrollY * 0.1}px)` }">
          <button
            class="
              mt-8
              ml-46
              inline-flex
              items-center
              justify-center
              bg-[#6b440d]
              text-[#e6f8f9]
              text-lg
              font-semibold
              px-14 py-2
              rounded-full
              shadow-lg
              hover:shadow-xl
              hover:scale-102
              active:scale-98
              transition-all duration-200 ease-in-out
            "
          >Каталог</button>
        </div>
      </div>
      <div class="flex justify-center mt-4 w-[420px] transition-transform duration-15"
      :style="{ transform: `translateY(${scrollY * 0.05}px)` }">
        <ProductCard image="/burger.png" title="Биг Мак" price="99.90" />
      </div>
    </div>
  </div>  
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ProductCard from "./ProductCard.vue"

const scrollY = ref(0)
const handleScroll = () => {
  scrollY.value = window.scrollY
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>