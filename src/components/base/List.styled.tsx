import { styled } from '../../../stitches.config';

export const List = styled('ul', {
	variants: {
		margin: {
			none: {
				margin: '0',
			},
		},
		type: {
			noBullets: {
				listStyle: 'none',
				padding: '0',
			},
		},
	},
});
