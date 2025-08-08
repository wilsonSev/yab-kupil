<!-- src/components/Header.vue -->
<template>
  <header class="fixed top-0 left-0 right-0 w-full py-2 sm:py-3 px-3 sm:px-5 flex flex-col md:flex-row md:items-center items-stretch justify-between gap-1.5 md:gap-0 pt-1.5 z-40 -mb-px"
    style="
      background: 
      url('/noise.svg'),
      linear-gradient(
        to bottom,
        #f9d298 25%,
        #f9d298 75%,
        #f9ad43 100%
      );
      background-blend-mode: overlay;
      background-size: 50px 50px, cover;
      background-repeat: repeat, no-repeat;
    "
  >
    <!-- ЛОГО -->
    <div class="flex items-center gap-2">
      <img src="/ЯБ.svg" alt="logo" class="h-10 w-10" />
    </div>

    <!-- ПОИСК С ВЫПАДАЮЩИМ СПИСКОМ -->
    <div class="relative w-full max-w-xl md:mx-6 mx-0 order-3 md:order-none">
      <form @submit.prevent="onSubmit" class="relative">
        <input
          v-model="query"
          name="query"
          placeholder="Поиск товаров…"
          class="w-full rounded-full px-6 py-3 shadow focus:outline-none ring-2 ring-[#1315153a] transition bg-gradient-to-r from-[#ebf5ed] to-[#efdeb9] text-sm text-neutral-800 placeholder-neutral-500"
          @focus="openDropdown = true"
          @keydown.down.prevent="move(1)"
          @keydown.up.prevent="move(-1)"
          @keydown.enter.prevent="selectHighlighted()"
          @keydown.esc.prevent="closeDropdown()"
          @blur="onBlur"
        />
      </form>

      <!-- ДРОПДАУН -->
      <ul
        v-if="openDropdown && filtered.length"
        class="absolute z-50 mt-2 w-full rounded-xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden"
      >
        <li
          v-for="(p, idx) in filtered"
          :key="p.id"
          @mousedown.prevent="select(p)"
          :class="[
            'px-4 py-2 cursor-pointer text-sm text-[#4B2D02] hover:bg-amber-50',
            idx === highlighted ? 'bg-amber-100' : ''
          ]"
        >
          {{ p.title }}
        </li>
      </ul>
    </div>

    <div class="flex items-center gap-3 order-2 md:order-none">
      <!-- КНОПКА ВОЙТИ / АККАУНТ -->
      <button v-if="!isLoggedIn" @click="openLogin()" class="px-4 py-2 rounded-full bg-[#4B2D02] text-white text-sm font-semibold shadow hover:shadow-md hover:opacity-95">
        Войти
      </button>
      <div v-else class="flex items-center gap-2">
        <button @click="logout" class="text-[#4B2D02] text-sm font-semibold underline decoration-dotted">Выйти</button>
      </div>

      <!-- КОРЗИНА (цель для анимации) -->
      <div class="relative" ref="cartWrapper">
        <button id="cartIcon" @click="toggleCart" class="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#4B2D02] text-white shadow hover:shadow-md">
          <img src="/CartIcon.svg" class="w-5 h-5 brightness-0 invert" alt="Cart" />
          <span v-if="count>0" class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] leading-none px-1.5 py-0.5 rounded-full">{{ count }}</span>
        </button>

        <!-- ДРОПДАУН КОРЗИНЫ -->
        <div v-if="showCart" class="absolute right-0 mt-2 w-80 md:w-96 max-w-[90vw] bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-3">
          <div v-if="!items.length" class="text-sm text-neutral-500">Тележка пуста</div>
          <div v-else class="space-y-3 max-h-80 overflow-auto">
            <div v-for="it in items" :key="it.id" class="flex items-center gap-3">
              <img :src="it.image" class="w-10 h-10 object-contain" />
              <div class="flex-1">
                <div class="text-sm text-[#4B2D02] font-medium">{{ it.title }}</div>
                <div class="text-xs text-neutral-600">{{ it.qty }} × {{ it.price.toFixed(2) }} $</div>
              </div>
              <div class="flex items-center gap-2">
                <div class="text-sm font-semibold">{{ (it.qty * it.price).toFixed(2) }} $</div>
                <button @click="remove(it.id)" class="text-xs text-red-600 hover:text-red-700 px-2 py-1 rounded-md hover:bg-red-50">Удалить</button>
              </div>
            </div>
            <div class="flex items-center justify-between pt-2 border-t">
              <div class="text-sm text-neutral-600">Итого</div>
              <div class="text-base font-bold text-[#4B2D02]">{{ total.toFixed(2) }} $</div>
            </div>
            <button @click="checkout" class="w-full mt-2 bg-[#6B2E0D] text-white text-sm font-semibold rounded-lg py-2 hover:opacity-95">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- МОДАЛ ВХОДА -->
  <Teleport to="body">
    <div v-if="loginOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm" @click.self="closeLogin">
      <div class="bg-white rounded-2xl p-6 w-[360px] shadow-xl">
        <div class="text-lg font-bold text-[#4B2D02] mb-4">Вход</div>
        <form @submit.prevent="performLogin">
          <div class="space-y-3">
            <input v-model.trim="login.email" type="email" placeholder="Email" class="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" required />
            <input v-model="login.password" type="password" placeholder="Пароль" class="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" required />
          </div>
          <button type="submit" :disabled="loginLoading" class="w-full mt-4 bg-[#4B2D02] text-white font-semibold rounded-lg py-2 hover:opacity-95 disabled:opacity-60">
            <span v-if="!loginLoading">Войти</span>
            <span v-else>Входим…</span>
          </button>
        </form>
        <p v-if="loginError" class="mt-3 text-sm text-red-600">{{ loginError }}</p>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { products } from '../data/products'
