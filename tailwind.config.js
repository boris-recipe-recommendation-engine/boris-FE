/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './_components/**/*.{js,ts,jsx,tsx}',
      './_clients/**/*.{js,ts,jsx,tsx}',
      './_layouts/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        screens:{
          "sl":"3000px"
        },
        colors: {
          loading: '#181424',
          homeheaderpurple: 'rgba(49,48,113,0.22)',
          homeheadergray: 'rgba(26,25,25,0.22)',
          buttontransparent: 'rgba(24,20,36,0.82)',
          buttontransparent2: 'rgba(45,42,53,0.95)',
          searchbartransparent: 'rgba(10,10,10,0.66)',
          searchbuttontrans: 'rgba(45,42,53,0.7)',
          searchbuttontrans2: 'rgba(45,42,53,0.4)',
          selleridproductpagetrans: 'rgba(12,12,12,.58)'
        },
        height:{
          "76": "304px"
        }
      },
    },
    plugins: [
      require("tailwind-scrollbar")({ nocompatible: true })
    ],
    variants:{
      scrollbar: ["dark", "rounded"]
    }
  }
  