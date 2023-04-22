import { BaseEntity, MetaDataEntity } from './common'

export type CustomerOrderEntity = BaseEntity & {
	object: string
	status: string
	fulfillment_status: string
	payment_status: string
	display_id: number
	cart_id: string
	customer_id: string
	email: string
	billing_address_id: string
	shipping_address_id: string
	region_id: string
	currency_code: string
	tax_rate: number | null
	draft_order_id: string | null
	canceled_at: Date | null
	metadata: MetaDataEntity
	no_notification: string | null
	idempotency_key: string | null
	external_id: string | null
	sales_channel_id: string
}

export type CustomerEntity = BaseEntity & {
	email: string
	first_name: string
	last_name: string
	billing_address_id: string | null
	phone: string
	has_account: boolean
	metadata: MetaDataEntity
	orders: CustomerOrderEntity[]
}
