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
import { RESUME_QUERY } from '../queries/resumeQuery';
import { Avatar } from '../src/components/Avatar/Avatar';
import { Resume } from '../types/cmsTypes';
import { Separator } from '../src/components/Separator/Separator';
import { Text } from '../src/components/base/Text.styled';
import { Grid } from '../src/components/base/Grid.styled';
import { Link } from '../src/components/base/Link.styled';
import { SkillsList } from '../src/components/resume/SkillsList';
import { InterestsList } from '../src/components/resume/InterestsList';

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
	} = pageProps.data;

	return (
		<ColorModeProvider>
			<Main>
				<Row>
					<TopBar />
				</Row>
				<Head>
					<title>Resume</title>
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

							<Grid css={{ marginTop: '$4' }}>
								<Heading size={'sm'} css={{ marginBottom: '$2' }}>
									Details
								</Heading>
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
							</Grid>

							{Skills && (
								<Grid css={{ marginTop: '$8' }}>
									<Heading size={'sm'} css={{ marginBottom: '$2' }}>
										Tech Stack
									</Heading>

									<SkillsList skills={Skills} />
								</Grid>
							)}

							{interests && (
								<Grid css={{ marginTop: '$8' }}>
									<Heading size={'sm'} css={{ marginBottom: '$2' }}>
										Interests
									</Heading>

									<InterestsList interests={interests} />
								</Grid>
							)}
						</ResumeInfo>

						<ResumeMain>
							<Heading size={'md'}>Main 1</Heading>
							<Heading size={'md'}>Main 2</Heading>
							<Heading size={'md'}>Main 3</Heading>
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

	const { data } = await client.query({
		query: RESUME_QUERY,
	});

	return { props: { pageProps: { data: data.resume.data.attributes } } };
};
