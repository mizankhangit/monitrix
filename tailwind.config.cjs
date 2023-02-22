/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        xl: "1470px",
      },
      colors: {
        primary: "#AC224D",
        secondary: "#FBAD18",
        tertiary: "#FAF2F5",
        grey: "#808291",
        black: "#181B31",
        white: "#ffffff",
        danger: "#e50f0f",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
