/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			DMSans: ['DM Sans', 'sans-serif'],
			WorkSans: ['Work Sans', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'],
	},
};
