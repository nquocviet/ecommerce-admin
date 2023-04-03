export const getStockOfVariants = (variants: any[]) => {
	const totalVariants: number = variants?.length || 0
	const totalQuantity: number =
		variants?.reduce((prev, curr) => {
			return prev + curr?.inventory_quantity
		}, 0) || 0

	return {
		total: totalVariants,
		quantity: totalQuantity,
	}
}
