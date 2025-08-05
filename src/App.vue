<template>
  <div class="min-h-screen flex flex-col">
    <Header class="h-16" />

    <main class="flex-1">
      <Home />
    </main>

    <Footer class="h-24" />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
</script>
