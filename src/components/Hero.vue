<template>
  <div class="h-164 pt-[96px] relative overflow-hidden"
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
    <div class="flex justify-between items-center w-full gap-4">
      <div class="pl-6 sm:pl-12">
        <img
          src="/can.png"
          :style="{ transform: `translateY(${scrollY * 0.2}px)` }"
          class="absolute top-[60px] left-[-36px] w-60 z-10 transition-transform duration-75"
        >

        <img
          src="/banana.png"
          :style="{ transform: `translateY(${scrollY * 0.15}px)` }"
          class="absolute top-70 left-[-20px] w-56 z-10 transition-transform duration-15"
        >

        <img
          src="/jar.png"
          :style="{ transform: `translateY(${scrollY * 0.35}px)` }"
          class="absolute top-40 left-120 w-56 z-10 transition-transform duration-15"
        >

        <img src="/hero.svg" class="h-56 w-auto ml-16 mt-24"
        :style="{ transform: `translateY(${scrollY * 0.1}px)` }">
        <div class="transition-transform duration-15" :style="{ transform: `translateY(${scrollY * 0.1}px)` }">
          <button @click="scrollToProducts"
            class="mt-8 ml-20 sm:ml-46 inline-flex items-center justify-center bg-[#6b440d] text-[#e6f8f9] text-base sm:text-lg font-semibold px-8 sm:px-14 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all duration-200 ease-in-out">
            Каталог
          </button>
        </div>
      </div>
      <div class="flex justify-center mt-4 w-[320px] sm:w-[420px] transition-transform duration-15"
      :style="{ transform: `translateY(${scrollY * 0.05}px)` }">
        <ProductCard 
          image="/burger.png" 
          title="Биг Мак" 
          price="99.90" 
          imageWidth="w-58"
          @click="openBurger"
          @add-to-cart="addToCartWithAnimation(burgerProduct, $event)"
        />
      </div>
    </div>
  </div>  
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ProductCard from "./ProductCard.vue"
import { addToCart } from '../data/cart'

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

const productsSection = ref(null)
const scrollToProducts = () => {
  // const el = document.getElementById('products')
  // if (el) {
  //   el.scrollIntoView({ behavior: 'smooth' })
  // }
  const target = document.getElementById('products')
  if (!target) return
  const header = document.querySelector('header')
  const headerOffset = header ? header.getBoundingClientRect().height : 0
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - (headerOffset + 12)
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const duration = 500 // в миллисекундах
  let startTime = null

  const easeInOutQuad = (t) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = easeInOutQuad(timeElapsed / duration) * distance + startPosition
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  requestAnimationFrame(animation)
}

const burgerProduct = {
  id: 1,
  title: 'Биг Мак',
  image: '/burger.png',
  price: '99.90',
  imageWidth: 'w-58',
  description: 'Легендарный бургер с двумя котлетами, сыром и фирменным соусом.'
}

function openBurger(){
  window.dispatchEvent(new CustomEvent('open-product', { detail: { product: burgerProduct } }))
}

function addToCartWithAnimation(product, evt){
  addToCart(product, 1)
  const cartEl = document.getElementById('cartIcon')
  const img = new Image()
  img.src = product.image || '/CartIcon.svg'
  img.className = 'pointer-events-none fixed z-[2000] w-10 h-10 rounded-full shadow-lg'
  document.body.appendChild(img)
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
</script>