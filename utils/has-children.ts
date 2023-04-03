export const hasChildren = (item: Record<string, any>) => {
	const { children } = item

	if (
		children === undefined ||
		children?.constructor !== Array ||
		children.length === 0
	) {
		return false
	}

	return true
}
