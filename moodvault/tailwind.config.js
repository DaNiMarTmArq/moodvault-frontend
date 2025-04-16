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
      veryUnpleasant: "#2F3E46",
      unpleasant: "#354F52",
      neutral: "#52796F",
      pleasant: "#84A98C",
      veryPleasant: "#99AF9E",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
