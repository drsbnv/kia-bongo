const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./docs/**/*.html'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
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
			'h3': 'calc(1vh + 1vw)',
		},
		extend: {},
	},
}
