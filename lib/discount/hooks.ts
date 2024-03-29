import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { DiscountEntity } from '@/types/discount'

export const useDiscounts = () => {
	return useSWR<DiscountEntity[]>('/api/staticdata?type=discount', fetcher)
}

export const useDiscountDetails = () => {
	return useSWR<DiscountEntity>(
		'/api/staticdata?type=discount_details',
		fetcher
	)
}
