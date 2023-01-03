/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["ubuntu", "sans-serif"]
      },
      colors: {
        primary: {
          200: "hsl(206, 94%, 87%)",
          300: "hsl(228, 100%, 84%)",
          400: "hsl(243, 100%, 62%)",
          500: "hsl(213, 96%, 18%)",
          600: "hsl(354, 84%, 57%)"
        },
        light_gray: "hsl(229, 24%, 87%)",
        cool_gray: "hsl(231, 11%, 63%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
      }
    },
  },
  plugins: [],
}
