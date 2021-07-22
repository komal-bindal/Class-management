module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        "p-1.75": "7px",
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
      maxWidth: {
        100: "400px",
      },
      screens: {
        xs:"576px"
      },
      fill: theme => ({
        'blue': theme('colors.blue.100'),
      })
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
};
