export const formatDate = (
	date: ConstructorParameters<typeof Date>[0],
	opts?: Intl.DateTimeFormatOptions,
	locales: string | string[] = 'en-UK'
): string => {
	const defaultOptions: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	}
	const options = opts || defaultOptions

	return new Intl.DateTimeFormat(locales, options).format(new Date(date))
}
