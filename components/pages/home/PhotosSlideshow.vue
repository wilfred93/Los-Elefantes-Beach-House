<script setup>
import { onMounted } from 'vue';
import { Autoplay } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';

onMounted(() => {
  const swiper = new Swiper('#photos-slideshow', {
    modules: [Autoplay],
    slidesPerView: 1.5,
    pagination: {
      el: ".swiper-pagination",
    },
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      waitForTransition: true,
      reverseDirection: true,
    },
    speed: 9000,
    loop: true,
    spaceBetween: 2,
    breakpoints: {
      640: { 
        slidesPerView: 2,
      },
      1024: { 
        slidesPerView: 3,
      }
    }
  });
});
</script>

<template>
  <section class="mt-16 my-5 container px-5">
    <div class="unit-images-wrapper border border-elefantes-orange rounded-lg p-2.5">
      <div id="photos-slideshow" class="swiper p-3">
        <div class="swiper-wrapper ease-linear" style="transition-timing-function: linear;">
          <div class="swiper-slide rounded-lg">
            <picture class="rounded-lg">
              <source srcset="/images/apartment/slider.webp" type="image/webp">
              <img src="/images/apartment/slider.webp" alt="Apartment Image 1">
            </picture>
          </div>
          <div class="swiper-slide rounded-lg">
            <picture>
              <source srcset="/images/apartment/slider01.webp" type="image/webp">
              <img src="/images/apartment/slider01.webp" alt="Apartment Image 2">
            </picture>
          </div>
          <div class="swiper-slide rounded-lg">
            <picture>
              <source srcset="/images/apartment/slider01.webp" type="image/webp">
              <img src="/images/apartment/slider01.webp" alt="Apartment Image 2">
            </picture>
          </div>
          <div class="swiper-slide rounded-lg">
            <picture>
              <source srcset="/images/apartment/slider01.webp" type="image/webp">
              <img src="/images/apartment/slider01.webp" alt="Apartment Image 2">
            </picture>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  </section>
</template> 