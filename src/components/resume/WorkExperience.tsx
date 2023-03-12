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
							{getHeading(role, companyName, city, experience.length)}
							{getExperienceList(experience)}
						</CompanyListItem>
					);
				}
			)}
		</List>
	);
};

const getHeading = (
	role: string,
	companyName: string,
	city: string,
	experienceCount: number
) => {
	if (experienceCount === 1) {
		return (
			<>
				<Heading size={'xs'} css={{ marginBottom: '$1' }}>{`${role}`}</Heading>
				<Text margin={'none'}>{`${companyName}, ${city}`}</Text>
			</>
		);
	}

	return (
		<>
			<Heading
				size={'xs'}
				css={{ marginBottom: '$1' }}
			>{`${companyName}`}</Heading>
			<Text margin={'none'}>{`${city}`}</Text>
		</>
	);
};

const getExperienceList = (
	experienceList: Array<ComponentResumeWorkExperience>
) => {
	if (experienceList.length === 1) {
		const { description } = experienceList[0];

		if (!description) return;

		return <CmsRichText content={description} />;
	}

	return (
		<>
			{experienceList.map((experience, index) => {
				const { id, role, description } = experience;

				if (!description) return;

				return (
					<List key={`experience-${index}-${id}`} type={'noBullets'}>
						<Text>{role}</Text>
						<CmsRichText content={description} />
					</List>
				);
			})}
		</>
	);
};
