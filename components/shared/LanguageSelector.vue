<script setup>
const { locales, locale: currentLocale } = useI18n();
// Add functionality for language selection if needed
console.log(locales);
</script>

<template>
  <ul class="hidden md:block group relative">
    <li
      v-for="(country, index) in countries"
      :key="country.code"
      class="leading-5 h-11 w-11 mb-5 rounded-full border border-elefantes-yellow text-elefantes-yellow cursor-pointer bg-cover absolute transition-all duration-300 ease-in-out"
      :class="{
        'translate-y-0': index === 0,
        'opacity-0 translate-y-[60px] group-hover:opacity-100': index !== 0,
        'group-hover:translate-y-[120px]': index === 1,
        'group-hover:translate-y-[180px]': index === 2,
        'group-hover:translate-y-[240px]': index === 3,
      }"
      @click="selectLanguage(country.code)"
    >
      <img
        class="rounded-full"
        :src="`/images/icons/countries/${country.code}.svg`"
        alt="Germany"
      />
    </li>
  </ul>
</template>
