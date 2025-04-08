<template>
  <div class="language-switcher">
    <NuxtLink
      v-for="loc in filteredLocales"
      :key="loc.code"
      :to="switchLocalePath(loc.code)"
      :class="['locale-link', { 'active-locale': loc.code === currentLocale }]"
    >
      {{ loc.name || loc.code }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locales, locale: currentLocale } = useI18n();
console.log(locales);
const switchLocalePath = useSwitchLocalePath();

const filteredLocales = computed(() =>
  locales.value.filter((l) => l.code !== currentLocale.value)
);
</script>
