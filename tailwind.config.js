/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Central accent — change this single ramp to re-theme the whole site.
        accent: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcdcff',
          300: '#8ec5ff',
          400: '#59a3ff',
          500: '#3b82f6', // primary accent
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        ink: {
          50: '#f7f8fa',
          100: '#eef0f4',
          200: '#dde2e9',
          300: '#c2cbd6',
          400: '#9aa6b5',
          500: '#6b7787',
          600: '#4a5462',
          700: '#353d49',
          800: '#20262f',
          900: '#13171d',
          950: '#0a0d11',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,23,29,0.04), 0 8px 24px -12px rgba(16,23,29,0.12)',
        lift: '0 2px 4px rgba(16,23,29,0.06), 0 24px 48px -16px rgba(16,23,29,0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.7s ease both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
