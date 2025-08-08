<template>
  <div class="overlay" @click.self="emit('close')">
    <div class="modal">
      <button class="close" @click="emit('close')">×</button>
      <img :src="product.image" :alt="product.title" />
      <h2> {{ product.title }} </h2>
      <p>product.description</p>
      <strong>{{ product.price }} $</strong>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ product: Object })
const emit = defineEmits(['close'])
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