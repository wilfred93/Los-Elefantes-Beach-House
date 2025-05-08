<template>
  <footer>
    <section class="md:border md:border-elefantes-green">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-8 bg-elefantes-green">
          <div class="grid grid-cols-12 md:grid-cols-3 py-5 h-full">
            <div
              class="col-span-12 md:col-span-1 py-5 h-full flex md:flex-col justify-center items-center gap-5"
            >
              <img
                class="max-w-[40%] md:max-w-[60%]"
                src="/public/images/booking-logo.png"
                alt="Los Elefantes Beach House - Booking Logo"
              />
              <img
                class="max-w-[30%] md:max-w-[40%]"
                src="/public/images/airbnb-logo.png"
                alt="Los Elefantes Beach House - Airbnb Logo"
              />
            </div>
            <div
              v-for="(menu, index) in footerMenus"
              :key="index"
              class="col-span-6 md:col-span-1 flex justify-center items-center"
            >
              <nav>
                <NuxtLink
                  :to="localePath(item.page)"
                  v-for="(item, itemIndex) in menu"
                  :key="itemIndex"
                  class="py-2 text-white block hover:text-elefantes-orange"
                >
                  {{ $t(item.slugKey) }}
                </NuxtLink>
              </nav>
            </div>
          </div>
        </div>
        <div
          class="col-span-12 md:col-span-4 flex items-center justify-center py-5"
        >
          <img
            class="mx-auto max-w-[40%] md:max-w-[50%]"
            src="/images/LosElefantesLogo.svg"
            alt="Elefantes Logo"
          />
        </div>
      </div>
    </section>
    <section class="text-center px-5 pb-6 pt-0 md:pt-6">
      <p>© 2025 Los Elefantes Beach House. All rights reserved.</p>
    </section>
  </footer>
</template>

<script setup>
const localePath = useLocalePath();
const footerMenus = [
  [
    { page: "theHouse", slugKey: "slug_theHouse" },
    { page: "bookings", slugKey: "slug_bookings" },
    { page: "contact", slugKey: "slug_contact" },
  ],
  [
    { page: "legalNotice", slugKey: "slug_legalNotice" },
    { page: "privacyPolicy", slugKey: "slug_privacyPolicy" },
    { page: "bookingPolicy", slugKey: "slug_bookingPolicy" },
  ],
];
</script>
