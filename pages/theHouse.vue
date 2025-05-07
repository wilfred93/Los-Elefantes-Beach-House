<template>
  <div class="mx-auto max-w-7xl p-4 lg:px-8">
    <h1 class="primary--title my-0">The House at a glance</h1>
    <p class="text-elefantes-green font-montserrat text-center mb-5">
      Welcome to Los Elefantes Beach House. A beach apartment with a private
      terrace, pool and garden.
    </p>
    <section>
      <h2 class="text-elefantes-green font-katibeh text-5xl">Image Gallery</h2>
      <ul
        role="list"
        class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        <li v-for="file in files" :key="file.thumbnail" class="relative">
          <div
            class="group overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
          >
            <a
              :href="file.original"
              class="glightbox"
              :data-gallery="'gallery1'"
              :data-glightbox="file.title"
            >
              <img
                :src="file.thumbnail"
                alt=""
                class="pointer-events-none aspect-[10/7] object-cover group-hover:opacity-75"
              />
            </a>
          </div>
        </li>
      </ul>
    </section>
    <section class="mt-10">
      <h2 class="text-elefantes-green font-katibeh text-5xl">
        Amenities Overview
      </h2>
      <div class="grid grid-cols-2 gap-y-12 gap-x-6 lg:grid-cols-4 lg:gap-x-8">
        <div v-for="incentive in incentives" :key="incentive.name">
          <img :src="incentive.imageSrc" alt="" class="h-16 w-auto" />
          <h3 class="font-montserrat-semiBold mt-6 text-xl">
            {{ $t(incentive.name) }}
          </h3>
          <p class="mt-2 text-sm">
            {{ $t(incentive.description) }}
          </p>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <h2 class="text-elefantes-green font-katibeh text-5xl">
        What's included?
      </h2>
      <ul
        role="list"
        class="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
      >
        <li
          v-for="client in clients"
          class="overflow-hidden rounded-xl border border-elefantes-green"
        >
          <div
            class="flex items-center gap-x-4 border-b bg-elefantes-green p-6"
          >
            <div
              class="font-medium text-elefantes-orange font-montserrat-semiBold"
            >
              {{ client.name }}
            </div>
            <div class="ml-auto inline-block text-xl">
              {{ client.icon }}
            </div>
          </div>
          <ul class="p-6">
            <li class="py-2 bottom-1" v-for="item in client.items" :key="item">
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const { $glightbox } = useNuxtApp();

const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};
const clients = [
  {
    name: "Sleeping ",
    icon: "🛏️",
    items: [
      "Double bed",
      "Air conditioning",
      "Smart TV",
      "Board games",
      "Welcome pack",
      "Local guide",
      "Safety box",
    ],
  },
  {
    name: "Sleeping",
    icon: "🛏️",
    items: [
      "Double bed",
      "Air conditioning",
      "Smart TV",
      "Board games",
      "Welcome pack",
      "Local guide",
      "Safety box",
    ],
  },
  {
    name: "Sleeping",
    icon: "🛏️",
    items: [
      "Double bed",
      "Air conditioning",
      "Smart TV",
      "Board games",
      "Welcome pack",
      "Local guide",
      "Safety box",
    ],
  },
  {
    name: "Sleeping",
    items: [
      "Double bed",
      "Air conditioning",
      "Smart TV",
      "Board games",
      "Welcome pack",
      "Local guide",
      "Safety box",
    ],
  },
];
definePageMeta({
  headerTheme: "dark",
});
useHead({
  bodyAttrs: {
    class: "bg-elefantes-yellow",
  },
});

const files = [
  {
    title: "IMG_4985.HEIC",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    original: "/images/apartment/house.jpg",
  },
  {
    title: "IMG_4985.HEIC",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    original: "/images/apartment/house.jpg",
  },
  {
    title: "IMG_4985.HEIC",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    original: "/images/apartment/house.jpg",
  },
  {
    title: "IMG_4985.HEIC",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    original: "/images/apartment/house.jpg",
  },
  {
    title: "IMG_4985.HEIC",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    original: "/images/apartment/house.jpg",
  },
  {
    title: "IMG_4985.HEIC",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    original: "/images/apartment/house.jpg",
  },
  {
    title: "IMG_4985.HEIC",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    original: "/images/apartment/house.jpg",
  },
  {
    title: "IMG_4985.HEIC",
    thumbnail:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    original: "/images/apartment/house.jpg",
  },
];

const incentives = [
  {
    name: "self_check_in_title",
    description: "self_check_in_description",
    imageSrc: "/images/icons/the-house/clock-elefantes.png",
  },
  {
    name: "high_speed_internet_title",
    description: "high_speed_internet_description",
    imageSrc: "/images/icons/the-house/wifi-elefantes.png",
  },
  {
    name: "air_conditioning_title",
    description: "air_conditioning_description",
    imageSrc: "/images/icons/the-house/ac-elefantes.png",
  },
  {
    name: "welcome_pack_title",
    description: "welcome_pack_description",
    imageSrc: "/images/icons/the-house/welcome-pack-elefantes.png",
  },
  {
    name: "local_guide_title",
    description: "local_guide_description",
    imageSrc: "/images/icons/the-house/guide-elefantes.png",
  },
  {
    name: "safety_box_title",
    description: "safety_box_description",
    imageSrc: "/images/icons/the-house/safety-box-elefantes.png",
  },
  {
    name: "smart_tv_title",
    description: "smart_tv_description",
    imageSrc: "/images/icons/the-house/TV-elefantes.png",
  },
  {
    name: "board_games_title",
    description: "board_games_description",
    imageSrc: "/images/icons/the-house/chess-elefantes.png",
  },
];

onMounted(() => {
  // @ts-ignore
  $glightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
  });
});
</script>
