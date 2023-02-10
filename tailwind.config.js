/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        ubuntu: ['"Ubuntu"', 'sans-serif'],
        mitr: ['"Mitr"', 'sans-serif']
      },
      colors: {
        primary: '#212E4B',
        secondary: '#00DBB6',
        slate: '#5E7094',
        blinded: '#C3CBD9',
        mid: '#E8EAF0',
        dim: '#f4f5f8',
        denim: '#415984'
      }
    },
  },
  plugins: [],
}
