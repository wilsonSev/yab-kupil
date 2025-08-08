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
    <div class="flex justify-center px-4 py-16 sm:py-24"
         :style="{ transform: `translateY(${scrollY * 0.05}px)` }">
      <Greeting />
    </div>  
    <div id="products" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16">
      <ProductCard 
        v-for="product in productsList"
        :key="product.id"
        :title="product.title"
        :image="product.image"
        :price="product.price"
        :description="product.description"
        :imageWidth="product.imageWidth"
        @click="open(product)"
        @add-to-cart="addToCartWithAnimation(product, $event)"
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
import { products as allProducts } from "../data/products"
import { addToCart } from "../data/cart"

const scrollY = ref(0)
const productsList = allProducts
const handleScroll = () => {
  scrollY.value = window.scrollY
}

const selected = ref(null)
const isModalOpen = ref(false)
let openProductHandler = null

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

function addToCartWithAnimation(product, evt){
  // Добавляем в корзину
  addToCart(product, 1)
  // Анимируем полёт к иконке корзины
  const cartEl = document.getElementById('cartIcon')
  const img = new Image()
  img.src = product.image || '/CartIcon.svg'
  img.className = 'pointer-events-none fixed z-[2000] w-10 h-10 rounded-full shadow-lg'
  document.body.appendChild(img)
  // старт из позиции клика или центра
  const start = evt && evt.clientX != null ? { x: evt.clientX, y: evt.clientY } : { x: window.innerWidth/2, y: window.scrollY + 200 }
  const rect = cartEl?.getBoundingClientRect()
  const end = rect ? { x: rect.left + rect.width/2, y: rect.top + rect.height/2 } : { x: 40, y: 40 }

  img.style.left = start.x + 'px'
  img.style.top = start.y + 'px'

  const duration = 500
  let startTime = null
  const animate = (t) => {
    if (!startTime) startTime = t
    const p = Math.min(1, (t - startTime) / duration)
    // простая кривая
    const ease = p < 0.5 ? 2*p*p : -1 + (4 - 2*p)*p
    const x = start.x + (end.x - start.x) * ease
    const y = start.y + (end.y - start.y) * ease
    img.style.left = x + 'px'
    img.style.top = y + 'px'
    img.style.transform = `scale(${1 - p*0.4})`
    if (p < 1) requestAnimationFrame(animate)
    else img.remove()
  }
  requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', onEsc)
  // Слушаем выбор из поиска в шапке
  openProductHandler = (e) => {
    const p = e.detail?.product
    if (p) open(p)
  }
  window.addEventListener('open-product', openProductHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', onEsc)
  if (openProductHandler) window.removeEventListener('open-product', openProductHandler)
})
</script>

<style>
/* Анимация по желанию */
.fade-zoom-enter-from, .fade-zoom-leave-to { opacity: 0; transform: scale(.98) translateY(6px); }
.fade-zoom-enter-active, .fade-zoom-leave-active { transition: all .18s ease; }
</style>