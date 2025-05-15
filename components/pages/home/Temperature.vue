<template>
  <div id="temperature-wrapper" class="text-right overflow-hidden">
    <p class="text-4xl font-bold mb-1">{{ temperature }} °C</p>
    <p class="text-lg">Maspalomas</p>
    <p class="text-sm update-info" v-if="weatherCode">
      Last Updated: {{ lastUpdated }} | Conditions:
      {{ $t("weather_" + weatherCode) }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { weatherCodes } from "@/assets/data/weatherCodes";

const temperature = ref(null);
const weatherCode = ref(null);
const lastUpdated = ref(null);

const setLastUpdateValue = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  lastUpdated.value = `${hours}:${minutes}`;
};

const fetchWeather = async () => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=27.76&longitude=-15.57&current=temperature_2m,weathercode"
    );
    const data = await response.json();
    temperature.value = Math.round(data.current.temperature_2m);
    weatherCode.value = data.current.weathercode;
    setLastUpdateValue();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    temperature.value = "--";
  }
};

onMounted(() => {
  fetchWeather();
});
</script>

<style scoped>
.update-info {
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

#temperature-wrapper:hover .update-info {
  transform: translateX(0);
  opacity: 1;
}
</style>
