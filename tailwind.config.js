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
          DEFAULT: '#EDEAE1', // Warm sand cream base
          light: 'rgba(255, 255, 255, 0.65)', // Translucent light card
          dark: '#EDEAE1', // Warm sand cream background
        },
        accent: {
          DEFAULT: '#181E24', // Deep charcoal dark text
          dim: '#4A5560', // Muted slate gray text
        },
        gold: {
          DEFAULT: '#27B5D9', // Primary Cyan-Blue
          glow: '#2CC9DA', // Vibrant Turquoise
        },
        cream: '#EDEAE1',
        brandCyan: '#27B5D9',
        brandTurquoise: '#2CC9DA',
        brandMint: '#90E0DD',
        brandGreenLight: '#9FD693',
        brandGreen: '#87C76D',
        brandLightCyan: '#47DCE2',
        charcoal: '#181E24',
        slate: '#4A5560',
      },
      fontFamily: {
        sans: ['"Product Sans"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        heading: ['"Product Sans"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
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
