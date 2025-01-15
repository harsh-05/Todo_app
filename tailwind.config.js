/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
      "logoColor": "#3F9142",
      "focusColor": "#357937",
      
    },
       spacing: {
        '8xl': '94rem',
        '9xl': '128rem',
      },
    },
  },
  plugins: [],
}

