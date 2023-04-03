import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const useGroups = () => {
	return useSWR('/api/staticdata?type=customer_group', fetcher)
}
