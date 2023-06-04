'use client';

import * as Separator from '@radix-ui/react-separator';
import { styled } from '../../../stitches.config';

export const SeparatorRoot = styled(Separator.Root, {
	backgroundColor: '$hiContrast',
	margin: 'auto',

	'&[data-orientation="horizontal"]': {
		height: '0.1rem',
		minWidth: '10%',
	},

	'&[data-orientation="vertical"]': {
		minHeight: '100%',
		width: '0.1rem',
	},
});
