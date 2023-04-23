import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { SaleChannelEntity } from '@/types/sale-channel'

export const useSalesChannels = () => {
	return useSWR<SaleChannelEntity[]>(
		'/api/staticdata?type=sale_channels',
		fetcher
	)
}
