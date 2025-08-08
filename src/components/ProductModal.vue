<template>
  <div class="overlay" @click.self="emit('close')">
    <div class="modal">
      <button class="close" @click="emit('close')">×</button>
      <div class="flex flex-col sm:flex-row gap-6 items-center">
        <img :src="product.image" :alt="product.title" class="w-48 h-48 object-contain" />
        <div class="text-left">
          <h2 class="text-2xl font-bold text-[#4B2D02] mb-2">{{ product.title }}</h2>
          <p class="text-sm text-neutral-700 mb-4">{{ product.description }}</p>
          <div class="flex items-center gap-4">
            <strong class="text-xl text-[#4B2D02]">{{ product.price }} $</strong>
            <button @click="onAddToCart($event)" class="bg-[#4B2D02] text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 px-4 py-2 flex items-center gap-2">
              <img src="/CartIcon.svg" class="w-4 h-4 brightness-0 invert" />
              <span>В тележку</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { addToCart } from '../data/cart'
const props = defineProps({ product: Object })
const emit = defineEmits(['close'])

function onAddToCart(evt){
  addToCart(props.product, 1)
  // полёт к корзине
  const cartEl = document.getElementById('cartIcon')
  const img = new Image()
  img.src = props.product.image || '/CartIcon.svg'
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

<style scoped>
.overlay {
  position: fixed;
  inset: 0; /* растягиваем на весь экран */
  background: rgba(0, 0, 0, 0.2); /* лёгкое затемнение */
  backdrop-filter: blur(8px); /* вот он — блюр фона */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 20px;
  max-width: 720px;
  width: min(92vw, 720px);
  max-height: 90vh;
  overflow: auto;
  position: relative;
}

.close {
  position: absolute;
  top: 12px;
  right: 14px;
  font-size: 1.5rem;
  background: none;
  border: 0;
  cursor: pointer;
}
</style>