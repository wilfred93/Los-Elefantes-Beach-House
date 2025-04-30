<template>
  <div>
    <Header :theme="headerTheme" />
    <main class="py-10 md:py-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/shared/Header.vue";
import Footer from "~/components/shared/Footer.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const headerTheme = computed(() => route.meta.headerTheme || "light");
</script>
