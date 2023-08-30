/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sora': ['Sora'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

