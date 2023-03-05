import { styled } from '../../../stitches.config';

export const Text = styled('p', {
	color: '$body',

	variants: {
		margin: {
			none: {
				margin: '0',
			},
			paragraph: {
				marginBottom: '$4',
			},
		},
		weight: {
			normal: {
				fontWeight: '400',
			},
			bold: {
				fontWeight: '600',
			},
		},
		style: {
			emphasis: {
				fontStyle: 'italic',
			},
			normal: {
				fontStyle: 'normal',
			},
		},
		size: {
			xs: {
				fontSize: '1.2rem',
				lineHeight: '1.8rem',
			},
			sm: {
				fontSize: '1.4rem',
				lineHeight: '2rem',
			},
			md: {
				fontSize: '1.6rem',
				lineHeight: '2.2rem',
			},
			lg: {
				fontSize: '1.8rem',
				lineHeight: '2.4rem',
			},
			xl: {
				fontSize: '2rem',
				lineHeight: '2.6rem',
			},
		},
	},

	defaultVariants: {
		weight: 'normal',
		style: 'normal',
		size: 'md',
		margin: 'paragraph',
	},
});
