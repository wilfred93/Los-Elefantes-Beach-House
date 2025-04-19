<template>
  <div
    class="flex"
    :class="{
      'text-elefantes-green': theme === 'dark',
      'text-elefantes-yellow': theme === 'light',
    }"
  >
    <LanguageIcon class="mr-2 w-6 h-6" />
    {{ currentLocaleName?.name }}
    <!-- <NuxtLink
      v-for="loc in filteredLocales"
      :key="loc.code"
      :to="switchLocalePath(loc.code)"
      :class="{
        'text-elefantes-green': theme === 'dark',
        'text-elefantes-yellow': theme !== 'dark',
      }"
    >
      {{ loc.name || loc.code }}
    </NuxtLink> -->
    <TriangleDownIcon class="w-3 h-3 ml-1 mt-1.5" />
  </div>
</template>

<script setup lang="ts">
import LanguageIcon from "@/public/images/icons/layout/language-icon.svg";
import TriangleDownIcon from "@/public/images/icons/layout/triangle-down.svg";

defineProps({
  theme: {
    type: String,
    default: "light",
  },
});

const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const currentLocaleName = computed(() =>
  locales.value.find((l) => l.code === locale.value)
);
</script>
