<template>
  <div
    id="language-switcher"
    class="flex relative"
    :class="{
      'text-elefantes-green': theme === 'dark',
      'text-elefantes-yellow': theme === 'light',
    }"
  >
    <button
      class="flex items-center px-4 py-2 cursor-pointer"
      @click="onToggleDropdown"
    >
      <LanguageIcon class="mr-2 w-6 h-6" />
      <span class="mr-2">
        {{ currentLocaleName?.name }}
      </span>
      <TriangleDownIcon
        class="w-3 h-3 mt-px"
        :class="{ 'rotate-90': showDropdown }"
      />
    </button>
    <div
      v-if="showDropdown"
      class="absolute py-2 ml-3 mt-10 w-32 bg-[#ffffff36] shadow-lg rounded-md"
    >
      <ul>
        <li class="px-4 py-1 hover:bg-elefantes-green cursor-pointer">
          <NuxtLink
            v-for="lang in dropDownLanguages"
            :key="lang.code"
            :to="switchLocalePath(lang.code)"
          >
            {{ lang.name || lang.code }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import LanguageIcon from "@/public/images/icons/layout/language-icon.svg";
import TriangleDownIcon from "@/public/images/icons/layout/triangle-down.svg";

defineProps({
  theme: {
    type: String,
    default: "light",
  },
});

const { locales, locale } = useI18n();
const showDropdown = ref(false);
const switchLocalePath = useSwitchLocalePath();
console.log(locales);
console.log(locale);
const dropDownLanguages = computed(() =>
  locales.value.filter((lang) => lang.code !== locale.value)
);

const currentLocaleName = computed(() =>
  locales.value.find((l) => l.code === locale.value)
);

const onToggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest("#language-switcher")) {
    showDropdown.value = false;
  }
};

//isOpen is the new state of shownDropdown
watch(showDropdown, (isOpen) => {
  if (isOpen) {
    document.addEventListener("click", handleClickOutside);
  } else {
    document.removeEventListener("click", handleClickOutside);
  }
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.rotate-90 {
  transform: rotate(-180deg);
  transition: transform 0.3s ease;
}
</style>
