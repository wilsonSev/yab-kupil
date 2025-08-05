<template>
  <header class="w-full py-4 px-6 flex items-center justify-between"
  style="
    background: 
    url('/noise.svg'),
    linear-gradient(
      to bottom,
      #F9A939 0%,
      #f9d298 25%,
      #f9d298 75%,
      #F9A939 100%
    );
    background-blend-mode: overlay;
    background-size: 50px 50px, cover;
    background-repeat: repeat, no-repeat;
    "
  >
  <img src="/ЯБ.svg" alt="ЯБ" class="h-6 w-auto" />
  <form @submit.prevent="onSubmit" class="w-[320px] relative">
    <input name="query" placeholder="Search" 
      class="w-full pl-4 pr-10 py-2 rounded-full bg-gradient-to-r
      from-[#ebf5ed] to-[#efdeb9] text-sm text-neutral-800 placeholder-neutral-500
       shadow focus:outline-none ring-2 ring-[#1315153a] transition"/>
    <button class="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 hover:opacity-80 transition active:opacity-60">
       <img src="/Search.svg" alt="Search" class="w-4.5 h-4.5"/>
    </button>
  </form>
  <nav>
    <button>
      
      <svg class="h-12 w-auto" viewBox="0 0 46 52" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <svg width="46" height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_232_56)">
          <path d="M21.3497 30.16C21.3497 30.16 34.1671 30.267 33.9088 29.4153C34.4901 27.2653 31.9793 19.2758 28.9186 18.9224C28.0668 18.6641 27.8459 18.4828 25.7523 18.4828H18.2518C16.1583 18.4828 16.5144 18.6641 15.6627 18.9224C12.6464 19.3604 9.80389 27.3397 10.4254 29.4153C10.167 30.267 21.3497 30.16 21.3497 30.16ZM28.9186 10.3989C28.9186 14.1268 25.8963 17.1489 22.1681 17.1489C18.4398 17.1489 15.4175 14.1268 15.4175 10.3989C15.4175 6.67094 18.4398 3.64886 22.1681 3.64886C25.8963 3.64886 28.9186 6.67094 28.9186 10.3989Z" fill="#4B2D02"/>
          <path d="M11.5526 40.9379C12.2086 41.3219 12.7366 41.9779 12.7366 43.1139C12.7366 45.5139 10.6886 45.7539 9.45657 45.7539H5.18457V36.7139H8.84857C9.85657 36.7139 12.1286 36.9699 12.1286 39.1779C12.1286 39.9939 11.9046 40.5539 11.5526 40.9379ZM8.83257 38.0739H6.83257V40.4739H8.83257C9.64857 40.4739 10.5126 40.2979 10.5126 39.2899C10.5126 38.2659 9.64857 38.0739 8.83257 38.0739ZM9.40857 44.3939C10.2566 44.3939 11.1366 44.2019 11.1366 43.0979C11.1366 41.9939 10.2566 41.8339 9.40857 41.8339H6.83257V44.3939H9.40857Z" fill="#4B2D02"/>
          <path d="M16.8989 45.9779C14.9469 45.9779 13.6989 44.6819 13.6989 42.6179C13.6989 40.5379 14.9469 39.2419 16.8989 39.2419C18.8669 39.2419 20.0989 40.5379 20.0829 42.6179C20.0829 44.6819 18.8509 45.9779 16.8989 45.9779ZM16.8989 44.7779C18.0669 44.7779 18.7229 44.0099 18.7229 42.6179C18.7069 41.2259 18.0669 40.4419 16.8989 40.4419C15.7149 40.4419 15.0589 41.2259 15.0589 42.6179C15.0589 44.0099 15.7149 44.7779 16.8989 44.7779Z" fill="#4B2D02"/>
          <path d="M24.1542 39.1939C23.1142 39.1939 22.1702 38.6179 21.7862 37.8979L22.5062 37.2739C22.9222 37.7379 23.5462 38.0259 24.1542 38.0259C24.6982 38.0259 25.2582 37.7699 25.6902 37.3219L26.4582 37.9779C25.9302 38.6979 25.0022 39.1939 24.1542 39.1939ZM25.6262 39.5299H27.1142V45.7539H25.6742V41.5779L22.6022 45.7539H21.1302V39.5299H22.5702V43.6419L25.6262 39.5299Z" fill="#4B2D02"/>
          <path d="M33.9199 39.5299V40.8899H31.7759V45.7539H30.3359V40.8899H28.2239V39.5299H33.9199Z" fill="#4B2D02"/>
          <path d="M39.8606 39.5299H41.3486V45.7539H39.9086V41.5779L36.8366 45.7539H35.3646V39.5299H36.8046V43.6419L39.8606 39.5299Z" fill="#4B2D02"/>
          </g>
          <defs>
          <filter id="filter0_d_232_56" x="0.78457" y="0.248859" width="44.9641" height="51.1291" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="2.2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_232_56"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_232_56" result="shape"/>
          </filter>
          </defs>
        </svg>

      </svg>

    </button>
  </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const query = ref('')

const onSubmit = () => {
  console.log('Поиск выполнен по запросу:', query.value)
}
</script>