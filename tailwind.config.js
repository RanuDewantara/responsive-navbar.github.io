/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'font1': 'Oxanium',
        'font2': 'Tektur',
        'font3': 'Coda',
        'font4': 'DAGGERSQUARE',
        'font5': 'Goldman',
        'font6': 'Play',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

