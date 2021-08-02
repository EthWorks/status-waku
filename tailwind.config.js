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
			gray75: 'rgba(21, 21, 18, 0.75)',
			gray02: 'rgba(21, 21, 18, 0.02)',
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
		extend: {
			backgroundImage: theme => ({
				'link-arrow-black': "url('/img/arrow/arrow-black.svg')",
				'link-arrow-blue': "url('/img/arrow/arrow-blue.svg')",
				'link-arrow-white': "url('/img/arrow/arrow-white.svg')",
				'branch': "url('/img/branch.svg')",
			}),
			zIndex: {
				'-1':'-1',
				'-2':'-2',
				'-3':'-3',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
