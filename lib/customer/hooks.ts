import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { CustomerEntity } from '@/types/customer'
import { CustomerGroupEntity } from '@/types/customer-group'

export const useCustomers = () => {
	return useSWR<CustomerEntity[]>('/api/staticdata?type=customer', fetcher)
}

export const useCustomerDetails = () => {
	return useSWR<CustomerEntity>(
		'/api/staticdata?type=customer_details',
		fetcher
	)
}

export const useCustomerGroups = () => {
	return useSWR<CustomerGroupEntity[]>(
		'/api/staticdata?type=customer_group',
		fetcher
	)
}

export const useCustomerGroupDetails = () => {
	return useSWR<CustomerGroupEntity>(
		'/api/staticdata?type=customer_group_details',
		fetcher
	)
}
