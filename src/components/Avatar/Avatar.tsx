import { CSS } from '@stitches/react';
import { Text } from '../base/Text.styled';
import { AvatarFallback, AvatarImage, AvatarRoot } from './Avatar.styled';

export interface AvatarProps {
	url: string;
	firstName: string;
	lastName: string;
	containerStyles?: CSS;
}

export const Avatar = ({
	url,
	firstName,
	lastName,
	containerStyles,
}: AvatarProps) => {
	return (
		<AvatarRoot css={containerStyles}>
			<AvatarImage src={url} alt={getAltText(firstName, lastName)} />
			<AvatarFallback delayMs={600}>
				<Text margin="none" size="xl">
					{getInitials(firstName, lastName)}
				</Text>
			</AvatarFallback>
		</AvatarRoot>
	);
};

const getAltText = (firstName: string, lastName: string) => {
	if (firstName.length === 0 || lastName.length === 0) {
		return 'Avatar';
	}

	return `Avatar of ${firstName} ${lastName}`;
};

const getInitials = (firstName: string, lastName: string) => {
	if (firstName.length === 0 || lastName.length === 0) {
		return '??';
	}

	return `${firstName[0]}${lastName[0]}`.toUpperCase();
};
