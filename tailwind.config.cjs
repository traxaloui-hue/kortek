/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kortek: {
          50: '#fff7f0',
          500: '#ff7a00',
          600: '#ff9500'
        }
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        glow: {
          '0%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
          '100%': { opacity: 0.6, transform: 'scale(1)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
