import Head from 'next/head';
import { Heading } from '../src/Ccomponents/Bbase/Heading.styled';
import { Row } from '../src/Ccomponents/Bbase/Row.styled';
import { TopBar } from '../src/Ccomponents/TopBar/TopBar';
import {
	ResumeContainer,
	ResumeInfo,
	ResumeMain,
} from '../src/Ccomponents/resume/Resume.styled';
import ColorModeProvider from '../src/context/colorMode/colorModeContext';
import { Main } from '../src/Ccomponents/Bbase/Main.styled';

export default function Home() {
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
							<Heading size={'md'}>Info 1</Heading>
							<Heading size={'md'}>Info 2</Heading>
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
