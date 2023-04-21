import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export const useCountries = () => {
	return useSWR('/api/staticdata?type=country', fetcher)
}
