import { ComponentResumeSkill, Maybe } from '../../../../types/cmsTypes';
import { List } from '../../base/List.styled';
import { Text } from '../../base/Text.styled';

interface SkillsListProps {
	skills: Maybe<ComponentResumeSkill>[];
}

type SkillsByCategory = Record<string, Array<string>>;

export const SkillsList = ({ skills }: SkillsListProps) => {
	const skillsByCategory = skills.reduce((skillsByCategory, currentSkill) => {
		if (!currentSkill) return skillsByCategory;

		if (currentSkill.category in skillsByCategory) {
			return {
				...skillsByCategory,
				[currentSkill.category]: [
					...skillsByCategory[currentSkill.category],
					currentSkill.name,
				],
			};
		}

		return {
			...skillsByCategory,
			[currentSkill.category]: [currentSkill.name],
		};
	}, {} as SkillsByCategory);

	return (
		<List margin={'none'}>
			{Object.keys(skillsByCategory).map((category, index) => (
				<Text as="li" key={`${index} - ${category}`} margin={'none'} size="sm">
					{category}
					<List margin={'none'}>
						{skillsByCategory[category].map((skillName, index) => (
							<Text
								as="li"
								key={`${index} - ${category} - ${skillName}`}
								margin="none"
								size="sm"
							>
								{skillName}
							</Text>
						))}
					</List>
				</Text>
			))}
		</List>
	);
};
