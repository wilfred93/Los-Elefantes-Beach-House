// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: {
    plugins: [svgLoader()],
  },
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
        files: [
          "es/home.json",
          "es/common.json",
          "es/welcome.json",
          "es/contact.json",
          "es/pagesSlugs.json",
        ],
        name: "Español",
      },
      {
        code: "en",
        iso: "en-US",
        dir: "ltr",
        files: [
          "en/home.json",
          "en/common.json",
          "en/welcome.json",
          "en/contact.json",
          "en/pagesSlugs.json",
        ],
        name: "English",
      },
    ],
    customRoutes: "config",
    pages: {
      welcome: {
        en: "/welcome/",
        es: "/bienvenido/",
      },
      contact: {
        en: "/contact/",
        es: "/contacto/",
      },
      reservation: {
        en: "/reservations/",
        es: "/reservas/",
      },
    },
    defaultLocale: "en",
    lazy: true, // Enables lazy loading of language files
    strategy: "prefix_except_default", // Adds "/es" for Spanish but no prefix for English
    detectBrowserLanguage: false,
  },
});
