<script setup>
import { onMounted } from "vue";
import PhotosSlideshow from "~/components/pages/home/PhotosSlideshow.vue";
import AmenitiesAndTestimonies from "~/components/pages/home/AmenitiesAndTestimonies.vue";
import Workation from "~/components/pages/home/Workation.vue";
import PersonalWelcome from "~/components/pages/home/PersonalWelcome.vue";
import Newsletter from "~/components/pages/home/Newsletter.vue";
import LocalGuide from "~/components/pages/home/LocalGuide.vue";
import Footer from "~/components/pages/home/Footer.vue";
import Intro from "~/components/pages/home/Intro.vue";
import HeroSection from "~/components/pages/home/HeroSection.vue";

import "swiper/css";
useHead({
  bodyAttrs: {
    class: "bg-elefantes-yellow",
  },
});
</script>

<template>
  <HeroSection />
  <Intro />
  <PhotosSlideshow />
  <AmenitiesAndTestimonies />
  <Workation />
  <PersonalWelcome />
  <Newsletter />
  <LocalGuide />
  <Footer />
</template>
