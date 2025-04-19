<template>
  <header>
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex flex-1">
        <HamburgerMenu :theme="theme" />
      </div>
      <div class="flex flex-1 justify-end">
        <LanguageSwitcher :theme="theme" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import HamburgerMenu from "@/components/shared/HamburgerMenu.vue";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher.vue";
defineProps({
  theme: {
    type: String,
    default: "light",
  },
});
</script>
