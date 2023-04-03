export const toCapitalize = ([first, ...rest]: string, lowerRest = false) => {
	return (
		first.toUpperCase() +
		(lowerRest ? rest.join('').toLowerCase() : rest.join(''))
	)
}
