import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import { CollectionDetailEntity, CollectionEntity } from '@/types/collection'

export const useCollections = () => {
	return useSWR<CollectionEntity[]>('/api/staticdata?type=collection', fetcher)
}

export const useCollectionDetail = () => {
	return useSWR<CollectionDetailEntity>(
		'/api/staticdata?type=collection_detail',
		fetcher
	)
}
