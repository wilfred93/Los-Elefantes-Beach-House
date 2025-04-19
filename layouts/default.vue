<template>
  <div>
    <Header :theme="headerTheme" />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from "~/components/shared/Header.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const headerTheme = computed(() => route.meta.headerTheme || "light");
</script>
