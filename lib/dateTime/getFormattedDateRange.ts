import { getFormattedDate } from './getFormattedDate';

/**
 * Formats a date object as a string in the specified format.
 *
 * @param {Date} startDate  - The start date object to format.
 * @param {Date} [endDate]  - The end date object to format.
 *                          - If undefined then the word "present" is used.
 * @param {string} [format] - The format string. Must be in the format "DD MMMM YYYY", "MMMM YYYY", or "YYYY".
 *                          - DD: two-digit day of the month (01-31)
 *                          - MMM: three-letter month abbreviation (Jan-Dec)
 *                          - MMMM: full month name (January-December)
 *                          - YYYY: four-digit year
 * 													- default is "DD MMMM YYYY"
 * @returns {string} The formatted date range string.
 *
 * @throws {Error} If the end date is greater than the start date.
 */
export const getFormattedDateRange = (
	startDate: Date,
	endDate?: Date,
	format: string = 'DD MMMM YYYY'
) => {
	const startStr = getFormattedDate(startDate, format);
	const endStr = endDate ? getFormattedDate(endDate, format) : 'Present';

	if (endDate && startDate > endDate) {
		throw new Error('Start date must be before end date');
	}

	if (startDate.getFullYear() === endDate?.getFullYear()) {
		// same year
		if (startDate.getMonth() === endDate?.getMonth()) {
			// same month
			if (startDate.getDate() === endDate?.getDate()) {
				// same day
				return `${startStr}`;
			} else {
				// different day
				if (!endDate) {
					return `${getFormattedDate(startDate, 'DD MMM YYYY')} - ${endStr}`;
				}

				return `${getFormattedDate(
					startDate,
					'DD MMM YYYY'
				)} - ${getFormattedDate(endDate, 'DD MMM YYYY')}`;
			}
		}
	}

	return `${startStr} - ${endStr}`;
};
