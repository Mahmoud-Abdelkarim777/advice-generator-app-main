/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./main.js","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        manrope: ['Manrope', 'sans-serif'], 
      },
      colors: {
        primary: {
          cyan: 'hsl(193, 38%, 86%)', // Light Cyan
          neon: 'hsl(150, 100%, 66%)', // Neon Green
        },
        neutral: {
            grayishBlue: 'hsl(217, 19%, 38%)', // Grayish Blue
            darkGrayishBlue: 'hsl(217, 19%, 24%)', // Dark Grayish Blue
            darkBlue: 'hsl(218, 23%, 16%)', // Dark Blue
          },
      },
      height: {
        '2/2': '100vh',  
        '17': '16.5rem',  
      },
      inset: {
        'custom': '14.7rem', 
      },
      fontSize: {
        'custom': '20px', // حجم الخط المخصص
      },
      boxShadow: {
        'neon-green': '0px 0px 25px 5px hsl(150deg 100% 62.08%)',
      },
    },
    letterSpacing: {
      wide: '4px',
    },
  },
  plugins: [],
}