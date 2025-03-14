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
              <path
                id="mask-path"
                :d="locations[selectedLocation].svgPath"
                fill="none"
                stroke="#FFF"
                stroke-width="3"
              />
            </mask>
          </defs>
          <path
            :d="locations[selectedLocation].svgPath"
            fill="none"
            stroke="#E5542C"
            stroke-width="3"
            stroke-dasharray="7"
            stroke-linecap="round"
            mask="url(#anim-mask)"
          />
          <path
            :d="locations[selectedLocation].startCoordinate"
            fill="#03576B"
          />
          <path :d="locations[selectedLocation].endCoordinate" fill="#E5542C" />
        </svg>
      </div>
      <picture>
        <img
          class="w-full rounded-xl border-2 border-elefantes-orange"
          :src="locations[selectedLocation].mapImg"
          alt="Los Elefantes Beach House"
        />
      </picture>
    </div>
    <p class="my-6">
      Playa del Inglés Beach is
      <span class="text-elefantes-orange">200 meters</span> away from Los
      Elefantes Beach House
    </p>
    <div>
      <div
        class="overflow-x-auto md:overflow-x-auto whitespace-nowrap md:whitespace-normal -ml-1"
      >
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
import anime from "animejs";
import { ref, nextTick } from "vue";
import { locationPaths } from "~/assets/data/mapLocations";

const selectedLocation = ref(0);
const locations = locationPaths;

const onLocationClick = async (locationId) => {
  selectedLocation.value = locations.findIndex((loc) => loc.id === locationId);

  await nextTick();

  anime({
    targets: "#mask-path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 2000,
    direction: "alternate",
    loop: false,
  });
};
</script>
