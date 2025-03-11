<script setup>
import Map from './Map.vue';
</script> 
<template>
  <section class="container mx-auto px-5">
    <h1 class="primary--title">Your tropical oasis in the heart of Playa del Inglés</h1>
    <div class="flex flex-wrap">
      <div class="hidden md:flex items-center justify-center w-full md:w-1/2  ">
        <img class="max-h-[90%]" src="/images/GC-island.png" alt="Gran Canaria Island">
      </div>
        <Map />
    </div>
  </section>
</template>

