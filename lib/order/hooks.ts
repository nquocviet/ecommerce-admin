import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { OrderEntity } from '@/types/order'

export const useOrders = () => {
	return useSWR<OrderEntity[]>('/api/staticdata?type=order', fetcher)
}
