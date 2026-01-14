/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0D10',
        surface: '#12151A',
        border: 'rgba(255,255,255,0.08)',

        text: {
          primary: '#EAEAEA',
          muted: '#9AA0A6',
        },

        accent: '#6366F1',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        xs: ['13px', { lineHeight: '1.6' }],
        sm: ['14px', { lineHeight: '1.6' }],
        base: ['15px', { lineHeight: '1.7' }],
        lg: ['18px', { lineHeight: '1.6' }],
        xl: ['20px', { lineHeight: '1.5' }],
        '2xl': ['28px', { lineHeight: '1.3' }],
        '3xl': ['36px', { lineHeight: '1.2' }],
      },

      spacing: {
        18: '72px',
        22: '88px',
        26: '104px',
      },

      maxWidth: {
        container: '1120px',
      },
    },
  },
  plugins: [],
}
