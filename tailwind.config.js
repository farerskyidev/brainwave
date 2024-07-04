
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '3xl': '1921px',
      '2xl': '1441px',  
      'xl': '1201px',
      'x': '1025px',
      'm': '769px',
      'sm': '376px' 
    },
    extend: {
      colors: {
        
        'bgColor': '#0E0C15',
        'whiteColor': '#ffffff',
        'whiteColor-50': 'rgba( 255 , 255 , 255 , 0.502 )', 
        'whiteColor-15': 'rgba( 255 , 255 , 255 , 0.15 )',
        'blackColor': '#000000',
        'JaguarColor': '#26242b',
        'purpleColor': '#ADA8C3', 
        'purpleColor2': '#B6B1C8',  
        'oldLavender': '#757185',
        'lavenderGrey': '#CAC6DD',   
        'customBorder': '#252134',
        'gray85': '#D9D9D9',
        
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
      },
      spacing: {
        '60': '60px', 
        '62': '62px',
        '84': '84px',
        '100': '100px',
        '136': '136px',
      },
    },
  }, 
  plugins: [
    require('tailwindcss-border-gradients')(),
  ],
}

