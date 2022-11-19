const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./docs/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1rem'
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1170px',
			// '2xl': '1280px',
		},
		colors: {
			midnight: '#05141f',
			bg: '#f8f8f8',
			border: '#cdd0d2',
			disable: '#9ba1a5',
			h123: '#697279',
			desc: '#37424c',
			accent: '#eA0029',
			yellow: '#f3c300',
			green: '#5d7d2b',

			dark: '#25262B',
			blue: '#00A6EB',
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			gray: colors.gray,
			white: colors.white,
			red: '#ED1C24',
			orange: '#F26621',
			yellow: '#F2C230',
			greenLigth: '#7AA342',
			green: '#269447',
		},
		fontSize: {
			'xs': '.75rem',
			'sm': '.875rem',
			'base': '15px',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
			'h1': 'calc(calc(1vh + 1vw) * 4)',
			'h2': 'calc(calc(1vh + 1vw) * 2.5)',
			'h3': 'calc(1vh + 1vw)',
			'h5': 'calc(calc(1vh + 1vw) * 1.5)',
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
	],
}
