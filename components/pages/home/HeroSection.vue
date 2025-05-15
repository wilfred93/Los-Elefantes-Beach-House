<template>
  <header class="relative h-screen">
    <HamburgerMenu :menu-position="'absolute'" />
    <picture class="absolute inset-0 w-full h-full z-0">
      <source
        srcset="/images/maspalomas-dunes-bg.jpg"
        media="(min-width: 1024px)"
      />
      <source
        srcset="/images/maspalomas-dunes-bg.jpg"
        media="(min-width: 768px)"
      />
      <img
        src="/images/maspalomas-dunes-bg.jpg"
        alt="Background Image"
        class="object-cover w-full h-full"
      />
    </picture>
    <div class="absolute inset-0 bg-black opacity-30"></div>
    <div class="container mx-auto flex flex-col items-center h-screen">
      <img
        src="/images/LosElefantesLogo.svg"
        alt="Logo"
        class="mt-[18vh] h-48 mb-8 z-10"
      />
      <Button>Check Availability</Button>
    </div>
    <div class="absolute top-8 right-8 pl-8 md:pl-12">
      <LanguageSwitcher :show-current-language="true" />
    </div>
    <div
      class="absolute bottom-10 md:bottom-0 left-0 w-full md:pl-12 text-elefantes-yellow"
    >
      <p
        class="montserrat-light text-center md:text-left"
        v-html="$t('arrow_claim')"
      ></p>
      <img
        class="hidden md:block mb-9"
        src="/images/arrow-right.svg"
        alt="arrow-right"
      />
    </div>
    <div
      class="absolute hidden mt-12 top-0 md:top-auto md:bottom-0 md:block right-0 mb-3.5 mr-8 md:mr-12 text-elefantes-yellow text-right z-10"
    >
      <Temperature />
    </div>
  </header>
</template>

<script setup>
import LanguageSwitcher from "@/components/shared/LanguageSwitcher.vue";
import Button from "@/components/shared/Button.vue";
import Temperature from "~/components/pages/home/Temperature.vue";
import HamburgerMenu from "~/components/shared/HamburgerMenu.vue";
</script>
