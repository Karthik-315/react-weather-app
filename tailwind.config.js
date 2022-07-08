/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        screens: {
            breakpoint: "1024px",
        },
        extend: {
            backgroundImage: {
                dawn: "url('./assets/images/bg-medium/bg-dawn.jpg')",
                morning: "url('./assets/images/bg-medium/bg-morning.jpg')",
                evening: "url('./assets/images/bg-medium/bg-evening.jpg')",
                night: "url('./assets/images/bg-medium/bg-night-clear-moon.jpg')",
            },

            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
