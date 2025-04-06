/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        purple: {
          500: '#805AD5',
          600: '#6B46C1',
        },
      },
    },
  },
  plugins: [],
} 