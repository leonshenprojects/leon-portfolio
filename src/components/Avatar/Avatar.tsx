import { AvatarFallback, AvatarImage, AvatarRoot } from './Avatar.styled';

export interface AvatarProps {
	url: string;
	firstName: string;
	lastName: string;
}

export const Avatar = ({ url, firstName, lastName }: AvatarProps) => {
	return (
		<AvatarRoot>
			<AvatarImage src={url} alt={getAltText(firstName, lastName)} />
			<AvatarFallback delayMs={600}>
				{getInitials(firstName, lastName)}
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
