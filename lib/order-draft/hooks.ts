import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const useOrderDrafts = () => {
	return useSWR('/api/staticdata?type=order_draft', fetcher)
}
