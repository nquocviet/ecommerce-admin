import { BaseEntity, MetaDataEntity } from './common'
import { RegionEntity } from './region'

export type GiftCardEntity = BaseEntity & {
	region: RegionEntity
	order: Record<string, unknown>[] | null
	code: string
	value: number
	balance: number
	region_id: string
	is_disabled: boolean
	ends_at: Date | null
	tax_rate: number | null
	metadata: MetaDataEntity
}
