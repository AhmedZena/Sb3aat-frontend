/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#E8C872",
        second: "#FFF3CF",
        third: "#C9D7DD",
        fourth: "#475569",

        palete: {
          first: "#ccff8c",
          second: "#81de76",
          third: "#3a55b4",
          fourth: "#6caddf",
          fifth: "#8cd9ff",
        },
      },
    },
  },
  plugins: [],
};
