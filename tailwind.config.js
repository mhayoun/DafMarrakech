/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marrakech-green': '#064e3b',
        'marrakech-gold': '#fbbf24',
        'marrakech-amber': '#d97706',
      },
    },
  },
  plugins: [],
}
