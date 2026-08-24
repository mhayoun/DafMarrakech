/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heavy: ['Rubik', 'sans-serif'],
        suez: ['"Suez One"', 'serif'],
      },
      colors: {
        'marrakech-cream': '#F7F1E4',
        'marrakech-cream-dark': '#ECE0C6',
        'marrakech-gold': '#B8903E',
        'marrakech-gold-light': '#D9B876',
        'marrakech-navy': '#1B2A4A',
        'marrakech-ink': '#2B2013',
        'marrakech-maroon': '#5E2233',
        'marrakech-maroon-dark': '#2A0D17',
        'marrakech-teal': '#0E6C67',
      },
    },
  },
  plugins: [],
}
