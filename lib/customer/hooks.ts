import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const useCustomers = () => {
	return useSWR('/api/staticdata?type=customer', fetcher)
}
