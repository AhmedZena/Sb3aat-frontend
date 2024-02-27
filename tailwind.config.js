/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#E8C872",
        second: "#FFF3CF",
        third: "#C9D7DD",
        fourth: "#637A9F",
      },
    },
  },
  plugins: [],
};
