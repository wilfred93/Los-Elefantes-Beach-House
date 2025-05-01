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
          <img :src="incentive.imageSrc" alt="" class="h-24 w-auto" />
          <h3 class="font-montserrat-semiBold mt-6 text-xl">
            {{ incentive.name }}
          </h3>
          <p class="mt-2 text-sm">
            {{ incentive.description }}
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
          :key="client.id"
          class="overflow-hidden rounded-xl border border-gray-200"
        >
          <div
            class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6"
          >
            <img
              :src="client.imageUrl"
              :alt="client.name"
              class="size-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div class="text-sm/6 font-medium text-gray-900">
              {{ client.name }}
            </div>
          </div>
          <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
            <div class="flex justify-between gap-x-4 py-3">
              <dt class="text-gray-500">Last invoice</dt>
              <dd class="text-gray-700">
                <time :datetime="client.lastInvoice.dateTime">{{
                  client.lastInvoice.date
                }}</time>
              </dd>
            </div>
            <div class="flex justify-between gap-x-4 py-3">
              <dt class="text-gray-500">Amount</dt>
              <dd class="flex items-start gap-x-2">
                <div class="font-medium text-gray-900">
                  {{ client.lastInvoice.amount }}
                </div>
                <div
                  :class="[
                    statuses[client.lastInvoice.status],
                    'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
                  ]"
                >
                  {{ client.lastInvoice.status }}
                </div>
              </dd>
            </div>
          </dl>
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
    id: 1,
    name: "Tuple",
    imageUrl: "https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "SavvyCal",
    imageUrl:
      "https://tailwindcss.com/plus-assets/img/logos/48x48/savvycal.svg",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "$14,000.00",
      status: "Paid",
    },
  },
  {
    id: 3,
    name: "Reform",
    imageUrl: "https://tailwindcss.com/plus-assets/img/logos/48x48/reform.svg",
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      amount: "$7,600.00",
      status: "Paid",
    },
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
    name: "Self Check-In",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg",
  },
  {
    name: "High Speed Internet",
    description:
      "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-chat-light.svg",
  },
  {
    name: "Air Conditioning",
    description:
      "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg",
  },
  {
    name: "Welcome Pack",
    description:
      "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-fast-checkout-light.svg",
  },
  {
    name: "Local Guide",
    description:
      "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg",
  },
  {
    name: "Safety Box",
    description:
      "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg",
  },
  {
    name: "Smart TV",
    description:
      "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg",
  },
  {
    name: "Board Games",
    description:
      "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg",
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
