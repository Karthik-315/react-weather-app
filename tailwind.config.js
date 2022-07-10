/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: colors.white,
        dark: colors.black,
      },

      backgroundImage: {
        dawn: "url('./assets/images/bg-medium/bg-dawn.jpg')",
        morning: "url('./assets/images/bg-medium/bg-morning.jpg')",
        noon: "url('./assets/images/bg-medium/bg-noon.jpg')",
        evening: "url('./assets/images/bg-medium/bg-evening.jpg')",
        night: "url('./assets/images/bg-medium/bg-night-clear-moon.jpg')",
      },

      fontFamily: {
        "ibm-plex-mono": ["IBM Plex Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
