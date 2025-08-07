<template>
  <div class="container">
    <transition-group name="fade-up" tag="div" class="words">
      <span
        v-for="(word, index) in words"
        :key="index"
        class="word"
        v-show="visibleWords > index"
        >
        {{ word }}
      </span>
    </transition-group>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullText = 'Просто полюбуйтесь'
const words = fullText.split(' ')
const visibleWords = ref(0)

onMounted(()=> {
  let i = 0
  const interval = setInterval(() => {
    if (i < words.length) {
      visibleWords.value++
      i++
    } else {
      clearInterval(interval)
    }
  }, 800)
})
</script>

<style scoped>

.words {
  font-size: 40px;
  font-weight: bold;
  color: #963b00;
  display: flex;
  gap: 16px;
  justify-content: center;
}

.fade-up-enter-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-up-leave-active {
  transition: opacity 0.3s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(40%);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>