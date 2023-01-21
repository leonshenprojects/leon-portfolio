import Head from 'next/head';
import { useState } from 'react';
import { darkTheme, styled } from '../stitches.config';

const Main = styled('main', {
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: '$background',
	height: '100%',
});

const Text = styled('p', { color: '$text' });

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
			<Text as="h2">Hello Leon.</Text>
			<Text>
				For full documentation, visit{' '}
				<Link href="https://stitches.dev">stitches.dev</Link>.
			</Text>

			<Button onClick={toggleTheme}>Switch to {inActiveTheme}</Button>
		</Main>
	);
}
