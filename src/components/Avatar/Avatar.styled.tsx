'use client';

import * as Avatar from '@radix-ui/react-avatar';
import { styled } from '../../../stitches.config';

export const AvatarRoot = styled(Avatar.Root, {
	display: 'block',
	width: '10rem',
	height: '10rem',
	aspectRatio: '1/1',
	borderRadius: '$round',
	backgroundColor: '$blackA9',
	overflow: 'hidden',
});

export const AvatarImage = styled(Avatar.Image, {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: 'inherit',
});

export const AvatarFallback = styled(Avatar.Fallback, {
	display: 'grid',
	placeContent: 'center',
	width: '100%',
	height: '100%',
	backgroundColor: '$whiteA12',
	color: '$body',
	fontFamily: '$heading',
	fontSize: '1.6rem',
	lineHeight: '1',
	fontWeight: '500',
});
