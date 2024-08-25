/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#232536',
        accent: '#FFD050',
        secondary: '#592EA9',
        dark: '#4C4C4C',
        lightGrey: '#6D6E76',
        light: '#F4F4F4',
        offWhite: '#F4F0F8',
        cream: '#FBF6EA',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

