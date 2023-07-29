import { BaseEntity, MetaDataEntity } from './common'

export type ShippingAddressEntity = BaseEntity & {
	customer_id: string | null
	company: string
	first_name: string
	last_name: string
	address_1: string
	address_2: string
	city: string
	country_code: string
	province: string
	postal_code: string
	phone: string
	metadata: MetaDataEntity
}

export type ShippingMethodEntity = {
	id: string
	shipping_option_id: string
	order_id: string
	claim_order_id: string | null
	cart_id: string
	swap_id: string | null
	return_id: string | null
	price: number
	tax_lines: Array<{
		id: string
		created_at: string
		updated_at: string
		rate: number
		name: string
		code: string
		metadata: MetaDataEntity
		shipping_method_id: string
	}>
	shipping_option: {
		id: string
		created_at: string
		updated_at: string
		deleted_at: string | null
		name: string
		region_id: string
		profile_id: string
		provider_id: string
		price_type: string
		amount: number
		is_return: boolean
		admin_only: boolean
		data: {
			id: string
		}
		metadata: MetaDataEntity
	}
	original_total: number
	total: number
	subtotal: number
	original_tax_total: number
	tax_total: number
}
