import { getFormattedDateRange } from '../../../lib/dateTime/getFormattedDateRange';
import { styled } from '../../../stitches.config';
import { ComponentResumeEducation, Maybe } from '../../../types/cmsTypes';
import { Heading } from '../base/Heading.styled';
import { List } from '../base/List.styled';
import { Text } from '../base/Text.styled';
import { CmsRichText } from '../CmsRichText/CmsRichText';

export interface EducationProps {
	education: Maybe<ComponentResumeEducation>[];
}

type Institution = Omit<
	ComponentResumeEducation,
	'startDate' | 'endDate' | 'description' | 'degree'
>;

type EducationAtInstitution = Institution & {
	education: ComponentResumeEducation[];
};

const InstitutionListItem = styled('li', {
	marginBottom: '$6',
});

const EducationListItem = styled('li', {
	'&:not(:last-child)': {
		marginBottom: '$4',
	},
});

export const Education = ({ education }: EducationProps) => {
	const sortedEducation = [...education].sort(
		(a, b) => b?.startDate - a?.startDate
	);

	const educationList = sortedEducation.reduce((educationList, education) => {
		if (!education) return educationList;

		if (educationList.length > 0) {
			const lastItemIndex = educationList.length - 1;
			const prevEducation = educationList[lastItemIndex];

			if (
				prevEducation &&
				prevEducation.institution === education.institution
			) {
				educationList[lastItemIndex].education.push(education);
				return educationList;
			}
		}

		const { id, institution } = education;
		return [...educationList, { id, institution, education: [education] }];
	}, [] as Array<EducationAtInstitution>);

	return (
		<List type={'noBullets'}>
			{educationList.map(({ id, institution, education }, index) => {
				return (
					<InstitutionListItem key={`company-${index}-${id}`}>
						{getEducationList(institution, education)}
					</InstitutionListItem>
				);
			})}
		</List>
	);
};

const getEducationList = (
	institution: string,
	educationList: Array<ComponentResumeEducation>
) => {
	if (educationList.length === 1) {
		const { degree, description, startDate, endDate } = educationList[0];
		const startDateObj = new Date(startDate);
		const endDateObj = endDate ? new Date(endDate) : undefined;

		return (
			<>
				<Heading as={'h2'} size={'xs'} css={{ marginBottom: '$1' }}>
					{degree}
				</Heading>

				<Text margin={'none'}>{institution}</Text>
				<Text margin={'bottomOnly'}>
					{getFormattedDateRange(startDateObj, endDateObj, 'MMMM YYYY')}
				</Text>

				{!!description && <CmsRichText content={description} />}
			</>
		);
	}

	return (
		<>
			<Heading as={'h2'} size={'xs'} margin={'bottomOnly'}>
				{institution}
			</Heading>

			<List>
				{educationList.map((education, index) => {
					const { id, degree, description, startDate, endDate } = education;
					const startDateObj = new Date(startDate);
					const endDateObj = endDate ? new Date(endDate) : undefined;

					return (
						<EducationListItem key={`${index}-${id}`}>
							<section>
								<Heading
									as={'h3'}
									margin={'none'}
									css={{ fontSize: '$5', lineHeight: '1' }}
								>
									{degree}
								</Heading>

								<Text margin={'bottomOnly'}>
									{getFormattedDateRange(startDateObj, endDateObj, 'MMMM YYYY')}
								</Text>

								{!!description && <CmsRichText content={description} />}
							</section>
						</EducationListItem>
					);
				})}
			</List>
		</>
	);
};
