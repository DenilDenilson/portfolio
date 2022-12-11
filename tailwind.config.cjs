/** @type {import('tailwindcss').Config} */

const defaulTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // lidht theme mode
        "--light_background": "var(--light_background)",
        "--light_text-main": "var(--light_text-main)",
      },
      fontFamily: {
        "--nunito": ["Nunito Sans", ...defaulTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
