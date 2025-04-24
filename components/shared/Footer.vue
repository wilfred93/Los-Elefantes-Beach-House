<template>
  <footer>
    <section class="border border-elefantes-green">
      <div class="grid grid-cols-12">
        <div class="col-span-8 bg-elefantes-green">
          <div class="grid grid-cols-3 py-5 h-full">
            <div
              v-for="(menu, index) in footerMenus"
              :key="index"
              class="flex justify-center items-center"
            >
              <ul>
                <li
                  v-for="(item, itemIndex) in menu"
                  :key="itemIndex"
                  class="py-2 text-white"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-span-4 flex items-center justify-center py-5">
          <img
            class="mx-auto max-w-[50%]"
            src="/images/LosElefantesLogo.svg"
            alt="Elefantes Logo"
          />
        </div>
      </div>
    </section>
    <section class="text-center p-6">
      <p>Un footer muy loco</p>
    </section>
  </footer>
</template>

<script setup>
const footerMenus = [
  ["Element 1", "Element 2", "Element 3"],
  ["Element 1", "Element 2", "Element 3"],
  ["Element 1", "Element 2", "Element 3"],
];
</script>
