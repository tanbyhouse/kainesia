/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px'
      },
      colors: {
        accent: '#C98F65',
        button: '#BB7440',
      },
      fontFamily: {
        heart: ['heartbreak', 'system-ui'],
        dmSans: ['DM Sans', 'system-ui'],
      },
    },
  },
  plugins: [],
}

