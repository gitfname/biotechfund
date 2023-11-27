import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.tsx',
    './src/app/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        nav_bg: 'var(--nav-bg)',
        primary: "var(--primary)"
      },
      data: {
        "selected": "selected"
      }
    },
  },
  plugins: [],
}
export default config
