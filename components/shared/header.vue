<template>
  <header class="shadow-lg">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      aria-label="Global"
    >
      <div class="flex flex-1">
        <HamburgerMenu :theme="theme" :menu-position="menuPosition" />
      </div>
      <div class="flex flex-1 justify-center">
        <LogoIcon class="scale-[0.8] md:scale-none" />
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
import LogoIcon from "@/public/images/icons/layout/elefantes-logo-letters.svg";
defineProps({
  theme: {
    type: String,
    default: "light",
  },
  menuPosition: {
    type: String,
    default: "static",
  },
});
</script>
