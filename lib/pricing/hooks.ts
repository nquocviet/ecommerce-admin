import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const usePricing = () => {
	return useSWR('/api/staticdata?type=pricing', fetcher)
}
