/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoniModa: ["Bodoni Moda", "serif"],
        inter: ["Inter", "sans-serif"],
        pixelify: ["Pixelify Sans", "sans-serif"],
        cookie: ["Cookie", "cursive"]
      },
      colors: {
        primary: "#ececed",
        background: "#131213"
      }
    },
  },
  plugins: [],
}