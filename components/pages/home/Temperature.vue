<template>
  <div class="text-right">
    <p class="text-4xl font-bold mb-1">{{ temperature }} °C</p>
    <p class="text-lg">Maspalomas</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const temperature = ref(null);

const fetchWeather = async () => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=27.76&longitude=-15.57&current=temperature_2m,weathercode"
    );
    const data = await response.json();
    temperature.value = Math.round(data.current.temperature_2m);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    temperature.value = "--";
  }
};

onMounted(() => {
  fetchWeather();
});
</script>
