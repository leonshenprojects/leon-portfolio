import Head from 'next/head';
import { useState } from 'react';
import { darkTheme, styled } from '../stitches.config';
import { Text } from '../src/Components/Base/Text.styled';
import { Box } from '../src/Components/Base/Box.styled';
import { Heading } from '../src/Components/Base/Heading';
import { Row } from '../src/Components/Base/Row';

const Main = styled('main', {
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: '$background',
	height: '100%',
});

const Link = styled('a', {
	color: '$text',
	textDecoration: 'none',

	[`.${darkTheme} &`]: {
		color: 'red',
	},
});

const Button = styled('button', {});

export default function Home() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	const inActiveTheme = theme === 'dark' ? 'light' : 'dark';

	return (
		<Main className={theme === 'dark' ? darkTheme : undefined}>
			<Head>
				<title>Use Stitches with Next.js</title>
			</Head>
			<Text as="h1">Hello, from Stitches.</Text>

			<Row>
				<Box css={{ width: '50rem' }}>
					<Heading size={'xs'}>
						This is some gibberish for testing the text styled component. I hope
						that it will fill more than two lines.
					</Heading>

					<Text size={'xs'}>
						This is some gibberish for testing the text styled component. I hope
						that it will fill more than two lines.
					</Text>
				</Box>
			</Row>

			<Row width="full">
				<Box css={{ width: '50rem' }}>
					<Heading size={'sm'}>
						This is some gibberish for testing the text styled component. I hope
						that it will fill more than two lines.
					</Heading>

					<Text size={'sm'}>
						This is some gibberish for testing the text styled component. I hope
						that it will fill more than two lines.
					</Text>
				</Box>
			</Row>

			<Row>
				<Box css={{ width: '50rem' }}>
					<Heading size={'md'}>
						This is some gibberish for testing the text styled component. I hope
						that it will fill more than two lines.
					</Heading>

					<Text size={'md'}>
						This is some gibberish for testing the text styled component. I hope
						that it will fill more than two lines.
					</Text>
				</Box>
			</Row>

			<Row>
				<Box css={{ width: '50rem' }}>
					<Heading size={'lg'}>
						This is some gibberish for testing the text styled component. I hope
						that it will fill more than two lines.
					</Heading>

					<Text size={'lg'}>
						This is some gibberish for testing the text styled component. I hope
						that it will fill more than two lines.
					</Text>
				</Box>
			</Row>

			<Row>
				<Box css={{ width: '50rem' }}>
					<Heading size={'xl'}>
						This is some gibberish for testing the text styled component. I hope
						that it will fill more than two lines.
					</Heading>

					<Text size={'xl'}>
						This is some gibberish for testing the text styled component. I hope
						that it will fill more than two lines.
					</Text>
				</Box>
			</Row>

			<Row>
				<Button onClick={toggleTheme}>Switch to {inActiveTheme}</Button>
			</Row>
		</Main>
	);
}
