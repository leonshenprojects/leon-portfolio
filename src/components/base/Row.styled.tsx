import { styled } from '../../../stitches.config';

export const Row = styled('div', {
	width: 'calc(100% - $2)',

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
	},

	defaultVariants: {
		width: 'restricted',
	},
});
