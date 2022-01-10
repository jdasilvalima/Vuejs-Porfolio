const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      teal: colors.teal,
      slate: colors.slate,
      gray: colors.gray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
