<template>
  <div class="border w-full md:mt-0 md:w-1/2 relative">
    <div class="relative">
      <div class="absolute top-0 left-0 w-full h-full z-10">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 618 312" 
          preserveAspectRatio="meet"
        >
          <defs>
            <mask id="anim-mask">
              <path id="mask-path" d="M546.6 237.846C546.855 207.703 541.2 182.988 528.501 154.499L455.501 188.999C455.501 188.999 444.001 198 426.501 200.5C409.001 203 400.001 197 400.001 197C287.501 114.5 209.501 66.9999 100.501 41.9999L56.4999 145.999" fill="none" stroke="#FFF" stroke-width="3" />
            </mask>
          </defs>
            <path d="M546.6 237.846C546.855 207.703 541.2 182.988 528.501 154.499L455.501 188.999C455.501 188.999 444.001 198 426.501 200.5C409.001 203 400.001 197 400.001 197C287.501 114.5 209.501 66.9999 100.501 41.9999L56.4999 145.999" fill="none" stroke="#E5542C" stroke-width="3" stroke-dasharray="7" stroke-linecap="round" mask="url(#anim-mask)"  />
        </svg>
      </div>
      <picture>
        <img class="w-full rounded-xl border-2 border-elefantes-orange" src="/images/maps/yumbo.png" alt="Los Elefantes Beach House">
      </picture>
    </div>
    <p class="my-6">Playa del Inglés Beach is <span class="text-elefantes-orange">200 meters</span> away from Los Elefantes Beach House</p>
    <div>
      <div class="overflow-x-auto md:overflow-x-auto whitespace-nowrap md:whitespace-normal -ml-1">
        <button 
          v-for="location in locations" 
          :key="location.id"
          class="border-2 border-elefantes-orange py-1.5 px-2.5 rounded-full text-xs m-1 md:m-1 inline-block"
          @click="onLocationClick(location.id)"
        >
          {{ location.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import anime from 'animejs'

const locations = [
  { id: 1, name: 'Playa del Ingles Beach' },
  { id: 2, name: 'Yumbo Center' },
  { id: 3, name: 'Las Burras Beach' },
  { id: 4, name: 'Faro Maspalomas' }
]

const onLocationClick = (locationId) => {
  anime({
        targets: '#mask-path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        direction: 'alternate',
        loop: false
      })
}
</script> 