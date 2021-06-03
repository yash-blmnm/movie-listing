module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Titillium\\ Web'],
    },
    // fontSize: {
    //   large: ['1.25rem', '0.75'],
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
}
