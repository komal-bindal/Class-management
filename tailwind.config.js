module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        "p-1.75": '7px',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
