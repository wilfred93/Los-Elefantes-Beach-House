<script setup>
import { onMounted } from "vue";

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
</template>
