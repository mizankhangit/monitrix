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
        primary: "#0B3A5D",
        secondary: "#f1583e",
        grey: "#8094ae",
        black: "#364a63",
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
