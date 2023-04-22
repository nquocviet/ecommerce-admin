import { BaseEntity } from './common'
import { CustomerGroupEntity } from './customer-group'

export type PriceEntity = BaseEntity & {
	currency_code: string
	amount: number
	min_quantity: number | null
	max_quantity: number | null
	price_list_id: string
	variant_id: string
	region_id: string | null
}

export type PricingEntity = BaseEntity & {
	name: string
	description: string
	type: string
	status: string
	starts_at: Date
	ends_at: Date
	customer_groups: CustomerGroupEntity[]
	prices: PriceEntity[]
}
