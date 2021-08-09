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
			blue02: '#8AAFF9',
			green: '#18B088',
			pink: '#FDB4C4',
			gray: '#242424',
			gray300: '#E0E0E0',
			gray75: 'rgba(21, 21, 18, 0.75)',
			gray02: 'rgba(21, 21, 18, 0.02)',
			grayDark: '#525252',
			light: '#E8E9ED',
			purple: '#8072E9',
			red: '#f55c7c',
			yellow: '#FACA11',
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
				'eye-open-black': "url('/img/icon/eye-open-black.svg')",
				'eye-close-white': "url('/img/icon/eye-close-white.svg')",
			}),
			fontSize: theme => ({
				'10': '.625rem'
			}),
			maxWidth: theme => ({
				'14-5r': '14.5rem',
				'22r': '22rem',
				'34r': '34rem',
			}),
			minWidth: theme => ({
				'14-5r': '14.5rem',
				'22r': '22rem',
				'34r': '34rem',
			}),
			width: theme => ({
				'22r': '22rem',
				'34r': '34rem',
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
