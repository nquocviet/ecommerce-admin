import { BaseEntity } from './common'
import { ProductCollectionEntity } from './product'

export type CollectionEntity = BaseEntity & {
	title: string
	handle: string
	products: ProductCollectionEntity[]
}
