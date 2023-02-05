import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import * as stories from './Switch.stories';

const { Default } = composeStories(stories);
expect.extend(toHaveNoViolations);

describe('Switch', () => {
	it('should not have any accessibility violations', async () => {
		const { container } = render(<Default />);
		await act(async () => {
			const results = await axe(container);
			expect(results).toHaveNoViolations();
		});
	});
});
