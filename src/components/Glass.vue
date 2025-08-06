<template>
  <div
    @mousemove="handleMouseMove"
    ref="card"
    class="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-lg p-4 transition-all duration-300 overflow-hidden">
      <div
        class="absolute inset-0 rounded-3xl border-2 pointer-events-none z-0"
        :style="borderEffect"
        ></div>
        <div class="relative z-10">
          <slot />
        </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const card = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)


const handleMouseMove = (e) => {
  const rect = card.value.getBoundingClientRect()
  // относительная позиция мыши к элементу
  mouseX.value = e.clientX - rect.left 
  mouseY.value = e.clientY - rect.top
}

const borderEffect = computed(() => {
  return {
    border: '1px solid transparent',
    borderImage: `linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.8), rgba(255,255,255,0.2)) 1`,
    borderImageSlice: 1,
    WebkitMaskImage: `radial-gradient(circle at ${mouseX.value}px ${mouseY.value}px, white, transparent 80%)`,
    maskImage: `radial-gradient(circle at ${mouseX.value}px ${mouseY.value}px, white, transparent 80%)`,
    transition: 'mask-image 0.2s ease',
  }
})
</script>