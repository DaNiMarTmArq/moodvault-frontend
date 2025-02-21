/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#89ADAD",
      fill: "#F0F2F2",
      gray: "#717171",
      red: "#e7000b",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
