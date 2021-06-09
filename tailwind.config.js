const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      backgroundImage: theme => ({
       'washiBanner': "url('../src/images/washi banner.jpeg')",
       'dottedBanner': "url('../src/images/dottedbanner.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
