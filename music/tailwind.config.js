/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'title-md': '30px'
      },
      colors: {
        'grey-C0': '#C0C0C0',
        'grey-22': '#222222',
        emerald: '#25a56a'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      screens: {
        xl: '1200px'
      }
    }
  },
  plugins: []
}
