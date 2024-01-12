/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        light: {
          background: '#ffffff',
          text: '#333333',
        },
        dark: {
          background: '#121212',
          text: '#ffffff',
        },
      },      
    },
  },
  plugins: [],
}
