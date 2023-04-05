export const hasChildren = (item: Record<string, unknown>) => {
	const { children } = item

	if (
		children === undefined ||
		children?.constructor !== Array ||
		(children as unknown[]).length === 0
	) {
		return false
	}

	return true
}
