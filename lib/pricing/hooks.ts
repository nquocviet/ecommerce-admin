import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { PricingEntity } from '@/types/pricing'

export const usePricing = () => {
	return useSWR<PricingEntity[]>('/api/staticdata?type=pricing', fetcher)
}
