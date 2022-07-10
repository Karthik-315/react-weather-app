/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        breakpoint: "1024px",
      },
      backgroundImage: {
        dawn: "url('./assets/images/bg-medium/bg-dawn.jpg')",
        morning: "url('./assets/images/bg-medium/bg-morning.jpg')",
        noon: "url('./assets/images/bg-medium/bg-noon.jpg')",
        evening: "url('./assets/images/bg-medium/bg-evening.jpg')",
        night: "url('./assets/images/bg-medium/bg-night-clear-moon.jpg')",
      },

      fontFamily: {
        // poppins: ["Trispace", "sans-serif"],
        "ibm-plex-mono": ["IBM Plex Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
