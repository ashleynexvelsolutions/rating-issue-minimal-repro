/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./node_modules/@ashleynexvelsolutions/**/*.js"
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px'
    },
    extend: {
      colors: {
        'test-one': 'pink',
        'test-two': 'purple'
      },
    },
  },
}
