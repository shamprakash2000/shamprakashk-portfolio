/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const theme = {
  extend: {
    colors: {
      bg: "#111111",
      surface: "#161616",
      card: "#1c1c1c",
      "border-subtle": "#262626",
      accent: "#c8f135",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
};
export const plugins = [];
