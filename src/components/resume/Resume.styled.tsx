import { styled } from '../../../stitches.config';

export const ResumeContainer = styled('div', {
	display: 'grid',
	gridTemplateColumns: '1fr',
	gridTemplateAreas: '"info" "main"',
	border: '1px solid $slate6',

	'@bp3': {
		gridTemplateColumns: '1fr 2fr',
		gridTemplateAreas: '"info main"',
	},
});

export const ResumeInfo = styled('div', {
	gridArea: 'info',
	backgroundColor: '$cyan2',
	padding: '$10 $6',
});

export const ResumeMain = styled('div', {
	gridArea: 'main',
	backgroundColor: '$cyan3',
});
