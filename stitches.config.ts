import { cyan, cyanDark, slate, slateDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { styled, createTheme, getCssText, globalCss } = createStitches({
	theme: {
		colors: {
			...cyan,
			...slate,
			background: '$cyan1',
			text: '$slate12',
		},
	},
});

export const darkTheme = createTheme({
	colors: {
		...cyanDark,
		...slateDark,
		background: '$cyan1',
		text: '$slate12',
	},
});

export const globalStyles = globalCss({
	'html, body, #__next': {
		margin: 0,
		height: '100%',
	},
});
