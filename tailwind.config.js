/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#5F2EEA',
          lavender: '#CBC3E3',
          darkText: '#1D1C5E',
          grayBg: '#F7F8FA',
          borderGray: '#CCCCCC',
          inputLabel: '#5F2EEA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
