import { AvatarProps } from '../Avatar';

export const MOCK_AVATAR: AvatarProps = {
	url: 'https://via.placeholder.com/505x505',
	firstName: 'John',
	lastName: 'Doe',
};

export const MOCK_AVATAR_WITH_INVALID_URL: AvatarProps = {
	url: 'https://via.placeher.co',
	firstName: 'John',
	lastName: 'Doe',
};

export const MOCK_AVATAR_WITH_INVALID_NAME: AvatarProps = {
	url: 'https://via.placeher.co',
	firstName: '',
	lastName: 'Doe',
};
