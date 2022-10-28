const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_includes/**/*.{html,liquid,md,markdown}", "./_layouts/**/*.{html,liquid,md,markdown}", "./pages/**/*.{html,liquid,md,markdown}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
        gray: colors.zinc,
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
