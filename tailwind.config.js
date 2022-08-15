/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#160838',
        'dark-purple-light': '#291a53',
        'indigo-vet': '#361596',
        'indigo-vet-500': '#9479ff',
        'indigo-vet-900': '#4d27ea'
        
      },
    }
  },
  plugins: [],
}
