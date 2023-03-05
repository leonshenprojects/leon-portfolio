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

export interface ResumePageProps {
	data: Resume;
}

export default function Home({ pageProps }: AppProps<ResumePageProps>) {
	const { firstName, lastName, profilePicture, profession } = pageProps.data;

	return (
		<ColorModeProvider>
			<Main>
				<Row>
					<TopBar />
				</Row>
				<Head>
					<title>Resume</title>
				</Head>

				<Row>
					<ResumeContainer>
						<ResumeInfo>
							{profilePicture?.data?.attributes?.url && (
								<Avatar
									url={`https://leon-personal.herokuapp.com${profilePicture?.data?.attributes?.url}`}
									firstName={firstName}
									lastName={lastName}
									containerStyles={{ marginTop: '$6' }}
								/>
							)}
							<Heading size={'md'}>{`${firstName} ${lastName}`}</Heading>
							<Separator styles={{ width: '4rem' }} />
							<Text>{profession}</Text>
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
