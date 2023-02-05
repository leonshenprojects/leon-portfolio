import { styled } from '../../../stitches.config';

export const Flex = styled('div', {
	display: 'flex',
	flexWrap: 'wrap',

	variants: {
		alignItems: {
			start: { alignItems: 'flex-start' },
			center: { alignItems: 'center' },
			end: { alignItems: 'flex-end' },
		},
		alignContent: {
			start: { alignContent: 'flex-start' },
			center: { alignContent: 'center' },
			end: { alignContent: 'flex-end' },
		},
		justifyContent: {
			start: { justifyContent: 'flex-start' },
			center: { justifyContent: 'center' },
			end: { justifyContent: 'flex-end' },
		},
		direction: {
			row: { flexDirection: 'row' },
			rowReverse: { flexDirection: 'row-reverse' },
			column: { flexDirection: 'column' },
			columnReverse: { flexDirection: 'column-reverse' },
		},
	},
});
