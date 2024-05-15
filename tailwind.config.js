/** @type {import('tailwindcss').Config} */

// import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary2: "#006769",
        primary: "#40A578",
        secondary: "#E6FF94",
        secondary2: "#9DDE8B",
        ass: "#333",
        assLight: "#7E7E7E",
      },
      borderColor: {
        color: "#ececec",
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
