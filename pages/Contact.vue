<template>
  <div class="container mx-auto md:px-0 px-5 bg-elefantes-yellow">
    <img
      src="/public/images/LosElefantesLogo.svg"
      class="mx-auto my-6 w-[222px]"
      alt="Los Elefantes - Logo"
    />
    <div class="max-w-screen-lg mx-auto">
      <LanguageSwitcher />
      <!-- Contact Details Section -->
      <Collapsable :title="$t('contact_page_title')">
        <p class="mb-4">{{ $t("contact_intro") }}</p>

        <div class="mb-6">
          <h3 class="font-montserrat-semiBold text-lg mb-2">
            {{ $t("contact_name_1_title") }}
          </h3>
          <p>{{ $t("contact_name_1_value") }}</p>
          <p>
            <a
              :href="'tel:' + $t('contact_phone_1_value')"
              class="text-light hover:text-elefantes-orange"
              >{{ $t("contact_phone_1_value") }}</a
            >
          </p>
          <p>
            <a
              :href="'mailto:' + $t('contact_email_1_value')"
              class="text-light hover:text-elefantes-orange"
              >{{ $t("contact_email_1_value") }}</a
            >
          </p>
        </div>

        <div>
          <h3 class="font-montserrat-semiBold text-lg mb-2">
            {{ $t("contact_name_2_title") }}
          </h3>
          <p>{{ $t("contact_name_2_value") }}</p>
          <p>
            <a
              :href="'tel:' + $t('contact_phone_2_value')"
              class="text-light hover:text-elefantes-orange"
              >{{ $t("contact_phone_2_value") }}</a
            >
          </p>
        </div>
      </Collapsable>
    </div>
  </div>
</template>

<script setup lang="ts">
import Collapsable from "../components/shared/Collapsable.vue";
import { useHead } from "#imports";
import LanguageSwitcher from "../components/shared/LanguageSwitcher.vue";

definePageMeta({
  headerTheme: "dark",
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
