<script setup>
import { countries } from "@/assets/data/languages";
// Add functionality for language selection if needed
const selectLanguage = (code) => {
  console.log(`Selected language: ${code}`);
  // Implement language switching logic here
};
</script>

<template>
  <ul class="mt-8 hidden md:block">
    <li
      v-for="country in countries"
      :key="country.code"
      class="leading-5 h-11 w-11 p-[11px] mb-5 rounded-full border border-elefantes-yellow text-elefantes-yellow cursor-pointer transition-all duration-200 relative overflow-hidden hover:bg-cover hover:text-transparent cursor-pointer transition-all duration-200"
      :class="[country.flagClass]"
      @click="selectLanguage(country.code)"
    >
      <span>{{ country.code }}</span>
    </li>
  </ul>
</template>
