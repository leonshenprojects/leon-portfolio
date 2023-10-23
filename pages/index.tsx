import Head from 'next/head';
import { Heading } from '../src/components/base/Heading.styled';
import { Row } from '../src/components/base/Row.styled';
import { TopBar } from '../src/components/TopBar/TopBar';
import {
	ResumeContainer,
	ResumeInfo,
	ResumeMain,
} from '../src/components/resume/Resume.styled';
import ColorModeProvider from '../src/context/colorMode/colorModeContext';
import { Main } from '../src/components/base/Main.styled';
import { GetStaticProps } from 'next';
import { AppProps } from 'next/app';
import { cmsBaseUrl } from '../lib/constants';
import { ApolloClient, InMemoryCache } from '@apollo/client';
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
import { data } from './data';

export interface ResumePageProps {
	data: Resume;
}

export default function Home({ pageProps }: AppProps<ResumePageProps>) {
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
	} = pageProps.data;

	return (
		<ColorModeProvider>
			<Main>
				<Row>
					<TopBar />
				</Row>
				<Head>
					<title>Leon Shen</title>
				</Head>

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
			</Main>
		</ColorModeProvider>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const client = new ApolloClient({
		uri: `${cmsBaseUrl}/graphql`,
		cache: new InMemoryCache(),
	});

	return {
		props: { pageProps: { data: data.resume.data.attributes } },
		revalidate: 60,
	};
};
