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

	const topLevelTagsRegex = /<(p|ul)>(.*?)<\/\1>/g;
	const secondLevelTagsRegex = /<(li)>(.*?)<\/\1>/g;

	const topLevelTagMatches = sanitizedHtml.match(topLevelTagsRegex);

	if (topLevelTagMatches) {
		return (
			<>
				{topLevelTagMatches.map((topLevelTagMatch) => {
					switch (topLevelTagMatch.slice(0, 3)) {
						case '<p>':
							return (
								<Text>
									<CmsRichText
										content={topLevelTagMatch.replace(/<\/?p>/g, '')}
										isMarkDown={false}
									/>
								</Text>
							);
						case '<ul':
							return (
								<List>
									<CmsRichText
										content={topLevelTagMatch.replace(/<\/?ul>/g, '')}
										isMarkDown={false}
									/>
								</List>
							);
						default:
							return topLevelTagMatch;
					}
				})}
			</>
		);
	}

	const secondLevelMatches = sanitizedHtml.match(secondLevelTagsRegex);

	if (secondLevelMatches) {
		return (
			<>
				{secondLevelMatches.map((secondLevelMatch) => {
					switch (secondLevelMatch.slice(0, 3)) {
						case '<li':
							return <li>{secondLevelMatch.replace(/<\/?li>/g, '')}</li>;
						default:
							return secondLevelMatch;
					}
				})}
			</>
		);
	}

	return <>{sanitizedHtml}</>;
};
