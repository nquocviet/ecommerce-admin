import { BaseEntity, MetaDataEntity } from './common'

export type ImageEntity = BaseEntity & {
	url: string
	metadata: MetaDataEntity
}
