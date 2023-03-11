import { ComponentResumeInterest, Maybe } from '../../../types/cmsTypes';
import { List } from '../base/List.styled';
import { Text } from '../base/Text.styled';

interface InterestsListProps {
	interests: Maybe<ComponentResumeInterest>[];
}

export const InterestsList = ({ interests }: InterestsListProps) => {
	return (
		<List margin={'none'}>
			{interests.map((interest, index) => (
				<Text as="li" key={`${index} - ${interest}`} margin="none" size="sm">
					{interest?.name}
				</Text>
			))}
		</List>
	);
};
