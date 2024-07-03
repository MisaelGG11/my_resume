/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        'text': 'text 3s linear infinite', // Animación para el texto
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 100%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 100%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}

