<script setup>
	import { onMounted } from "vue";
  import PhotosSlideshow from '~/components/pages/home/PhotosSlideshow.vue';
  import AmenitiesAndTestimonies from '~/components/pages/home/AmenitiesAndTestimonies.vue';
  import Workation from '~/components/pages/home/Workation.vue';
  import PersonalWelcome from '~/components/pages/home/PersonalWelcome.vue';
  import Newsletter from '~/components/pages/home/Newsletter.vue';
  import LocalGuide from '~/components/pages/home/LocalGuide.vue';
  import Footer from '~/components/pages/home/Footer.vue';
  import Intro from '~/components/pages/home/Intro.vue';

  import 'swiper/css';
	useHead({
	bodyAttrs: {
		class: "bg-elefantes-yellow",
	},
	});
	onMounted(() => { 
    const menuBtn = document.getElementById('menuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    let isMenuOpen = false;
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      
      // Toggle menu overlay
      menuOverlay.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
      
      // Animate hamburger to X
      const spans = menuBtn.getElementsByTagName('span');
      if (isMenuOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
      
      // Prevent body scrolling when menu is open
      document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    });
	});
</script>

<template>
    <header class="relative h-screen">
      <button id="menuBtn" class="absolute top-8 left-12 z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5">
        <span class="w-8 h-0.5 bg-elefantes-yellow transition-all duration-300"></span>
        <span class="w-8 h-0.5 bg-elefantes-yellow transition-all duration-300"></span>
        <span class="w-8 h-0.5 bg-elefantes-yellow transition-all duration-300"></span>
      </button>
      <div id="menuOverlay" class="fixed inset-0 bg-elefantes-green -translate-x-full transition-transform duration-500 ease-in-out z-40 flex items-center justify-center !transition-none">
        <nav class="text-center">
          <ul class="space-y-8">
            <li><a href="#" class="text-4xl text-elefantes-yellow hover:text-elefantes-orange transition-colors">Home</a></li>
            <li><a href="#" class="text-4xl text-elefantes-yellow hover:text-elefantes-orange transition-colors">About</a></li>
            <li><a href="#" class="text-4xl text-elefantes-yellow hover:text-elefantes-orange transition-colors">Gallery</a></li>
            <li><a href="#" class="text-4xl text-elefantes-yellow hover:text-elefantes-orange transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
      <picture class="absolute inset-0 w-full h-full z-0">
          <source srcset="/images/maspalomas-dunes-bg.jpg" media="(min-width: 1024px)">
          <source srcset="/images/maspalomas-dunes-bg.jpg" media="(min-width: 768px)">
          <img src="/images/maspalomas-dunes-bg.jpg" alt="Background Image" class="object-cover w-full h-full">
      </picture>
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="container mx-auto flex flex-col items-center h-screen ">
        <img src="/images/LosElefantesLogo.svg" alt="Logo" class="mt-[18vh] h-48 mb-8 z-10">
        <button class="bg-blue-500 hover:bg-blue-700 text-elefantes-yellow font-bold py-2 px-4 rounded z-10">
          Click Me
        </button>
      </div>
      <div class="absolute top-0 left-0 mt-16 pl-8 md:pl-12">
        <ul class="mt-8 hidden md:block">
            <li class="leading-5 h-11 w-11 p-[11px] mb-5 rounded-full border border-elefantes-yellow text-elefantes-yellow">DE</li>
            <li class="leading-5 h-11 w-11 p-[11px] mb-5 rounded-full border border-elefantes-yellow text-elefantes-yellow">AT</li>
        </ul>
      </div>
      <div class="absolute bottom-0 left-0 w-full md:pl-12 text-elefantes-yellow">
        <p class="montserrat-light  text-center md:text-left ">
          Sun, Sand & Serenity <br>
          Awaits You
        </p>
        <img class="hidden md:block  mb-9" src="/images/arrow-right.svg" alt="arrow-right">
        <!-- <img class="my-6 mx-auto md:hidden md:mb-9" src="/images/arrow-down.svg" alt="arrow-down"> -->
      </div>
    <div class="absolute mt-12 top-0 md:top-auto md:bottom-0 right-0 mb-12 mr-8 md:mr-12 text-elefantes-yellow text-right z-10">
      <p class="text-4xl font-bold mb-1">27°C</p>
      <p class="text-lg">Maspalomas</p>
    </div>
    </header>
    <Intro />
    <PhotosSlideshow />
    <AmenitiesAndTestimonies />
    <Workation />
    <PersonalWelcome />
    <Newsletter />
    <LocalGuide />
    <Footer />
</template>