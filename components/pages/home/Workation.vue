<script setup>
import { onMounted } from 'vue';
import Swiper from 'swiper';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

onMounted(() => {
  new Swiper("#workationSection", {
    modules:[EffectCoverflow, Pagination],
    effect: "coverflow",
    spaceBetween: 100,
    grabCursor: true,
    centeredSlides: true,
    centerInsufficientSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      modifier: 1,
      scale: 0.8,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
  const settings = {
  classes: {
    iframe: ['w-full','h-[330px]']
  }
};

	const videoElement = document.querySelector('.js-video');

  const videoID = videoElement.dataset.videoId;

  videoElement.addEventListener('click', function () {
      const iframe = document.createElement('iframe');
      settings.classes.iframe.forEach(className => {
          iframe.classList.add(className);
      });
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('src', `https://www.youtube.com/embed/JGwWNGJdvx8?rel=0&autoplay=1`);

      this.innerHTML = '';
      this.appendChild(iframe);
  });
});
</script>

<template>
  <section class="bg-workation bg-cover pb-6 pt-20 relative bg-fixed">
    <div class="absolute inset-0 bg-black opacity-40 w-full h-full z-0"></div>
    <div class="mx-auto relative z-10">
      <div id="workationSection" class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div v-for="(slide, index) in slides" :key="index" class="swiper-slide rounded-lg px-5 max-w-[600px] max-h-[330px] js-video">
            <div class="bg-wrapper bg-[url('/images/remote_workers_map.jpg')] bg-cover rounded-lg">
              <div class="inner-wrapper h-[330px] flex items-center bg-[#02576bbd] rounded-lg border-2 solid border-elefantes-yellow">
                <div class="grow">
                  <p class="primary--title my-0 text-elefantes-yellow">{{ slide.title }}</p>
                  <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24">
                    <path fill="#f4ebcb" d="m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination mt-6 !static font-katibeh text-2xl !text-elefantes-green bg-opacity-70 bg-elefantes-yellow !w-10 h-10 mx-auto rounded-full flex items-center justify-center pt-2.5"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { title: "Discovery why remote workers choose Gran Canaria" },
        { title: "A Farytale Island" },
        { title: "360 days of Discoveries" },
        { title: "Creative digital nomads working from Gran Canaria" }
      ]
    }
  }
}
</script> 