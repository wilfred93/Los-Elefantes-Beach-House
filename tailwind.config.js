/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./assets/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        katibeh: ["katibeh", "sans-serif"],
        "montserrat-regular": ["montserrat-regular", "sans-serif"],
        "montserrat-semiBold": ["montserrat-semiBold", "sans-serif"],
      },
      colors: {
        "elefantes-yellow": "#F3EBCB",
        "elefantes-orange": "#E5542C",
        "elefantes-green": "#03576B",
      },
      backgroundImage: {
        workation: "url('public/images/workation.png')",
      },
    },
  },
  plugins: [],
};
