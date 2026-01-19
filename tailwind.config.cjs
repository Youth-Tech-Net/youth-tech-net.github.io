/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				royalOrchid: {
					DEFAULT: '#881692',
					light: '#a31fae',
					dark: '#6b0d74',
				},
				vividTangerine: {
					DEFAULT: '#ff8000',
					light: '#ff9126',
					dark: '#cc6600',
				},
				vanillaCustard: {
					DEFAULT: '#fff3a8',
					light: '#fff7c4',
					dark: '#ffe975',
				},
			},
			fontFamily: {
				sans: ['Manrope', 'sans-serif'],
			},
		},
	},
	plugins: [
    require('@tailwindcss/typography')
  ],
}
