import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const useCollections = () => {
	return useSWR('/api/staticdata?type=collection', fetcher)
}
