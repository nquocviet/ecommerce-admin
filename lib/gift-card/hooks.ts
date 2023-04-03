import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const useGiftCards = () => {
	return useSWR('/api/staticdata?type=gift_card', fetcher)
}
