import { Metadata } from 'next';
import { Heading } from '../src/components/base/Heading.styled';
import { Row } from '../src/components/base/Row.styled';
import {
	ResumeContainer,
	ResumeInfo,
	ResumeMain,
} from '../src/components/resume/Resume.styled';
import { RESUME_QUERY } from '../queries/resumeQuery';
import { Avatar } from '../src/components/Avatar/Avatar';
import { Resume } from '../types/cmsTypes';
import { Separator } from '../src/components/Separator/Separator';
import { Text } from '../src/components/base/Text.styled';
import { Grid } from '../src/components/base/Grid.styled';
import { SkillsList } from '../src/components/resume/SkillsList';
import { InterestsList } from '../src/components/resume/InterestsList';
import { WorkExperience } from '../src/components/resume/WorkExperience';
import { CmsRichText } from '../src/components/CmsRichText/CmsRichText';
import { Education } from '../src/components/resume/Education';
import { ContactDetails } from '../src/components/resume/ContactDetails';
import { getClient } from '../lib/client';

export const metadata: Metadata = {
	title: 'Leon Shen',
};

type ResumeData = {
	resume: {
		data: {
			attributes: Resume;
		};
	};
};

export default async function Page() {
	const res = await getClient().query<ResumeData>({
		query: RESUME_QUERY,
		context: {
			fetchOptions: {
				next: { revalidate: 10 },
			},
		},
	});

	const {
		firstName,
		lastName,
		profilePicture,
		profession,
		address,
		mobile,
		email,
		linkedInUrl,
		Skills,
		interests,
		Summary,
		workExperience,
		education,
	} = res.data.resume.data.attributes;

	return (
		<Row css={{ marginBottom: '$6' }}>
			<ResumeContainer>
				<ResumeInfo>
					<Grid css={{ placeItems: 'center' }}>
						{profilePicture?.data?.attributes?.url && (
							<Avatar
								url={profilePicture?.data?.attributes?.url}
								firstName={firstName}
								lastName={lastName}
								containerStyles={{ marginBottom: '$4' }}
							/>
						)}
						<Heading size={'md'}>{`${firstName} ${lastName}`}</Heading>
						<Separator styles={{ width: '4rem' }} />
						<Text>{profession}</Text>
					</Grid>

					<Grid
						css={{
							display: 'none',
							marginTop: '$4',
							'@bp3': { display: 'block' },
						}}
					>
						<Heading size={'sm'} css={{ marginBottom: '$2' }}>
							Details
						</Heading>

						<ContactDetails
							address={address}
							email={email}
							linkedInUrl={linkedInUrl}
							mobile={mobile}
						/>
					</Grid>

					{Skills && (
						<Grid
							css={{
								display: 'none',
								marginTop: '$8',
								'@bp3': { display: 'block' },
							}}
						>
							<Heading size={'sm'} css={{ marginBottom: '$2' }}>
								Tech Stack
							</Heading>

							<SkillsList skills={Skills} />
						</Grid>
					)}

					{interests && (
						<Grid
							css={{
								display: 'none',
								marginTop: '$8',
								'@bp3': { display: 'block' },
							}}
						>
							<Heading size={'sm'} css={{ marginBottom: '$2' }}>
								Interests
							</Heading>

							<InterestsList interests={interests} />
						</Grid>
					)}
				</ResumeInfo>

				<ResumeMain>
					<Row width={'full'} css={{ marginBottom: '$8' }}>
						<Heading size={'md'} margin={'bottomOnly'}>
							Summary
						</Heading>

						<CmsRichText content={Summary} />
					</Row>

					<Row width={'full'} css={{ marginBottom: '$8' }}>
						<Heading size={'md'}>Work experience</Heading>

						<WorkExperience workExperience={workExperience} />
					</Row>

					<Row width={'full'} css={{ marginBottom: '$8' }}>
						<Heading size={'md'}>Education</Heading>

						<Education education={education} />
					</Row>

					{Skills && (
						<Row
							width={'full'}
							css={{ marginBottom: '$8', '@bp3': { display: 'none' } }}
						>
							<Heading size={'md'} css={{ marginBottom: '$2' }}>
								Tech Stack
							</Heading>

							<SkillsList skills={Skills} />
						</Row>
					)}

					{interests && (
						<Row
							width={'full'}
							css={{ marginBottom: '$8', '@bp3': { display: 'none' } }}
						>
							<Heading size={'md'} css={{ marginBottom: '$2' }}>
								Interests
							</Heading>

							<InterestsList interests={interests} />
						</Row>
					)}

					<Row
						width={'full'}
						css={{ marginBottom: '$8', '@bp3': { display: 'none' } }}
					>
						<Heading size={'md'} css={{ marginBottom: '$2' }}>
							Contact details
						</Heading>

						<ContactDetails
							address={address}
							email={email}
							linkedInUrl={linkedInUrl}
							mobile={mobile}
						/>
					</Row>
				</ResumeMain>
			</ResumeContainer>
		</Row>
	);
}
