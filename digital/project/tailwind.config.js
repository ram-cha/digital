/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd4ff',
          300: '#8eb7ff',
          400: '#598eff',
          500: '#3b71fe',
          600: '#1e4bf5',
          700: '#1939e0',
          800: '#1e3a8a',
          900: '#1c2e6f',
          950: '#111a42',
        },
      },
      boxShadow: {
        'highlight': '0 0 0 3px rgba(59, 130, 246, 0.15)',
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};