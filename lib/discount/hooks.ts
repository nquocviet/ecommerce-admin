import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const useDiscounts = () => {
	return useSWR('/api/staticdata?type=discount', fetcher)
}
