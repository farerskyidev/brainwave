
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '3xl': '1920px',
      '2xl': '1440px',  
      'xl': '1200px',
      '2sm': '375px'
    },
    extend: {
      colors: {
        'whiteColor': '#ffffff',
        'whiteColor-50': 'rgba( 255 , 255 , 255 , 0.502 )', 
        'blackColor': '#000000',
        'JaguarColor': '#26242b',
        'purpleColor': '#ADA8C3', 
        'purpleColor2': '#B6B1C8',  
        'oldLavender': '#757185',
        'lavenderGrey': '#CAC6DD',   
        'customBorder': '#252134',
      },
      lineHeight: {

      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  }, 
  plugins: [
    require('tailwindcss-border-gradients')(),
  ],
}

