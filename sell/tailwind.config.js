/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
  theme: {
    extend: {
        colors: {
            'bluishBlack': '#181A1E',
            'blackGrey': '#1F2125',
            'lemony': '#FFDB18',
            'paleBlue': '#8F9092',
            'blueBlack': '#2B2C30',
            'granite': '#2F3135',
            'blackOlive': '#3B3B33',
            'slateGray': '#3E4045',
        },
        boxShadow: {
            'darkYellow': '0px 2px 16px 0px #FFDB1866',
          }
    },
  },
  plugins: [],
}

