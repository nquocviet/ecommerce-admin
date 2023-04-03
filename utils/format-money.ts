export const formatMoney = (total: number, currency = 'USD') => {
	const formatCurrency = new Intl.NumberFormat(undefined, {
		style: 'currency',
		currency,
	}).format(total)

	return formatCurrency
}
