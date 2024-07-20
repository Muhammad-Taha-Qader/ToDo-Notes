/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      backgroundColor: {
        'custom-green': 'rgba(0, 255, 51, 0.388)',
        'custom-transparent': 'rgba(255, 255, 255, 0.05)'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.font-poppins-thin': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '100',
        },
        '.font-poppins-extralight': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '200',
        },
        '.font-poppins-light': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '300',
        },
        '.font-poppins-regular': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '400',
        },
        '.font-poppins-medium': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '500',
        },
        '.font-poppins-semibold': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '600',
        },
        '.font-poppins-bold': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '700',
        },
        '.font-poppins-extrabold': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '800',
        },
        '.font-poppins-black': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '900',
        },
        '.font-poppins-thin-italic': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '100',
          fontStyle: 'italic',
        },
        '.font-poppins-extralight-italic': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '200',
          fontStyle: 'italic',
        },
        '.font-poppins-light-italic': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '300',
          fontStyle: 'italic',
        },
        '.font-poppins-regular-italic': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '400',
          fontStyle: 'italic',
        },
        '.font-poppins-medium-italic': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '500',
          fontStyle: 'italic',
        },
        '.font-poppins-semibold-italic': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '600',
          fontStyle: 'italic',
        },
        '.font-poppins-bold-italic': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '700',
          fontStyle: 'italic',
        },
        '.font-poppins-extrabold-italic': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '800',
          fontStyle: 'italic',
        },
        '.font-poppins-black-italic': {
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '900',
          fontStyle: 'italic',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },

  ],
};


