import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { OrderDraftEntity } from '@/types/order'

export const useOrderDrafts = () => {
	return useSWR<OrderDraftEntity[]>('/api/staticdata?type=order_draft', fetcher)
}
