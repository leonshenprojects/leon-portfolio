import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
	it('renders a heading', () => {
		const { container } = render(<Home />);

		const heading = screen.getByText('Hello, from Stitches.');

		expect(heading).toBeInTheDocument();

		expect(container).toMatchSnapshot();
	});
});
