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
    },
  },
  plugins: [],
};
