import {
	ComponentUserAddress,
	ComponentUserMobile,
} from '../../../types/cmsTypes';
import { Heading } from '../base/Heading.styled';
import { Text } from '../base/Text.styled';
import { Link } from '../base/Link.styled';

interface ContactDetailsProps {
	address: ComponentUserAddress;
	email: string;
	linkedInUrl: string;
	mobile: ComponentUserMobile;
}

export const ContactDetails = ({
	address,
	email,
	linkedInUrl,
	mobile,
}: ContactDetailsProps) => {
	return (
		<>
			<Text margin={'none'} size={'sm'}>
				{address.addressLine1}
			</Text>
			{address.addressLine2 && (
				<Text margin={'none'} size={'sm'}>
					{address.addressLine2}
				</Text>
			)}
			<Text
				margin={'none'}
				size={'sm'}
				css={{ marginBottom: '$1' }}
			>{`${address.postCode} ${address.city}`}</Text>

			<Text
				margin={'none'}
				style={'emphasis'}
				size={'sm'}
				css={{ marginBottom: '$1' }}
			>
				<Link
					href={`tel:+${mobile.countryCode}${mobile.areaCode}${mobile.number}`}
				>{`(${mobile.countryCode}) ${mobile.areaCode} ${mobile.number}`}</Link>
			</Text>

			<Text
				margin={'none'}
				style={'emphasis'}
				size={'sm'}
				css={{ marginBottom: '$1' }}
			>
				<Link href={`mailto:${email}`} target="_blank">
					{email}
				</Link>
			</Text>

			<Text margin={'none'} style={'emphasis'} size={'sm'}>
				<Link href={linkedInUrl} target="_blank">
					{linkedInUrl}
				</Link>
			</Text>
		</>
	);
};
