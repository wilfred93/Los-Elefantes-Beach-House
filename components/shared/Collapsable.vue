<template>
  <div class="mb-4">
    <button
      @click="isOpen = !isOpen"
      class="w-full bg-elefantes-green p-3 hover:bg-[#013846] text-elefantes-orange rounded-t-md text-left font-bold text-xl"
      :class="{ 'rounded-b-md': !isOpen }"
    >
      <img
        v-if="!isOpen"
        class="inline-block mb-1.5 mr-1.5"
        src="/public/images/icons/layout/plus-icon.svg"
        alt="See more"
      />
      <img
        v-if="isOpen"
        class="inline-block mb-1.5 mr-1.5"
        src="/public/images/icons/layout/dash.svg"
        alt="See more"
      />

      {{ title }}
    </button>
    <div
      v-show="isOpen"
      class="bg-elefantes-green text-white pb-3 px-3 rounded-b-md"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();

const isOpen = ref(false);
</script>
