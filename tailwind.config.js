/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        denim: '#022959',
        sky: '#BEE2FD',
        gray: "#9699AA",
        gbor:"#D6D9E6",
        bgray: "#F8F9FF",
        purple: "#483EFF",
        hoverdenim: "#164A8A",
        lightgrey:"#F8F9FF"
      },
    },
  },
  plugins: [],
}

