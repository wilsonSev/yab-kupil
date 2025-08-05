<template>
  <header class="w-full py-4 px-6 flex items-center justify-between pt-2"
  style="
    background: 
    url('/noise.svg'),
    linear-gradient(
      to bottom,
      
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
      <svg class="h-10 w-auto mt-2" viewBox="0 0 46 52" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
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
    <button>
      <svg class="h-10 w-12 mt-1" viewBox="0 0 46 52" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <svg width="59" height="53" viewBox="0 0 59 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_231_49)">
        <path d="M11.7536 37.7139V39.0739H8.95356V46.7539H7.30556V39.0739H4.50556V37.7139H11.7536ZM12.7852 44.1939C12.9932 45.2179 13.6812 45.7779 14.7692 45.7779C15.4412 45.7779 16.1132 45.3779 16.4012 44.8179L17.7292 45.1539C17.2332 46.3219 16.1132 46.9779 14.7532 46.9779C13.0572 46.9779 11.6172 46.1619 11.3772 44.1939C11.1692 41.8739 12.4492 40.2419 14.6092 40.2419C16.9292 40.2419 17.9532 41.8419 17.7452 44.1939H12.7852ZM14.5772 41.3459C13.6012 41.3459 12.8652 42.0979 12.7372 43.1859H16.4012C16.3852 42.1139 15.6012 41.3619 14.5772 41.3459ZM19.5954 40.5299H24.6354V46.7539H23.1954V41.9699H21.0834C20.9874 44.0019 20.4594 45.4419 19.2594 46.9939L18.0754 46.1619C19.3714 44.2419 19.7234 42.7699 19.5954 40.5299ZM26.6133 44.1939C26.8213 45.2179 27.5093 45.7779 28.5973 45.7779C29.2693 45.7779 29.9413 45.3779 30.2293 44.8179L31.5573 45.1539C31.0613 46.3219 29.9413 46.9779 28.5813 46.9779C26.8853 46.9779 25.4453 46.1619 25.2053 44.1939C24.9973 41.8739 26.2773 40.2419 28.4373 40.2419C30.7573 40.2419 31.7813 41.8419 31.5733 44.1939H26.6133ZM28.4053 41.3459C27.4293 41.3459 26.6933 42.0979 26.5653 43.1859H30.2293C30.2133 42.1139 29.4293 41.3619 28.4053 41.3459ZM39.2837 46.7539L37.8437 44.2579H37.0757V46.7539H35.6357V44.2579H34.8837L33.4757 46.7539H31.7317L33.7477 43.5859L31.9237 40.5299H33.6357L34.9637 42.9779H35.6357V40.5299H37.0757V42.9779H37.7637L39.0757 40.5299H40.7877L38.9637 43.5699L40.9797 46.7539H39.2837ZM45.7474 46.7539L44.0994 44.1139H43.1074V46.7539H41.6674V40.5299H43.1074V42.9139H44.0994L45.5394 40.5299H47.2354L45.3154 43.5219L47.4274 46.7539H45.7474ZM50.7007 40.2419C52.5727 40.2419 53.7887 41.3939 53.7887 43.3619V46.7539H52.3487V45.5539C51.7247 46.4659 50.5247 46.9779 49.5327 46.9779C48.1887 46.9619 47.5487 45.8899 47.5487 45.0259C47.5487 43.7299 48.5887 43.0419 49.6927 43.0419H52.3487C52.3167 42.4339 51.9967 41.3939 50.7167 41.3939C49.3407 41.3939 48.9887 42.4499 48.9887 42.4499L47.8207 42.1459C48.1247 40.9619 49.2927 40.2419 50.7007 40.2419ZM49.9167 45.7779C51.0367 45.7619 52.3167 44.9139 52.3167 44.0019H51.0367C49.9167 44.0019 49.1167 44.0819 48.9887 44.9139C48.9247 45.3459 49.1167 45.7459 49.9167 45.7779Z" fill="#4B2D02"/>
        </g>
        <g filter="url(#filter1_d_231_49)">
        <path d="M23.6018 28.2812C25.1896 28.2813 26.4768 29.5685 26.4768 31.1562C26.4768 32.744 25.1896 34.0312 23.6018 34.0312C22.014 34.0312 20.7268 32.7441 20.7268 31.1562C20.7268 29.5684 22.014 28.2812 23.6018 28.2812ZM37.3518 28.2812C38.9396 28.2813 40.2268 29.5685 40.2268 31.1562C40.2268 32.744 38.9396 34.0312 37.3518 34.0312C35.764 34.0312 34.4768 32.7441 34.4768 31.1562C34.4768 29.5684 35.764 28.2812 37.3518 28.2812ZM20.2922 6.28711C20.9257 6.34107 21.4627 6.79126 21.6194 7.41699L22.0227 9.03125H41.4768C41.9387 9.03129 42.3752 9.24436 42.6594 9.6084C42.9435 9.97242 43.0439 10.4476 42.9319 10.8955L40.1819 21.8955C40.0148 22.563 39.4149 23.0312 38.7268 23.0312H22.9143C22.6036 23.0312 22.3518 23.2831 22.3518 23.5938C22.3518 23.9044 22.6036 24.1562 22.9143 24.1562H38.7268C39.5552 24.1563 40.2268 24.8279 40.2268 25.6562C40.2268 26.4846 39.5552 27.1562 38.7268 27.1562H22.9143C20.9468 27.1562 19.3518 25.5613 19.3518 23.5938C19.3518 22.0411 20.345 20.7204 21.7307 20.2324L19.3967 10.8955L18.9934 9.28125H16.7268C15.8984 9.28125 15.2268 8.60968 15.2268 7.78125C15.2268 6.95282 15.8984 6.28125 16.7268 6.28125H20.1643L20.2922 6.28711Z" fill="#4B2D02"/>
        </g>
        <defs>
        <filter id="filter0_d_231_49" x="0.105615" y="34.3139" width="58.083" height="18.08" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="2.2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_231_49"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_231_49" result="shape"/>
        </filter>
        <filter id="filter1_d_231_49" x="8.54556" y="0.6" width="41.8" height="41.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="2.2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_231_49"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_231_49" result="shape"/>
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