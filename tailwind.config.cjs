/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        geistMono: ['Geist Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

