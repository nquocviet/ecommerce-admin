import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { ProductDetailsEntity, ProductEntity } from '@/types/product'

export const useProducts = () => {
	return useSWR<ProductEntity[]>('/api/staticdata?type=product', fetcher)
}

export const useProductDetails = () => {
	return useSWR<ProductDetailsEntity>(
		'/api/staticdata?type=product_details',
		fetcher
	)
}

export const useProductGiftCard = () => {
	return useSWR<ProductDetailsEntity>(
		'/api/staticdata?type=product_giftcard',
		fetcher
	)
}
