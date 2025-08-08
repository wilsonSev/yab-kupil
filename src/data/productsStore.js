import { ref, computed } from 'vue'
import { products as baseProducts } from './products'

const LOCAL_KEY = 'userProducts'

function loadUserProducts(){
  try {
    const raw = localStorage.getItem(LOCAL_KEY)
    if (!raw) return []
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

function saveUserProducts(list){
  localStorage.setItem(LOCAL_KEY, JSON.stringify(list))
}

const userProducts = ref(loadUserProducts())

export const allProducts = computed(() => {
  return [...baseProducts, ...userProducts.value]
})

export function addProduct(prod){
  const nextId = Math.max(0, ...allProducts.value.map(p => p.id || 0)) + 1
  const normalized = {
    id: nextId,
    title: String(prod.title || 'Без названия'),
    price: String(prod.price || '0.00'),
    image: prod.image || '',
    imageWidth: prod.imageWidth || 'w-40',
    description: String(prod.description || '')
  }
  userProducts.value = [...userProducts.value, normalized]
  saveUserProducts(userProducts.value)
  return normalized
}

