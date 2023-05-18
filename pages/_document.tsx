import { Head, Html, Main, NextScript } from 'next/document';
import { getCssText, globalStyles } from '../stitches.config';
import { Analytics } from '@vercel/analytics/react';

export default function MyDocument() {
	globalStyles();
	return (
		<Html lang="en">
			<Head>
				<style
					id="stitches"
					dangerouslySetInnerHTML={{ __html: getCssText() }}
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Open+Sans:wght@400;600&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
				<Analytics />
			</body>
		</Html>
	);
}
