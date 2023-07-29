import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { OrderDetailsEntity, OrderEntity } from '@/types/order'

export const useOrders = () => {
	return useSWR<OrderEntity[]>('/api/staticdata?type=order', fetcher)
}

export const useOrderDetails = () => {
	return useSWR<OrderDetailsEntity>(
		'/api/staticdata?type=order_details',
		fetcher
	)
}
