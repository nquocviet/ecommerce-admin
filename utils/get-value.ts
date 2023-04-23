export const getValue = (value: unknown): string => {
	if (!value) return '–'
	return String(value)
}
