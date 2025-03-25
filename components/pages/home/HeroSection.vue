<script setup>
import { onMounted } from "vue";
import Temperature from "~/components/pages/home/Temperature.vue";
import LanguageSelector from "~/components/shared/LanguageSelector.vue";

onMounted(() => {
  const menuBtn = document.getElementById("menuBtn");
  const menuOverlay = document.getElementById("menuOverlay");
  menuOverlay.classList.remove("!transition-none");
  let isMenuOpen = false;
  menuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    // Toggle menu overlay
    menuOverlay.style.transform = isMenuOpen
      ? "translateX(0)"
      : "translateX(-100%)";

    // Animate hamburger to X
    const spans = menuBtn.getElementsByTagName("span");
    if (isMenuOpen) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }

    // Prevent body scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  });
});
</script>

<template>
  <header class="relative h-screen">
    <button
      id="menuBtn"
      class="absolute top-8 left-12 z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
    >
      <span
        class="w-8 h-0.5 bg-elefantes-yellow transition-all duration-300"
      ></span>
      <span
        class="w-8 h-0.5 bg-elefantes-yellow transition-all duration-300"
      ></span>
      <span
        class="w-8 h-0.5 bg-elefantes-yellow transition-all duration-300"
      ></span>
    </button>
    <div
      id="menuOverlay"
      class="fixed inset-0 bg-elefantes-green -translate-x-full transition-transform duration-500 ease-in-out z-40 flex items-center justify-center !transition-none"
    >
      <nav class="text-center font-katibeh text-5xl">
        <ul class="space-y-4">
          <li>
            <a
              href="#"
              class="text-elefantes-yellow hover:text-elefantes-orange transition-colors"
              >{{ $t("nav_home") }}</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-elefantes-yellow hover:text-elefantes-orange transition-colors"
              >{{ $t("nav_bookings") }}</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-elefantes-yellow hover:text-elefantes-orange transition-colors"
              >{{ $t("nav_property") }}</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-elefantes-yellow hover:text-elefantes-orange transition-colors"
              >{{ $t("nav_contact") }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <picture class="absolute inset-0 w-full h-full z-0">
      <source
        srcset="/images/maspalomas-dunes-bg.jpg"
        media="(min-width: 1024px)"
      />
      <source
        srcset="/images/maspalomas-dunes-bg.jpg"
        media="(min-width: 768px)"
      />
      <img
        src="/images/maspalomas-dunes-bg.jpg"
        alt="Background Image"
        class="object-cover w-full h-full"
      />
    </picture>
    <div class="absolute inset-0 bg-black opacity-30"></div>
    <div class="container mx-auto flex flex-col items-center h-screen">
      <img
        src="/images/LosElefantesLogo.svg"
        alt="Logo"
        class="mt-[18vh] h-48 mb-8 z-10"
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-elefantes-yellow font-bold py-2 px-4 rounded z-10"
      >
        Check Availability Now
      </button>
    </div>
    <div class="absolute top-8 right-20 pl-8 md:pl-12">
      <LanguageSelector />
    </div>
    <div class="absolute bottom-0 left-0 w-full md:pl-12 text-elefantes-yellow">
      <p
        class="montserrat-light text-center md:text-left"
        v-html="$t('arrow_claim')"
      ></p>
      <img
        class="hidden md:block mb-9"
        src="/images/arrow-right.svg"
        alt="arrow-right"
      />
    </div>
    <div
      class="absolute mt-12 top-0 md:top-auto md:bottom-0 right-0 mb-3.5 mr-8 md:mr-12 text-elefantes-yellow text-right z-10"
    >
      <Temperature />
    </div>
  </header>
</template>
