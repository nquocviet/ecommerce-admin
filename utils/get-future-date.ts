export const getFutureDate = (dateRange = 1) =>
	new Date(
		new Date().getTime() +
			24 * 60 * 60 * 1000 * Math.floor(Math.random() * dateRange)
	)
