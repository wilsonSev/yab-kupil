import { reactive, computed } from 'vue'

const state = reactive({
  items: [] // { id, title, price, image, qty }
})

function findItemIndex(productId) {
  return state.items.findIndex(item => item.id === productId)
}

export function addToCart(product, quantity = 1) {
  const idx = findItemIndex(product.id)
  if (idx >= 0) {
    state.items[idx].qty += quantity
  } else {
    state.items.push({
      id: product.id,
      title: product.title,
      price: Number(product.price),
      image: product.image,
      qty: quantity
    })
  }
}

export function removeFromCart(productId) {
  const idx = findItemIndex(productId)
  if (idx >= 0) state.items.splice(idx, 1)
}

export function updateQuantity(productId, qty) {
  const idx = findItemIndex(productId)
  if (idx >= 0) state.items[idx].qty = Math.max(1, qty)
}

export function clearCart() {
  state.items = []
}

export const cartItems = computed(() => state.items)
export const cartCount = computed(() => state.items.reduce((sum, i) => sum + i.qty, 0))
export const cartTotal = computed(() => state.items.reduce((sum, i) => sum + i.price * i.qty, 0))

