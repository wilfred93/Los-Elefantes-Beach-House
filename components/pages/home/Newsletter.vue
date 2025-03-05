<template>
  <section class="bg-elefantes-green py-8 px-5">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h2 class="primary--title mt-0 mb-0 md:text-left">Deals & Discounts</h2>
          <input 
            v-model="email" 
            type="text" 
            class="w-full p-3 rounded-lg" 
            placeholder="Enter your email"
          >
          <button 
            @click="subscribe" 
            class="bg-elefantes-orange text-elefantes-yellow font-bold py-2 px-4 rounded w-full lg:w-fit mt-4"
          >
            Subscribe
          </button>
        </div>
        <div class="flex justify-center items-center">
          <p class="text-white text-center">
            Trust me! It's definitely worth it. No spam. Just great deals and substantial discounts 🤑
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const subscribe = () => {
  // Add your subscription logic here
  console.log('Subscribing email:', email.value)
}
</script> 