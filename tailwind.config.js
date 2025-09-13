/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const theme = {
  extend: {
    colors: {
      background: "#F5F5F5",
      primary: "#111",
      secondary: "#555",
      border: "#E5E5E5",
    },
    
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    
  },
};
export const plugins = [];
