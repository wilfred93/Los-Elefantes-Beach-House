<template>
  <button
    id="menuBtn"
    class="absolute top-8 left-12 z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
  >
    <span
      :class="{
        'bg-elefantes-green': theme === 'dark',
        'bg-elefantes-yellow': isMenuOpen || theme !== 'dark',
      }"
      class="w-8 h-0.5 transition-all duration-300"
    ></span>
    <span
      :class="{
        'bg-elefantes-green': theme === 'dark',
        'bg-elefantes-yellow': isMenuOpen || theme !== 'dark',
      }"
      class="w-8 h-0.5 transition-all duration-300"
    ></span>
    <span
      :class="{
        'bg-elefantes-green': theme === 'dark',
        'bg-elefantes-yellow': isMenuOpen || theme !== 'dark',
      }"
      class="w-8 h-0.5 transition-all duration-300"
    ></span>
  </button>
  <div
    id="menuOverlay"
    class="fixed inset-0 bg-elefantes-green -translate-x-full transition-transform duration-500 ease-in-out z-40 flex items-center justify-center !transition-none"
  >
    <nav class="text-center font-katibeh text-5xl">
      <ul class="space-y-4">
        <li v-for="item in navigationItems">
          <NuxtLink
            :to="localePath(item.page)"
            class="hover:text-elefantes-orange transition-colors"
            :class="{
              'text-elefantes-orange cursor-default':
                route.path === localePath(item.page),
              'text-elefantes-yellow': route.path !== localePath(item.page),
            }"
          >
            {{ $t(item.slugKey) }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

console.log("=======");
console.log(route.path);

defineProps({
  theme: {
    type: String,
    default: "light",
  },
});

const isMenuOpen = ref(false);

onMounted(() => {
  const menuBtn = document.getElementById("menuBtn");
  const menuOverlay = document.getElementById("menuOverlay");
  menuOverlay.classList.remove("!transition-none");

  menuBtn.addEventListener("click", () => {
    isMenuOpen.value = !isMenuOpen.value;

    // Toggle menu overlay
    menuOverlay.style.transform = isMenuOpen.value
      ? "translateX(0)"
      : "translateX(-100%)";

    // Animate hamburger to X
    const spans = menuBtn.getElementsByTagName("span");
    if (isMenuOpen.value) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }

    // Prevent body scrolling when menu is open
    document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
  });
});

const localePath = useLocalePath();
const navigationItems = [
  { page: "index", slugKey: "slug_home" },
  { page: "theHouse", slugKey: "slug_theHouse" },
  { page: "reservation", slugKey: "slug_reservation" },
  { page: "contact", slugKey: "slug_contact" },
  { page: "welcome", slugKey: "slug_welcome" },
];
</script>
