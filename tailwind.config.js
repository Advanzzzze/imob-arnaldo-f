/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'primary-color-300': '#03024E',
				'primary-color-300': '#05048A',
				'primary-color-300': '#0805C5',
				'secondary-color-300': '#1C78D4',
				'secondary-color-300': '#549ee8',
				'secondary-color-300': '#90c0f0',
				'ascent-color-300': '#2BDA1F',
				'ascent-color-300': '#61e758',
				'ascent-color-300': '#9ff199',
			},
		},
	},
	plugins: [],
};
