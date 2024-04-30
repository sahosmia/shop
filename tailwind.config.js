/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: colors.red[100],
          200: colors.red[200],
          300: colors.red[300],
          400: colors.red[400],
          500: colors.red[500],
          600: colors.red[600],
          700: colors.red[700],
          800: colors.red[800],
        },
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
