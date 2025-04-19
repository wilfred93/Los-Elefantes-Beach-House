<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/shared/header.vue";
</script>
