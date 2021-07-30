module.exports = {
	purge: ["./src/**/*.css", "./**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'body': ['"Open Sans"'],
			'special': ['"IBM Plex Mono"']
		},
		colors: {
			white: '#fff',
			black: '#000',
			blue: '#3A71F9',
			green: '#18B088',
			pink: '#FDB4C4',
			gray: '#242424',
		},
		screens: {
			'none': '100%',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1340px',
			'2xl': '1400px',
			'3xl': '1700px'
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
