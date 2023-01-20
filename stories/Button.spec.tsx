import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import * as stories from './Button.stories';

const { Primary } = composeStories(stories);
expect.extend(toHaveNoViolations);

describe('MainBanner', () => {
	it('should not have any accessibility violations', async () => {
		const { container } = render(<Primary />);
		await act(async () => {
			const results = await axe(container);
			expect(results).toHaveNoViolations();
		});
	});
	it('should render the main banner', () => {
		const { getByText, getByRole } = render(<Primary />);
		expect(getByRole('button')).toHaveTextContent('Button');
	});
});
