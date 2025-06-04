/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Noble sunset palette: deep purple, muted magenta, golden orange, soft beige */
        primary: {
          50: '#f8e7ef',      // very light pinkish
          300: '#d76d77',     // muted magenta (sunset mid)
          500: '#b0436e',     // noble magenta
          600: '#8a2c5a',     // deep magenta
          700: '#3a1c71',     // deep purple (sunset start)
        },
        accent: {
          400: '#ffaf7b',     // golden orange (sunset end)
          600: '#e07a5f',     // copper accent
        },
        background: {
          900: '#2d193c',     // deep background
          800: '#3a1c71',     // deep purple
        },
        text: {
          50: '#f8f5f2',      // soft beige
          100: '#e9e4dd',     // light beige
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
} 