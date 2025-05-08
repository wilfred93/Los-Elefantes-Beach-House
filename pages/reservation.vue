<template>
  <div class="mx-auto max-w-7xl p-4 lg:px-8">
    <h1 class="primary--title my-0 text-5xl mb-5">Reservations</h1>

    <h2 class="font-montserrat-semiBold text-xl">📅 Reserve Your Stay</h2>
    <p class="my-2">
      Enjoy the best rates and a more personal booking experience by reserving
      directly with us!
    </p>
    <ul>
      <li>
        <span class="font-montserrat-semiBold">Email:</span>
        wilfred.lazaro@gmail.com
      </li>
      <li>
        <span class="font-montserrat-semiBold">WhatsApp:</span>
        Click here to contact us
      </li>
      <li>
        <span class="font-montserrat-semiBold">Phone:</span>
        +34 684055732
      </li>
    </ul>
    <p class="my-2">
      Below, you’ll find the updated calendar with available dates. We recommend
      booking early to secure your preferred dates.
    </p>
    <p class="my-2">
      If needed, you can also book through Booking.com or Airbnb, but direct
      reservations help us offer you the best possible price with no platform
      fees.
    </p>
    <div class="max-w-xl">
      <div id="smoobuApartment1386884en" class="calendarWidget">
        <div
          class="calendarContent"
          data-load-calendar-url="https://login.smoobu.com/en/cockpit/widget/single-calendar/1386884"
          data-verification="2bec40e9a77bbf372fad0313dfa8e86e81aa0d979d7b1d0623379e0b340c9cb0"
          data-baseUrl="https://login.smoobu.com"
          data-disable-css="false"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  headerTheme: "dark",
});
useHead({
  bodyAttrs: {
    class: "bg-elefantes-yellow",
  },
});

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://login.smoobu.com/js/Apartment/CalendarWidget.js";
  script.async = true;
  document.getElementById("smoobuApartment1386884en")?.appendChild(script);
});
</script>
