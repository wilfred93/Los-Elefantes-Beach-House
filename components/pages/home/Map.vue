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
              <path id="mask-path" :d="locations[selectedLocation].svgPath" fill="none" stroke="#FFF" stroke-width="3" /> 
            </mask>
          </defs>
             <path :d="locations[selectedLocation].svgPath" fill="none" stroke="#E5542C" stroke-width="3" stroke-dasharray="7" stroke-linecap="round" mask="url(#anim-mask)"  /> 
        </svg>
      </div>
      <picture>
        <img class="w-full rounded-xl border-2 border-elefantes-orange" :src="locations[selectedLocation].mapImg" alt="Los Elefantes Beach House">
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
import { ref, nextTick } from 'vue'

const selectedLocation = ref(1)
const MAPPATH= '/images/maps/'

const locations = [
  { id: 1, name: 'Playa del Ingles Beach', svgPath: 'M190.297 33.6023C222.497 49.5031 240.997 71.5031 240.997 71.5031C240.997 71.5031 225.993 102.506 225.997 115.003C226 127.5 233.497 154.503 231 160.5C228.503 166.497 203.997 203.003 203.997 203.003L265.497 235.503C265.497 235.503 277.5 225.5 288 232.5C298.5 239.5 293 254 293 254C293 254 309.994 256.507 325.997 276.503C342 296.5 354 305.5 354 305.5', mapImg: '/images/maps/playa-del-ingles-beach.png' },
  { id: 2, name: 'Yumbo Center', svgPath: 'M546.599 237.845C546.855 207.703 541.2 182.988 528.5 154.499L455.5 188.999C455.5 188.999 444 198 426.5 200.5C409 203 400 197 400 197C281 98.9998 185.538 60.9497 98.5379 46.4497C84.9631 89.1179 75.5 109.5 58 148.5', mapImg:'/images/maps/yumbo.png' },
  { id: 3, name: 'Las Burras Beach', svgPath: 'M0 0' },
  { id: 4, name: 'Faro Maspalomas', svgPath: 'M0 0' }
]

const onLocationClick = async (locationId) => {
  selectedLocation.value = locations.findIndex(loc => loc.id === locationId)
  
  await nextTick() // Wait for the DOM to update with the new paths. Avoids the mask not being updated
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