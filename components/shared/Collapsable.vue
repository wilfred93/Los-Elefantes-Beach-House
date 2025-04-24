<template>
  <div class="mb-4">
    <button
      @click="isOpen = !isOpen"
      class="w-full bg-elefantes-green p-3 hover:bg-[#013846] text-elefantes-orange rounded-t-md text-left font-bold text-xl"
      :class="{ 'rounded-b-md': !isOpen }"
    >
      <PlusIcon v-if="!isOpen" class="inline-block mb-1.5 mr-1.5" />
      <DashIcon v-if="isOpen" class="inline-block mb-1.5 mr-1.5" />

      {{ title }}
    </button>
    <div v-show="isOpen" class="bg-elefantes-green text-white p-4 rounded-b-md">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PlusIcon from "@/public/images/icons/layout/plus-icon.svg";
import DashIcon from "@/public/images/icons/layout/dash.svg";

defineProps<{
  title: string;
}>();

const isOpen = ref(false);
</script>
