import { createStitches } from '@stitches/react';
import {
	slate,
	tomato,
	cyan,
	green,
	amber,
	whiteA,
	blackA,
	slateDark,
	tomatoDark,
	cyanDark,
	greenDark,
	amberDark,
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const {
	styled,
	css,
	theme,
	createTheme,
	getCssText,
	globalCss,
	keyframes,
	config,
	reset,
} = createStitches({
	theme: {
		colors: {
			...slate,
			...tomato,
			...cyan,
			...green,
			...amber,

			...whiteA,
			...blackA,

			// Semantic colors
			hiContrast: '$slate12',
			loContrast: '$slate11',
			heading: '$cyan12',
			body: '$cyan11',
			canvas: 'hsl(0 0% 93%)',
			transparentPanel: 'hsl(0 0% 0% / 97%)',
			shadowLight: 'hsl(206 22% 7% / 35%)',
			shadowDark: 'hsl(206 22% 7% / 20%)',
		},
		shadows: {
			...blackA,
		},
		fonts: {
			heading: 'Montserrat, sans-serif',
			body: 'Open Sans, sans-serif',
		},
		space: {
			1: '0.5rem',
			2: '1rem',
			3: '1.5rem',
			4: '2rem',
			5: '2.5rem',
			6: '3.5rem',
		},
		sizes: {
			1: '0.5rem',
			2: '1rem',
			3: '1.5rem',
			4: '2rem',
			5: '2.5rem',
			6: '3.5rem',
			maxRestrict: '1024px',
		},
		fontSizes: {
			1: '1.2rem',
			3: '1.4rem',
			4: '1.5rem',
			6: '2rem',
			7: '2.5rem',
			8: '3rem',
		},
		radii: {
			1: '0.4rem',
			2: '0.6rem',
			3: '0.8rem',
			4: '1.2rem',
			round: '50%',
			pill: '9999px',
		},
		zIndices: {
			1: '100',
			2: '200',
			3: '300',
			4: '400',
			max: '999',
		},
	},
	media: {
		bp1: '(min-width: 481px)',
		bp2: '(min-width: 769px)',
		bp3: '(min-width: 1025px)',
		motion: '(prefers-reduced-motion)',
		hover: '(any-hover: hover)',
		dark: '(prefers-color-scheme: dark)',
		light: '(prefers-color-scheme: light)',
	},
	utils: {
		us: (value: Stitches.PropertyValue<'userSelect'>) => ({
			WebkitUserSelect: value,
			userSelect: value,
		}),

		userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
			WebkitUserSelect: value,
			userSelect: value,
		}),

		appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
			WebkitAppearance: value,
			appearance: value,
		}),
		backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
			WebkitBackgroundClip: value,
			backgroundClip: value,
		}),
	},
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
	colors: {
		...slateDark,
		...tomatoDark,
		...cyanDark,
		...greenDark,
		...amberDark,

		// Semantic colors
		background: '$slate2',
		canvas: 'hsl(0 0% 15%)',
		transparentPanel: 'hsl(0 100% 100% / 97%)',
		shadowLight: 'hsl(206 22% 7% / 35%)',
		shadowDark: 'hsl(206 22% 7% / 20%)',
	},
	shadows: {
		...blackA,
	},
});

export const globalStyles = globalCss({
	'*': {
		boxSizing: 'border-box',
	},
	html: {
		'-webkit-font-smoothing': 'antialiased',
		textRendering: 'optimizeLegibility',
		fontSize: '62.5%',
	},
	body: {
		margin: 0,
		fontSize: '1.6rem',
		fontFamily: '$body',
	},
	'body, #__next, main': {
		minHeight: '100vh',
	},
	'h1, h2, h3': {
		fontFamily: '$heading',
	},
	a: {
		color: 'inherit',

		'&:-webkit-any-link': {
			color: 'inherit',
		},
	},
});
