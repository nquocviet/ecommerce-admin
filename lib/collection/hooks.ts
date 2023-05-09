import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { CollectionDetailsEntity, CollectionEntity } from '@/types/collection'

export const useCollections = () => {
	return useSWR<CollectionEntity[]>('/api/staticdata?type=collection', fetcher)
}

export const useCollectionDetails = () => {
	return useSWR<CollectionDetailsEntity>(
		'/api/staticdata?type=collection_details',
		fetcher
	)
}
