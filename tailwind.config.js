const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./docs/**/*.html'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {},
	},
}
