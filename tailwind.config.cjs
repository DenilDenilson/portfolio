/** @type {import('tailwindcss').Config} */

const defaulTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   lg: { max: "1023px" },
    // },
    extend: {
      colors: {
        // lidht theme mode
        "--light_background": "var(--light_background)",
        "--light_text-main": "var(--light_text-main)",
        "--dark_background": "var(--dark_background)",
        "--light_principal": "var(--light_principal)",
      },
      fontFamily: {
        "--nunito": ["Nunito Sans", ...defaulTheme.fontFamily.sans],
      },
      screens: {
        lg2: "1440px",
      },
    },
  },
  plugins: [],
};
