<template>
  <section
    class="bg-[url('/public/images/palm-trees-bg.png')] bg-cover bg-center py-6 md:py-15"
  >
    <div class="mx-auto max-w-7xl p-4 lg:px-8">
      <h1 class="primary--title my-0">Contact</h1>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center text-center"
      >
        <div class="bg-elefantes-green text-elefantes-yellow rounded-lg p-4">
          <h2 class="secondary--title">Email</h2>
          <p>wilfred.lazaro@gmail.com</p>
        </div>
        <div class="bg-elefantes-green text-elefantes-yellow rounded-lg p-4">
          <h2 class="secondary--title">Email</h2>
          <p>wilfred.lazaro@gmail.com</p>
        </div>
        <div class="bg-elefantes-green text-elefantes-yellow rounded-lg p-4">
          <h2 class="secondary--title">Email</h2>
          <p>wilfred.lazaro@gmail.com</p>
        </div>
      </div>
      <div class="isolate px-6">
        <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
          <div
            class="grid grid-cols-1 bg-elefantes-green gap-x-8 gap-y-6 sm:grid-cols-2 p-4 rounded-lg text-elefantes-yellow"
          >
            <div>
              <label
                for="first-name"
                class="block text-sm/6 font-semibold text-elefantes-yellow"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-elefantes-yellow outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm/6 font-semibold text-elefantes-yellow"
                >Last name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-elefantes-yellow outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm/6 font-semibold text-elefantes-yellow"
                >Email</label
              >
              <div class="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-elefantes-yellow outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm/6 font-semibold text-elefantes-yellow"
                >Message</label
              >
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-elefantes-yellow outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                ></textarea>
              </div>
            </div>
            <div class="flex gap-x-4 sm:col-span-2">
              <div class="flex h-6 items-center">
                <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                <button
                  type="button"
                  class="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="switch-1-label"
                >
                  <span class="sr-only">Agree to policies</span>
                  <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" -->
                  <span
                    aria-hidden="true"
                    class="size-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  ></span>
                </button>
              </div>
              <label class="text-sm/6 text-gray-600" id="switch-1-label">
                By selecting this, you agree to our
                <a href="#" class="font-semibold text-indigo-600"
                  >privacy&nbsp;policy</a
                >.
              </label>
            </div>
          </div>
          <div class="mt-10">
            <button
              type="submit"
              class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Collapsable from "../components/shared/Collapsable.vue";
import { useHead } from "#imports";
import LanguageSwitcher from "../components/shared/LanguageSwitcher.vue";

definePageMeta({
  headerTheme: "dark",
  mainClass: "py-0",
});
useHead({
  title: "Contact - Los Elefantes", // Consider localizing this too if needed
  bodyAttrs: {
    class: "bg-elefantes-yellow",
  },
});

// Define page meta for Nuxt routing if necessary
// definePageMeta({
//   // Example: alias: ['/contacto'] // If using localized routes
// });
</script>

<style scoped>
/* Add any additional styles here */
</style>
