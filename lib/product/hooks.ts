import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const useProducts = () => {
	return useSWR('/api/staticdata?type=product', fetcher)
}

export const useProductGiftCard = () => {
	return useSWR('/api/staticdata?type=product_giftcard', fetcher)
}
