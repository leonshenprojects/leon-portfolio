import { getCssText, globalStyles } from '../stitches.config';
import { Analytics } from '@vercel/analytics/react';
import ColorModeProvider from '../src/context/colorMode/colorModeContext';
import { Main } from '../src/components/base/Main.styled';
import { Row } from '../src/components/base/Row.styled';
import { TopBar } from '../src/components/TopBar/TopBar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	globalStyles();
	return (
		<html lang="en">
			{/* eslint-disable-next-line @next/next/no-head-element */}
			<head>
				<style
					id="stitches"
					dangerouslySetInnerHTML={{ __html: getCssText() }}
				/>
			</head>
			<body suppressHydrationWarning={true}>
				<ColorModeProvider>
					<Main>
						<Row>
							<TopBar />
						</Row>

						{children}
					</Main>
				</ColorModeProvider>

				<Analytics />
			</body>
		</html>
	);
}
