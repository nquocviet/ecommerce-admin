import { BaseEntity, MetaDataEntity } from './common'
import { ProductEntity } from './product'
import { RegionEntity } from './region'

export type DiscountConditionEntity = BaseEntity & {
	type: string
	operator: string
	discount_rule_id: string
	metadata: MetaDataEntity
	products: ProductEntity[]
}

export type DiscountRuleEntity = BaseEntity & {
	description: string
	type: string
	value: number
	allocation: string
	metadata: MetaDataEntity
	conditions: DiscountConditionEntity[]
}

export type DiscountEntity = BaseEntity & {
	code: string
	is_dynamic: boolean
	rule_id: string
	is_disabled: boolean
	parent_discount_id: string | null
	starts_at: Date | null
	ends_at: Date | null
	valid_duration: number | null
	usage_limit: number
	usage_count: number
	metadata: Record<string, string>
	rule: DiscountRuleEntity
	regions: RegionEntity[]
}
