import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { CountryEntity } from '@/types/country'

export const useCountries = () => {
	return useSWR<CountryEntity[]>('/api/staticdata?type=country', fetcher)
}
