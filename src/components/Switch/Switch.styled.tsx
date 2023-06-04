'use client';

import * as Switch from '@radix-ui/react-switch';
import { styled } from '../../../stitches.config';

export const SwitchRoot = styled(Switch.Root, {
	all: 'unset',
	width: '4.2rem',
	height: '2.5rem',
	backgroundColor: '$blackA7',
	borderRadius: '9999px',
	position: 'relative',
	boxShadow: '0 0.2rem 1rem $blackA7',
	'-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',

	'&:focus': {
		boxShadow: '0 0 0 0.2rem $blackA7',
	},

	'&[data-state="checked"]': {
		backgroundColor: '$blackA9',
	},
});

export const SwitchThumb = styled(Switch.Thumb, {
	display: 'block',
	width: '2.1rem',
	height: '2.1rem',
	backgroundColor: '$whiteA12',
	borderRadius: '9999px',
	boxShadow: '0 0.2rem 0.2rem $blackA7',
	transition: 'transform 100ms',
	transform: 'translateX(0.2rem)',
	willChange: 'transform',

	'&[data-state="checked"]': {
		transform: 'translateX(1.9rem)',
	},
});

export const Label = styled('label', {
	fontSize: '1.5rem',
	lineHeight: '1',
	paddingRight: '1.5rem',
	color: '$body',
});
