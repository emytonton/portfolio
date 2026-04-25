/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        kawaii: {
          bg: '#0f0a14',
          surface: '#1a1322',
          card: '#221829',
          pink: '#ff8ec7',
          pinkSoft: '#ffb3d9',
          rose: '#ffd1e8',
          lilac: '#c8a2ff',
          lilacSoft: '#dcc4ff',
          purple: '#9d6ce6',
          cream: '#fff5f9',
          sparkle: '#ffe4f3'
        }
      },
      fontFamily: {
        display: ['"Quicksand"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive']
      },
      backgroundImage: {
        'kawaii-gradient': 'linear-gradient(135deg, #ff8ec7 0%, #c8a2ff 50%, #9d6ce6 100%)',
        'kawaii-gradient-soft': 'linear-gradient(135deg, #ffd1e8 0%, #dcc4ff 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,142,199,0.12), rgba(200,162,255,0.08))',
        'mesh': 'radial-gradient(at 20% 20%, rgba(255,142,199,0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(200,162,255,0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(157,108,230,0.18) 0px, transparent 50%), radial-gradient(at 100% 80%, rgba(255,179,217,0.18) 0px, transparent 50%)'
      },
      boxShadow: {
        'kawaii': '0 10px 40px -10px rgba(255,142,199,0.4), 0 4px 20px -4px rgba(200,162,255,0.3)',
        'kawaii-lg': '0 20px 60px -10px rgba(255,142,199,0.5), 0 8px 30px -4px rgba(200,162,255,0.4)',
        'glow-pink': '0 0 30px rgba(255,142,199,0.6), 0 0 60px rgba(255,142,199,0.3)',
        'glow-lilac': '0 0 30px rgba(200,162,255,0.6), 0 0 60px rgba(200,162,255,0.3)',
        'inner-glow': 'inset 0 0 20px rgba(255,142,199,0.15)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'sparkle': 'sparkle 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'blob': 'blob 14s ease-in-out infinite',
        'wiggle': 'wiggle 1.2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 12s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' }
        },
        sparkle: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(0.85) rotate(0deg)' },
          '50%': { opacity: 1, transform: 'scale(1.2) rotate(180deg)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    }
  },
  plugins: []
}
