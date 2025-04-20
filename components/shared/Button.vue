<template>
  <button
    class="bg-elefantes-green z-10 border border-white text-white font-bold py-2 px-4 rounded-full"
  >
    <slot></slot>
  </button>
</template>

<script setup>
// This component is a reusable button with a specific style.
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}
</style>
