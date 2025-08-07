<template>
  <div
    @mousemove="handleMouseMove"
    ref="card"
    class="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-lg p-4 transition-all duration-300 overflow-hidden">
      <div
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
</script>