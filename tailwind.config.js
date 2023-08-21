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
        'font6': 'Prosto One',
        'font7': 'Play',
        'font8': 'Revalia',
        'font9': 'Iceberg',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

