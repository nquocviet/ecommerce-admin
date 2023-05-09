import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { GiftCardEntity } from '@/types/gift-card'

export const useGiftCards = () => {
	return useSWR<GiftCardEntity[]>('/api/staticdata?type=gift_card', fetcher)
}

export const useGiftCardDetails = () => {
	return useSWR<GiftCardEntity>(
		'/api/staticdata?type=gift_card_details',
		fetcher
	)
}
