/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      },
    },
  },
  plugins: [],
  extend: {
    fontFamily: {
      sans: 'Inter, sans-serif'
    },
  },
}
