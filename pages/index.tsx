import Head from 'next/head';
import { styled } from '../stitches.config';
import { Text } from '../src/components/Base/Text.styled';
import { Box } from '../src/components/Base/Box.styled';
import { Heading } from '../src/components/Base/Heading.styled';
import { Row } from '../src/components/Base/Row.styled';
import { TopBar } from '../src/components/TopBar/TopBar';
import ColorModeProvider from '../src/context/colorMode/colorModeContext';

const Main = styled('main', {
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: '$background',
	height: '100%',
});

export default function Home() {
	return (
		<ColorModeProvider>
			<Main>
				<Row>
					<TopBar />
				</Row>
				<Head>
					<title>Use Stitches with Next.js</title>
				</Head>
				<Text as="h1">Hello, from Stitches.</Text>

				<Row>
					<Box css={{ width: '50rem' }}>
						<Heading size={'xs'}>
							This is some gibberish for testing the text styled component. I
							hope that it will fill more than two lines.
						</Heading>

						<Text size={'xs'}>
							This is some gibberish for testing the text styled component. I
							hope that it will fill more than two lines.
						</Text>
					</Box>
				</Row>

				<Row width="full">
					<Box css={{ width: '50rem' }}>
						<Heading size={'sm'}>
							This is some gibberish for testing the text styled component. I
							hope that it will fill more than two lines.
						</Heading>

						<Text size={'sm'}>
							This is some gibberish for testing the text styled component. I
							hope that it will fill more than two lines.
						</Text>
					</Box>
				</Row>

				<Row>
					<Box css={{ width: '50rem' }}>
						<Heading size={'md'}>
							This is some gibberish for testing the text styled component. I
							hope that it will fill more than two lines.
						</Heading>

						<Text size={'md'}>
							This is some gibberish for testing the text styled component. I
							hope that it will fill more than two lines.
						</Text>
					</Box>
				</Row>

				<Row>
					<Box css={{ width: '50rem' }}>
						<Heading size={'lg'}>
							This is some gibberish for testing the text styled component. I
							hope that it will fill more than two lines.
						</Heading>

						<Text size={'lg'}>
							This is some gibberish for testing the text styled component. I
							hope that it will fill more than two lines.
						</Text>
					</Box>
				</Row>

				<Row>
					<Box css={{ width: '50rem' }}>
						<Heading size={'xl'}>
							This is some gibberish for testing the text styled component. I
							hope that it will fill more than two lines.
						</Heading>

						<Text size={'xl'}>
							This is some gibberish for testing the text styled component. I
							hope that it will fill more than two lines.
						</Text>
					</Box>
				</Row>
			</Main>
		</ColorModeProvider>
	);
}
