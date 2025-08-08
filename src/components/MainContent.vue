<template>
  <div
  style="
    background: 
      linear-gradient(
        to bottom,
        rgba(249, 212, 159, 0) 0%,
        rgba(233, 252, 255, 1) 10%
      ),
      linear-gradient(
        to right,
        rgba(251, 166, 45, 1),
        rgba(251, 166, 45, 0)
      ),
      linear-gradient(
        to bottom,
        rgba(249, 212, 159, 1) 0%,
        rgba(233, 252, 255, 1) 20%
      );   
  " class="p-32">
    <div class="flex justify-center px-4 py-0">
      <Glass class="w-full max-w-[900px] font-sans sm:text-[20px] font-medium px-20 py-6"
        data-aos="fade-up"
        data-aos-duration="500"
        >
        <div class="text-transparent bg-clip-text bg-gradient-to-r from-[#6B2E0D] to-[#9E2200] text-[28px]">
          Мы симулировали весь процесс онлайн-покупки.<br />
          Чтобы вы почувствовали, как мало вам<br />
          на самом деле нужно.
        </div>
      </Glass>
    </div>
    <div class="flex justify-center px-4 py-24"
         :style="{ transform: `translateY(${scrollY * 0.05}px)` }">
      <Greeting />
    </div>  
    <div id="products" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
      <ProductCard 
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :image="product.image"
        :price="product.price"
        :imageWidth="product.imageWidth"
        @click="open(product)" 
      />
    </div>
  </div>

  <Teleport to="body">
  <Transition name="fade-zoom">
    <ProductModal
      v-if="selected"
      :product="selected"
      @close="close"
    />
  </Transition>
</Teleport>
</template>
<script setup>
import Glass from "./Glass.vue"
import Greeting from "./Greeting.vue"
import ProductCard from "./ProductCard.vue"
import ProductModal from "./ProductModal.vue" 

import { ref, onMounted, onBeforeUnmount } from 'vue'
import {products} from "../data/products"

const scrollY = ref(0)
const handleScroll = () => {
  scrollY.value = window.scrollY
}

const selected = ref(null)
const isModalOpen = ref(false)

function open(p){
  selected.value = p
  isModalOpen.value = true
  lockScroll(true)
}
function close(){
  selected.value = null
  isModalOpen.value = false
  lockScroll(false)
}
function onEsc(e) {
  if (e.key === 'Escape' && isModalOpen.value) close()
}
function lockScroll(yes){
  document.documentElement.style.overflow = yes ? 'hidden' : ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', onEsc)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', onEsc)
})
</script>

<style>
/* Анимация по желанию */
.fade-zoom-enter-from, .fade-zoom-leave-to { opacity: 0; transform: scale(.98) translateY(6px); }
.fade-zoom-enter-active, .fade-zoom-leave-active { transition: all .18s ease; }
</style>