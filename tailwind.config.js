/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Noble sunset palette, 30% darker: deep purple, muted magenta, golden orange, soft beige */
        primary: {
          50: '#bfa6b2',      // 30% darker very light pinkish
          300: '#8a434a',     // 30% darker muted magenta (sunset mid)
          500: '#6e2c3e',     // 30% darker noble magenta
          600: '#4f1d2c',     // 30% darker deep magenta
          700: '#1e0f3d',     // 30% darker deep purple (sunset start)
        },
        accent: {
          400: '#b87a4e',     // 30% darker golden orange (sunset end)
          600: '#8a5637',     // 30% darker copper accent
        },
        background: {
          900: '#170b23',     // 30% darker deep background
          800: '#1e0f3d',     // 30% darker deep purple
        },
        text: {
          50: '#f8f5f2',      // bright soft beige for readability
          100: '#e9e4dd',     // light beige for readability
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