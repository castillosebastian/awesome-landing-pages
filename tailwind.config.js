/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/portfolio/**/*.{html,jsx, js}",
		"./src/portfolio/**/*.js",
		"./src/portfolio/**/*.html",
	
		// "*.{html,jsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#155eef",
			}
		},
	},
	plugins: [],
}

