<template>
  <div class="h-[2000px]"
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
      
  ">
    <div class="flex justify-center px-4 py-0">
      <ProductCard class="w-full max-w-[580px] font-sans sm:text-[20px] font-medium border-[1.5px] px-20 py-6">
        <div class="text-transparent bg-clip-text bg-gradient-to-r from-[#6B2E0D] to-[#9E2200] text-[28px]">
          Мы симулировали весь процесс онлайн-покупки.<br />
          Чтобы вы почувствовали, как мало вам<br />
          на самом деле нужно.
        </div>
      </ProductCard>
    </div>
  </div>
</template>
<script setup>
import ProductCard from "../components/ProductCard.vue"
</script>