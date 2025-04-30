/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        backgroundAlt: '#1E1E1E',
        cardBackground: '#242424',
        border: '#333333',
        hover: '#2A2A2A',
        dark: '#080808',
        'gray-900': '#1D1D1D',
      },
    },
  },
  plugins: [],
}