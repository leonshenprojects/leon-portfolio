import { CSS } from '@stitches/react';
import { SeparatorRoot } from './Separator.styled';

interface SeparatorProps {
	decorative?: boolean;
	orientation?: 'horizontal' | 'vertical';
	styles?: CSS;
}

export const Separator = ({
	decorative = true,
	orientation = 'horizontal',
	styles,
}: SeparatorProps) => {
	return (
		<SeparatorRoot
			decorative={decorative}
			orientation={orientation}
			css={styles}
		/>
	);
};
