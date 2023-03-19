/**
 * Formats a date object as a string in the specified format.
 *
 * @param {Date} date - The date object to format.
 * @param {string} [format] - The format string. Must be in the format "DD MMMM YYYY", "MMMM YYYY", or "YYYY".
 *                          - DD: two-digit day of the month (01-31)
 *                          - MMM: three-letter month abbreviation (Jan-Dec)
 *                          - MMMM: full month name (January-December)
 *                          - YYYY: four-digit year
 * 													- default is "DD MMMM YYYY"
 * @returns {string} The formatted date string.
 *
 * @throws {Error} If the format parameter is invalid.
 */
export const getFormattedDate = (
	date: Date,
	format: string = 'DD MMMM YYYY'
) => {
	// Validate the format string
	if (!/^((DD)?\s)?((MMMM|MMM)\s)?YYYY$/.test(format)) {
		throw new Error(`Invalid format string - ${format}`);
	}

	// Construct the options object based on the format string
	const options: Intl.DateTimeFormatOptions = {
		day: format.includes('DD') ? '2-digit' : undefined,
		month: format.includes('MMMM') ? 'long' : 'short',
		year: format.includes('YYYY') ? 'numeric' : undefined,
	};

	return date.toLocaleDateString('en-GB', options);
};