import { cartItems, cartCount, cartTotal, removeFromCart } from '../data/cart'

const query = ref('')
const openDropdown = ref(false)
const highlighted = ref(-1)
const showCart = ref(false)
const items = cartItems
const count = cartCount
const total = cartTotal
const cartWrapper = ref(null)

// Login state
const isLoggedIn = ref(false)
const userName = ref('Гость')
const loginOpen = ref(false)
const login = ref({ email: '', password: '' })
const loginLoading = ref(false)
const loginError = ref('')

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  // Показать весь список при пустом запросе, фильтровать при вводе
  const list = q
    ? products.filter(p => p.title.toLowerCase().includes(q))
    : products
  return list
})

watch(query, (val) => {
  if (!val) highlighted.value = -1
})

function move(dir){
  if (!filtered.value.length) return
  openDropdown.value = true
  highlighted.value = (highlighted.value + dir + filtered.value.length) % filtered.value.length
}
function selectHighlighted(){
  if (highlighted.value >= 0) select(filtered.value[highlighted.value])
}
function closeDropdown(){
  openDropdown.value = false
  highlighted.value = -1
}
function onBlur(){
  // чутка ждём, чтобы сработал mousedown по пункту
  setTimeout(() => closeDropdown(), 100)
}
function select(p){
  // Сообщаем основному контенту, чтобы открыл модалку с этим продуктом
  window.dispatchEvent(new CustomEvent('open-product', { detail: { product: p } }))
  query.value = ''
  closeDropdown()
}
function onSubmit(){
  if (filtered.value.length) select(filtered.value[0])
}

function toggleCart(){
  showCart.value = !showCart.value
}

onMounted(() => {
  const onDocClick = (e) => {
    if (!showCart.value) return
    const wrapper = cartWrapper.value
    if (wrapper && !wrapper.contains(e.target)) showCart.value = false
  }
  window.addEventListener('click', onDocClick)
  // сохраняем, чтобы снять потом
  ;(window).__onCartDocClick = onDocClick
})

onBeforeUnmount(() => {
  if ((window).__onCartDocClick) {
    window.removeEventListener('click', (window).__onCartDocClick)
    delete (window).__onCartDocClick
  }
})

function checkout(){
  alert('Упс! Кажется, вы пытаетесь оформить заказ в несуществующем маркетплейсе. Мы ещё только тренируемся! 😅')
}

function remove(id){
  removeFromCart(id)
}

function openLogin(){
  loginOpen.value = true
}
function closeLogin(){
  if (!loginLoading.value) loginOpen.value = false
}
function performLogin(){
  loginError.value = ''
  if (!login.value.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(login.value.email)){
    loginError.value = 'Введите корректный email'
    return
  }
  if (!login.value.password || login.value.password.length < 6){
    loginError.value = 'Пароль должен быть длиннее 5 символов'
    return
  }
  loginLoading.value = true
  // Псевдо-реальный вход: сохраняем токен и имя в localStorage
  setTimeout(() => {
    const savedName = login.value.email.split('@')[0]
    isLoggedIn.value = true
    userName.value = savedName
    localStorage.setItem('authUser', JSON.stringify({ email: login.value.email, name: savedName }))
    loginLoading.value = false
    loginOpen.value = false
  }, 700)
}

function logout(){
  isLoggedIn.value = false
  userName.value = 'Гость'
  localStorage.removeItem('authUser')
}

// Инициализация состояния логина из localStorage
onMounted(() => {
  try {
    const raw = localStorage.getItem('authUser')
    if (raw){
      const u = JSON.parse(raw)
      if (u?.email && u?.name){
        isLoggedIn.value = true
        userName.value = u.name
      }
    }
  } catch {}
})


</script>
