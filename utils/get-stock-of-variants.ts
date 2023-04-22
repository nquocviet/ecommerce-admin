import { ProductVariantEntity } from '@/types/product'

export const getStockOfVariants = (variants: ProductVariantEntity[]) => {
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
