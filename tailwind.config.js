/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      green: "#2fbf71",
      crimson: "#db143c",
      cinder: {
        dark: "#0c0c14",
        normal: "#0b0b13",
        light: "#10101a",
      },
      black: colors.black,
      white: {
        titan: "#f7f7ff",
        normal: "#FFFFFF",
        light: "rgba(255, 255, 255, 0.03)",
      },
    },
    extend: {},
  },
  plugins: [],
};
