/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        'text': 'text 3s linear infinite', // Animación para el texto
        'border': 'border 3s linear infinite', // Animación para el borde
        'border-spin': 'border-spin 6s linear infinite',
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
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
        border: {
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

