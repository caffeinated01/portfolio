/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodoniModa: ["Bodoni Moda", "serif"],
        inter: ["Inter", "sans-serif"],
        pixelify: ["Pixelify Sans", "sans-serif"],
        cookie: ["Cookie", "cursive"],
      },
      colors: {
        primary: {
          light: "131213",
          dark: "#ececed",
        },
        secondary: {
          light: "#474545",
          dark: "#b8b8b8",
        },
        background: { light: "#ececed", dark: "#131213" },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
