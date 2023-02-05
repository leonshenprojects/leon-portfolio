import { styled } from '../../../stitches.config';

export const Heading = styled('h1', {
	color: '$heading',

	variants: {
		margin: {
			none: {
				margin: '0',
			},
		},
		weight: {
			medium: {
				fontWeight: '500',
			},
			bold: {
				fontWeight: '700',
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
				fontSize: '2.4rem',
				lineHeight: '2.8rem',
			},
			sm: {
				fontSize: '2.8rem',
				lineHeight: '3.4rem',
			},
			md: {
				fontSize: '3rem',
				lineHeight: '3.6rem',
			},
			lg: {
				fontSize: '3.5rem',
				lineHeight: '4.2rem',
			},
			xl: {
				fontSize: '4rem',
				lineHeight: '4.8rem',
			},
		},
	},

	defaultVariants: {
		weight: 'bold',
		style: 'normal',
		size: 'xl',
	},
});
