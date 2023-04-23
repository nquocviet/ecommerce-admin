import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { CustomerGroupEntity } from '@/types/customer-group'

export const useGroups = () => {
	return useSWR<CustomerGroupEntity[]>(
		'/api/staticdata?type=customer_group',
		fetcher
	)
}
