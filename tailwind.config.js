/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        xxs: "8px",
      },

      colors: {
        light: colors.white,
        dark: colors.black,
      },

      backgroundImage: {
        dawn: "url('./assets/images/bg-dawn.jpg')",
        morning: "url('./assets/images/bg-morning.jpg')",
        noon: "url('./assets/images/bg-noon.jpg')",
        evening: "url('./assets/images/bg-evening.jpg')",
        night: "url('./assets/images/bg-night-clear-moon.jpg')",
      },

      fontFamily: {
        "ibm-plex-mono": ["IBM Plex Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
