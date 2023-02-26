import { composeStories } from '@storybook/testing-react';
import { render, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { act } from 'react-dom/test-utils';

import * as stories from './Avatar.stories';

const { Default, WithInvalidUrl, WithInvalidName } = composeStories(stories);
expect.extend(toHaveNoViolations);

describe('Avatar', () => {
	it('should not have any accessibility violations', async () => {
		const { container } = render(<Default />);
		await act(async () => {
			const results = await axe(container);
			expect(results).toHaveNoViolations();
		});
	});

	it('should display an avatar', () => {
		const { findByAltText } = render(<Default />);

		waitFor(() => {
			expect(findByAltText('Avatar of John Doe')).toBeTruthy();
		});
	});

	it('should display the initials', () => {
		const { findByText, queryByRole } = render(<WithInvalidUrl />);

		waitFor(() => {
			expect(findByText('JD')).toBeTruthy();
		});

		expect(queryByRole('img')).toBeFalsy();
	});

	it('should display unknown initials', () => {
		const { findByText, queryByRole } = render(<WithInvalidName />);

		waitFor(() => {
			expect(findByText('??')).toBeTruthy();
		});

		expect(queryByRole('img')).toBeFalsy();
	});
});
