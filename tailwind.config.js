/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D42B2B',
          'red-dark': '#B52323',
          blue: '#1A3D8F',
          'blue-light': '#4FA8E8',
          navy: '#0D1B3E',
          'navy-light': '#132254',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
