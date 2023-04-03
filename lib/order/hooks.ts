import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const useOrders = () => {
	return useSWR('/api/staticdata?type=order', fetcher)
}
