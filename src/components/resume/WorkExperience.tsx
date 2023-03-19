import { styled } from '../../../stitches.config';
import { ComponentResumeWorkExperience, Maybe } from '../../../types/cmsTypes';
import { Heading } from '../base/Heading.styled';
import { List } from '../base/List.styled';
import { Text } from '../base/Text.styled';
import { CmsRichText } from '../CmsRichText/CmsRichText';

interface WorkExperienceProps {
	workExperience: Maybe<ComponentResumeWorkExperience>[];
}

type Company = Omit<
	ComponentResumeWorkExperience,
	'startDate' | 'endDate' | 'description'
>;

type ExperienceAtCompany = Company & {
	experience: ComponentResumeWorkExperience[];
};

const CompanyListItem = styled('li', {
	marginBottom: '$6',
});

export const WorkExperience = ({ workExperience }: WorkExperienceProps) => {
	const sortedWorkExperience = [...workExperience].sort(
		(a, b) => b?.startDate - a?.startDate
	);

	const workExperienceList = sortedWorkExperience.reduce(
		(workExperienceList, experience) => {
			if (!experience) return workExperienceList;

			if (workExperienceList.length > 0) {
				const lastItemIndex = workExperienceList.length - 1;
				const lastWorkExperience = workExperienceList[lastItemIndex];

				if (
					lastWorkExperience &&
					lastWorkExperience.companyName === experience.companyName &&
					lastWorkExperience.city === experience.city
				) {
					workExperienceList[lastItemIndex].experience.push(experience);
					return workExperienceList;
				}
			}

			const { id, companyName, city, role } = experience;
			return [
				...workExperienceList,
				{ id, companyName, city, role, experience: [experience] },
			];
		},
		[] as Array<ExperienceAtCompany>
	);

	return (
		<List type={'noBullets'}>
			{workExperienceList.map(
				({ id, companyName, role, city, experience }, index) => {
					return (
						<CompanyListItem key={`company-${index}-${id}`}>
							{getExperienceList(role, companyName, city, experience)}
						</CompanyListItem>
					);
				}
			)}
		</List>
	);
};

const getExperienceList = (
	role: string,
	companyName: string,
	city: string,
	experienceList: Array<ComponentResumeWorkExperience>
) => {
	if (experienceList.length === 1) {
		const { description } = experienceList[0];

		return (
			<>
				<Heading as={'h2'} size={'xs'} css={{ marginBottom: '$1' }}>
					{role}
				</Heading>

				<Text margin={'bottomOnly'}>{`${companyName}, ${city}`}</Text>

				{!!description && <CmsRichText content={description} />}
			</>
		);
	}

	return (
		<>
			<Heading
				as={'h2'}
				size={'xs'}
				css={{ marginBottom: '$1' }}
			>{`${companyName}`}</Heading>

			<Text margin={'none'}>{`${city}`}</Text>

			<List>
				{experienceList.map((experience, index) => {
					const { id, role, description } = experience;

					return (
						<li key={`${index}-${id}`}>
							<section>
								<Heading as={'h3'} css={{ fontSize: '$5', lineHeight: '1' }}>
									{role}
								</Heading>
								{!!description && <CmsRichText content={description} />}
							</section>
						</li>
					);
				})}
			</List>
		</>
	);
};
