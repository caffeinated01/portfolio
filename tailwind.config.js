/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodoniModa: ["Bodoni Moda", "serif"],
        mplus: ["'M PLUS Rounded 1c'", "Verdana", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        pixelify: ["Pixelify Sans", "sans-serif"],
        cookie: ["Cookie", "cursive"],
      },
      colors: {
        primary: {
          light: "#131213",
          dark: "#ececed",
        },
        secondary: {
          light: "#474545",
          dark: "#b8b8b8",
        },
        background: { light: "#ececed", dark: "#131213" },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
