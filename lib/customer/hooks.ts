import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { CustomerEntity } from '@/types/customer'

export const useCustomers = () => {
	return useSWR<CustomerEntity[]>('/api/staticdata?type=customer', fetcher)
}
