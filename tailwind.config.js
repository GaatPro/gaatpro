/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gaat-red': '#FF0000',
        'gaat-dark': '#1A0A05',
        'gaat-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};