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
      <div
        class="mx-auto max-w-xl grid grid-cols-1 bg-elefantes-green gap-x-8 gap-y-6 sm:grid-cols-2 p-4 rounded-lg mt-12 text-elefantes-yellow"
      >
        <div>
          <label
            for="first-name"
            class="block text-sm/6 font-semibold text-elefantes-yellow"
            >First name *</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              v-model="inputName"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-elefantes-green outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm/6 font-semibold text-elefantes-yellow"
            >Email *</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="inputEmail"
              class="text-elefantes-green block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm/6 font-semibold text-elefantes-yellow"
            >Message *</label
          >
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              v-model="inputMessage"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-elefantes-green outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            ></textarea>
          </div>
        </div>
        <div class="mt-10">
          <button
            @click="onSubmitContactForm"
            class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from "#imports";
import { sendContactMessage } from "~/api/apiFunctions";

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

const inputName = ref("");
const inputEmail = ref("");
const inputMessage = ref("");

const onSubmitContactForm = async () => {
  console.log("onSubmitContactForm");
  const response = await sendContactMessage({
    name: inputName.value,
    email: inputEmail.value,
    message: inputMessage.value,
  });
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
