/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        terracota: {
          100: '#f8e0e0',
          200: '#f4b9b9',
          300: '#a2512f',
          400: '#ec8585',
          500: '#e76b6b',
          600: '#682b16',
          700: '#562d18'
        },
        primary: '#682b16',
        secondary: '#e76b6b',
        info: '#c3ddfd',
        success: '#bcf0da',
        wishlist: '#dcd7fe',
        green: {
          100: '#7f7158',
          600: '#2a3625',
        }
      },
    },
  },
}
