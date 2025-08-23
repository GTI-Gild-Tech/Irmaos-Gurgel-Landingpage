/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: { 
      colors: {
        primary: '#2A447F',
        secondary: '#405464',
      },
    },
    
  },
  plugins: [],
  
};
