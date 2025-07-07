/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'general': ['General Sans', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
        'zentry': ['zentry', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#000000',
          200: '#0E0E10',
        },
        white: {
          DEFAULT: '#FFF',
          100: '#BEC1DD',
          200: '#C1C2D3',
        },
        blue: {
          100: '#CBACF9',
        },
        purple: '#CBACF9',
        gray: {
          100: '#808080',
        },
      },
      backgroundImage: {
        'grid-black-100': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"%23000000\"><path d=\"m0 .5h32m-32 16h32m-32 16h32m-32-16v32m16-32v32m16-32v32\"/></svg>')",
        'grid-white': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"%23ffffff\"><path d=\"m0 .5h32m-32 16h32m-32 16h32m-32-16v32m16-32v32m16-32v32\"/></svg>')",
      },
    },
  },
  plugins: [],
}
