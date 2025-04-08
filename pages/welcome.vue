<template>
  <div class="container mx-auto md:px-0 px-5 bg-elefantes-yellow">
    <img
      src="/public/images/LosElefantesLogo.svg"
      class="mx-auto my-6 w-[222px]"
      alt="Los Elefantes - Logo"
    />
    <div class="max-w-screen-lg mx-auto">
      <LanguageSwitcher />
      <!-- Address Section -->
      <Collapsable :title="$t('address_title')">
        <p>{{ $t("address_intro") }}</p>
        <div class="container leading-7">
          <p class="font-montserrat-semiBold mt-3.5">
            {{ $t("floor_access_title") }}
          </p>
          <p>
            {{ $t("floor_access_address") }}
          </p>
          <a
            class="italic text-light hover:text-elefantes-orange"
            href="https://goo.gl/maps/bHfMYzePFe8s61DT7"
            target="_blank"
            >{{ $t("floor_access_map_link") }}</a
          >

          <p class="font-montserrat-semiBold">{{ $t("pool_access_title") }}</p>
          <p>{{ $t("pool_access_address") }}</p>
          <a
            class="italic text-light hover:text-elefantes-orange"
            href="https://goo.gl/maps/fGLpeuCBsEHkzAVq9"
            target="_blank"
            >{{ $t("pool_access_map_link") }}</a
          >

          <p class="my-3">{{ $t("address_key_note") }}</p>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1ebF6_zh8oF7j8n10165fvrqAWSflfuk&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </div>
      </Collapsable>

      <!-- Check-In Section -->
      <Collapsable :title="$t('check_in_title')">
        <p class="font-montserrat-semiBold">{{ $t("check_in_time") }}</p>
        <p class="mb-3.5 italic text-light">
          {{ $t("check_in_early_note") }}
        </p>
        <div class="container leading-7">
          <p class="font-bold mt-2">{{ $t("instructions_title") }}</p>
          <ol class="list-decimal ml-8">
            <li class="mb-2">{{ $t("instruction_step_1") }}</li>
            <li class="mb-2">{{ $t("instruction_step_2") }}</li>
            <li class="mb-2">{{ $t("instruction_step_3") }}</li>
            <li class="mb-2">{{ $t("instruction_step_4") }}</li>
            <li class="mb-2">{{ $t("instruction_step_5") }}</li>
            <li class="mb-2">{{ $t("instruction_step_6") }}</li>
            <li class="mb-2">{{ $t("instruction_step_7") }}</li>
            <li class="mb-2">{{ $t("instruction_step_8") }}</li>
            <li class="mb-2">{{ $t("instruction_step_9") }}</li>
          </ol>

          <p class="mt-6">{{ $t("instructions_images_note") }}</p>
          <img
            class="mx-auto"
            src="/public/images/welcome/entrance.png"
            alt="Los Elefantes - Entrance"
          />
          <img
            class="mx-auto"
            src="/public/images/welcome/lock.png"
            alt="Lock"
          />
        </div>
      </Collapsable>

      <!-- Check-out Section -->
      <Collapsable :title="$t('check_out_title')">
        <p class="font-montserrat-semiBold">{{ $t("check_out_time") }}</p>
        <p class="mb-3.5 italic text-light">
          {{ $t("check_out_late_note") }}
        </p>
        <p class="mt-3">{{ $t("check_out_key_note") }}</p>
      </Collapsable>

      <!-- Wifi Section -->
      <Collapsable :title="$t('wifi_title')">
        <p class="font-montserrat-semiBold">
          Name: <span class="font-bold">{{ $t("wifi_name_1") }}</span>
        </p>
        <p class="mt-1 font-montserrat-semiBold">
          Password: <span class="font-bold">{{ $t("wifi_password_1") }}</span>
        </p>

        <p class="mt-5 font-montserrat-semiBold">
          Name: <span class="font-bold">{{ $t("wifi_name_2") }}</span>
        </p>
        <p class="mt-1 font-montserrat-semiBold">
          Password: <span class="font-bold">{{ $t("wifi_password_2") }}</span>
        </p>
      </Collapsable>

      <!-- House Rules Section -->
      <Collapsable :title="$t('rules_title')">
        <p class="font-montserrat-semiBold">{{ $t("rules_intro") }}</p>
        <ol class="list-decimal ml-8 mt-3">
          <li class="mb-2">{{ $t("rule_1") }}</li>
          <li class="mb-2">{{ $t("rule_2") }}</li>
          <li class="mb-2">{{ $t("rule_3") }}</li>
          <li class="mb-2">{{ $t("rule_4") }}</li>
          <li class="mb-2">{{ $t("rule_5") }}</li>
          <li class="mb-2">{{ $t("rule_6") }}</li>
        </ol>
        <p class="mt-2">{{ $t("rules_outro") }}</p>
      </Collapsable>

      <!-- Contact Section -->
      <Collapsable :title="$t('contact_title')">
        <p>{{ $t("contact_name_1") }}</p>
        <ul>
          <li>
            <a href="tel:+34684055732">{{ $t("contact_phone_1") }}</a>
          </li>
          <li>wilfred.lazaro@gmail.com</li>
        </ul>
        <p class="mt-3.5">{{ $t("contact_name_2") }}</p>
        <ul>
          <li>
            <a href="+34646779320">{{ $t("contact_phone_2") }}</a>
          </li>
        </ul>
      </Collapsable>

      <!-- About Section -->
      <Collapsable :title="$t('about_title')">
        <p>{{ $t("about_welcome") }}</p>
        <p class="mt-6">{{ $t("about_intro") }}</p>
      </Collapsable>
    </div>
  </div>
</template>

<script setup lang="ts">
import Collapsable from "../components/shared/Collapsable.vue";
import { useHead } from "#imports";
import LanguageSwitcher from "../components/shared/LanguageSwitcher.vue";

useHead({
  bodyAttrs: {
    class: "bg-elefantes-yellow",
  },
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
