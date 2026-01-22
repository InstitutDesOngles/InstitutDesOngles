tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#FFB6C1',
        secondary: '#90EE90',
        accent: '#FFD700',
        base: '#FFF5F5',
        ink: '#44323A',
        mist: '#F8EFEF'
      },
      fontFamily: {
        display: ['Cormorant', 'serif'],
        body: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        soft: '12px 12px 24px rgba(211, 191, 198, 0.35), -12px -12px 24px rgba(255, 255, 255, 0.9)',
        inset: 'inset 6px 6px 12px rgba(211, 191, 198, 0.35), inset -6px -6px 12px rgba(255, 255, 255, 0.9)'
      }
    }
  }
}
