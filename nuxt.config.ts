// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    compilation: {
      strictMessage: false,
    },
    langDir: "locales",
    locales: [
      {
        code: "es",
        iso: "es-ES",
        dir: "ltr",
        files: ["es/home.json", "es/common.json", "es/welcome.json"],
      },
      {
        code: "en",
        iso: "en-US",
        dir: "ltr",
        files: ["en/home.json", "en/common.json", "en/welcome.json"],
      },
    ],
    customRoutes: "config",
    pages: {
      welcome: {
        en: "/welcome/",
        es: "/bienvenido/",
      },
    },
    defaultLocale: "en",
    lazy: true, // Enables lazy loading of language files
    strategy: "prefix_except_default", // Adds "/es" for Spanish but no prefix for English
    detectBrowserLanguage: false,
  },
});
