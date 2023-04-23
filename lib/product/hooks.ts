import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { ProductDetailEntity, ProductEntity } from '@/types/product'

export const useProducts = () => {
	return useSWR<ProductEntity[]>('/api/staticdata?type=product', fetcher)
}

export const useProductDetail = () => {
	return useSWR<ProductDetailEntity>(
		'/api/staticdata?type=product_detail',
		fetcher
	)
}

export const useProductGiftCard = () => {
	return useSWR<ProductDetailEntity>(
		'/api/staticdata?type=product_giftcard',
		fetcher
	)
}
