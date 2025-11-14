/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
      colors: { primary: { DEFAULT: '#0ea5e9', dark: '#0284c7' } }
  }},
  plugins: [],
}
