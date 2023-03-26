import { useMemo } from 'react';
import { List } from '../base/List.styled';
import { Text } from '../base/Text.styled';

interface CmsRichTextProps {
	content: string;
	isMarkDown?: boolean;
}

export const CmsRichText = ({
	content,
	isMarkDown = true,
}: CmsRichTextProps) => {
	const sanitizedHtml = useMemo(() => {
		if (!isMarkDown) return content;

		const showdown = require('showdown');
		const converter = new showdown.Converter();
		const html: string = converter.makeHtml(content);

		return html.replace(/\n/g, '');
	}, [content, isMarkDown]);

	const htmlTagRegex = /<(p|ul|li|em)>(.*?)<\/\1>/g;
	const htmlTagMatches = sanitizedHtml.match(htmlTagRegex);

	if (!htmlTagMatches) {
		return <>{sanitizedHtml}</>;
	}

	return (
		<>
			{htmlTagMatches.map((htmlTagMatch, index) => {
				switch (htmlTagMatch.slice(0, 3)) {
					case '<p>':
						return (
							<Text key={index}>
								<CmsRichText
									content={htmlTagMatch.replace(/<\/?p>/g, '')}
									isMarkDown={false}
								/>
							</Text>
						);
					case '<ul':
						return (
							<List key={index}>
								<CmsRichText
									content={htmlTagMatch.replace(/<\/?ul>/g, '')}
									isMarkDown={false}
								/>
							</List>
						);
					case '<li':
						return (
							<li key={index}>
								<CmsRichText
									content={htmlTagMatch.replace(/<\/?li>/g, '')}
									isMarkDown={false}
								/>
							</li>
						);
					case '<em':
						return (
							<em key={index}>
								<CmsRichText
									content={htmlTagMatch.replace(/<\/?em>/g, '')}
									isMarkDown={false}
								/>
							</em>
						);
					default:
						return htmlTagMatch;
				}
			})}
		</>
	);
};
