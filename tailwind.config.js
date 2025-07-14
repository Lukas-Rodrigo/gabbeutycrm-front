/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-primeui'),
  ],
};
