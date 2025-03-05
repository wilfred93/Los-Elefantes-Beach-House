<script setup>
import { onMounted } from 'vue';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

onMounted(() => {
  new Swiper('#testimonial-slideshow', {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination2',
      clickable: true
    }
  });
});
</script>

<template>
  <section class="pb-28 px-5 relative overflow-hidden">
    <div class="container mx-auto mt-16 lg:mt-28 relative">
      <div class="hidden md:block absolute w-full top-[40px] md:top-[40px] 2xl:top-[50px] max-w-[960px] arrow-background">
        <img src="/images/arrow-ladder.svg" alt="">
      </div>
      <!-- Amenities -->
      <div class="flex flex-wrap max-w-4xl mx-auto text-center">
        <div class="basis-full md:px-9 md:basis-1/3">
          <h2 class="primary--title my-0 md:mt-6 lg:mt-2 md:text-4xl lg:text-5xl">Everything you need for a perfect vacation</h2>
        </div>
        <div class="md:px-9 lg:p-0 basis-1/2 md:basis-1/3 md:text-base lg:text-xl md:leading-8 lg:leading-9">
          <ul class="md:mt-12 lg:mt-16">
            <li>Fully Equiped kitchen</li>
            <li>Soap & Shampoo</li>
            <li>Coffee & Tea</li>
            <li>Board Games</li>
          </ul>
        </div>
        <div class="md:px-9 lg:p-0 basis-1/2 md:basis-1/3 md:text-base lg:text-xl md:leading-8 lg:leading-9">
          <ul class="md:mt-24 lg:mt-32">
            <li>Fully Equiped kitchen</li>
            <li>Soap & Shampoo</li>
            <li>Coffee & Tea</li>
            <li>Board Games</li>
          </ul>
        </div>
      </div>
      <!-- Testimonials -->
      <div class="mt-16 md:mt-[75px] lg:mt-28">
        <div class="bg-elefantes-green rounded-xl lg:max-w-[856px] lg:mr-[130px] xl:max-w-[844px] xl:mr-[277px] mx-auto md:mr-[70px] md:mt-[80px] text-white text-center py-12 px-8 2xl:ml-[268px] relative">
          <div class="hidden sm:block absolute top-12 left-12 md:top-24 lg:top-20 lg:left-20">
            <img class="md:h-8 lg:h-full" src="/images/quote.svg" alt="open quotation">
          </div>
          <div class="hidden sm:block absolute bottom-12 right-12 md:bottom-24 lg:bottom-20 lg:right-20 rotate-180">
            <img class="md:h-8 lg:h-full" src="/images/quote.svg" alt="open quotation">
          </div>
          <h2 class="primary--title mt-0 mb-3">We love our customers!</h2>
          <p class="-mt-[18px] mb-[20px] opacity-50 text-sm">And they love us back <img class="inline-block w-3.5 mb-0.5" src="/images/heart-icon.svg" alt="heart icon"></p>
          <div id="testimonial-slideshow" class="overflow-hidden relative z-50">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(testimonial, index) in testimonials" :key="index">
                <p class="sm:px-12 leading-7 montserrat-light">{{ testimonial.text }}</p>
                <p class="mt-3 text-elefantes-orange">{{ testimonial.author }}</p>
                <img class="mx-auto" src="/images/spain-flag.png" alt="Spain flag">
              </div>
            </div>
          </div>
          <div class="swiper-pagination2 absolute !bottom-5"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          text: "The host was very accomodating and wanted to make sure I didn't need anything and that I had a good stay. The flat was very clean and had everything for a good stay, kitchen, pool, good wifi etc... Great quality for the price! By the beach and the yumbo center",
          author: "Laurent"
        },
        {
          text: "The host was very accomodating and wanted to make sure I didn't need anything and that I had a good stay. The flat was very clean and had everything for a good stay, kitchen, pool, good wifi etc... Great quality for the price! By the beach and the yumbo center",
          author: "Julio Cesar"
        },
        // Add more testimonials as needed
      ]
    }
  }
}
</script> 