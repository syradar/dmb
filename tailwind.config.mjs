import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Metropolis', ...defaultTheme.fontFamily.sans],
        serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
        mono: ['Cascadia', ...defaultTheme.fontFamily.mono],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            fontFamily: 'Cormorant Garamond',
            p: {
              fontFamily: 'Cormorant Garamond',
            },
            h1: {
              fontFamily: 'Metropolis',
            },
            h2: {
              fontFamily: 'Metropolis',
            },
            h3: {
              fontFamily: 'Metropolis',
            },
            h4: {
              fontFamily: 'Metropolis',
            },
            h5: {
              fontFamily: 'Metropolis',
            },
            h6: {
              fontFamily: 'Metropolis',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
