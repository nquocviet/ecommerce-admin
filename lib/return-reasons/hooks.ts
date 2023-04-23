import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { ReturnReasonEntity } from '@/types/return-reason'

export const useReturnReasons = () => {
	return useSWR<ReturnReasonEntity[]>(
		'/api/staticdata?type=return_reasons&loading=false',
		fetcher
	)
}
