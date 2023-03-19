import { getFormattedDateRange } from './getFormattedDateRange';

describe('getFormattedDateRange', () => {
	it('returns correct date range', () => {
		const startDate = new Date('2023-01-01');
		const expected = 'January 2023 - Present';
		expect(getFormattedDateRange(startDate, undefined, 'MMMM YYYY')).toEqual(
			expected
		);
	});

	it('returns correct date range', () => {
		const startDate = new Date('2023-01-01');
		const expected = 'Jan 2023 - Present';
		expect(getFormattedDateRange(startDate, undefined, 'YYYY')).toEqual(
			expected
		);
	});

	it('returns correct date range', () => {
		const startDate = new Date('2022-01-01');
		const endDate = new Date('2023-03-01');
		const expected = 'January 2022 - March 2023';
		expect(getFormattedDateRange(startDate, endDate, 'MMMM YYYY')).toEqual(
			expected
		);
	});

	it('returns correct date range', () => {
		const startDate = new Date('2022-03-01');
		const endDate = new Date('2023-03-20');
		const expected = 'Mar 2022 - Mar 2023';
		expect(getFormattedDateRange(startDate, endDate, 'YYYY')).toEqual(expected);
	});

	it('returns correct date range', () => {
		const startDate = new Date('2022-03-01');
		const endDate = new Date('2023-03-20');
		const expected = 'March 2022 - March 2023';
		expect(getFormattedDateRange(startDate, endDate, 'MMMM YYYY')).toEqual(
			expected
		);
	});

	it('returns correct date range', () => {
		const startDate = new Date('2023-03-01');
		const endDate = new Date('2023-03-01');
		const expected = 'March 2023';
		expect(getFormattedDateRange(startDate, endDate, 'MMMM YYYY')).toEqual(
			expected
		);
	});

	it('returns correct date range', () => {
		const startDate = new Date('2023-03-01');
		const endDate = new Date('2023-03-01');
		const expected = '01 March 2023';
		expect(getFormattedDateRange(startDate, endDate, 'DD MMMM YYYY')).toEqual(
			expected
		);
	});

	it('returns correct date range', () => {
		const startDate = new Date('2023-03-01');
		const endDate = new Date('2023-03-05');
		const expected = '01 Mar 2023 - 05 Mar 2023';
		expect(getFormattedDateRange(startDate, endDate, 'MMMM YYYY')).toEqual(
			expected
		);
	});

	it('returns correct date range', () => {
		const startDate = new Date('2023-01-01');
		const endDate = new Date('2023-02-05');
		const expected = 'January 2023 - February 2023';
		expect(getFormattedDateRange(startDate, endDate, 'MMMM YYYY')).toEqual(
			expected
		);
	});

	it('returns correct date range', () => {
		const startDate = new Date('2023-01-01');
		const endDate = new Date('2023-02-05');
		const expected = '01 January 2023 - 05 February 2023';
		expect(getFormattedDateRange(startDate, endDate, 'DD MMMM YYYY')).toEqual(
			expected
		);
	});

	it('returns correct date range', () => {
		const startDate = new Date('2023-01-01');
		const endDate = new Date('2023-02-05');
		const expected = '01 Jan 2023 - 05 Feb 2023';
		expect(getFormattedDateRange(startDate, endDate, 'DD MMM YYYY')).toEqual(
			expected
		);
	});

	it('returns correct date range', () => {
		const startDate = new Date('2023-01-01');
		const expected = '01 Jan 2023 - Present';
		expect(getFormattedDateRange(startDate, undefined, 'DD MMM YYYY')).toEqual(
			expected
		);
	});
});
