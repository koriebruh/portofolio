/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2942', // Himmel blue
          light: '#2d4263',
          dark: '#0f1419', // Navy gradient start
        },
        accent: {
          DEFAULT: '#e8f1f5', // Silver
          dim: '#c9d6df',
        },
        gold: {
          DEFAULT: '#b8956a', // Soft gold
          glow: '#d4af37',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/src/assets/grid.svg')", // We'll need to create or simulate this
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #b8956a, 0 0 20px #b8956a' },
          'to': { boxShadow: '0 0 20px #e8f1f5, 0 0 30px #e8f1f5' },
        }
      }
    },
  },
  plugins: [],
}
