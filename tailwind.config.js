/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
		},
		container: {
			center: true,
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '940px',
			'xl': '1280px',
			'2xl': '1536px',
			'3xl': '2500px',
			'4xl': '2750px'
		  }
	},
	plugins: [],
}
