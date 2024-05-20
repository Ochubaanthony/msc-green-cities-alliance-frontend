/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#82c40a",
        accent: "#ffb524",
        shade: "#45595b",
        offwhite: "#a2acad",
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        dropdown: "dropdown 0.3s ease-out forwards",
      },
      backgroundImage: {
        hero: "url('/src/components/assets/img/hero-img.jpg')",
      },
    },
  },
  plugins: [],
};
