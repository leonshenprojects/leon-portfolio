import { styled } from '../../../stitches.config';

export const Row = styled('div', {
	width: '100%',
	padding: '0 $2',

	variants: {
		width: {
			full: {
				width: '100%',
			},
			restricted: {
				maxWidth: '$maxRestrict',
				margin: '0 auto',
			},
		},
		padding: {
			none: {
				padding: '0',
			},
		},
	},

	defaultVariants: {
		width: 'restricted',
	},
});
