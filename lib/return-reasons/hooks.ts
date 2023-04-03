import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const useReturnReasons = () => {
	return useSWR('/api/staticdata?type=return_reasons&loading=false', fetcher)
}
