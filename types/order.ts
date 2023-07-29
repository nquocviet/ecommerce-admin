import { BillingAddressEntity } from './billing'
import { CartEntity } from './cart'
import { BaseEntity, MetaDataEntity } from './common'
import { CustomerEntity, CustomerOrderEntity } from './customer'
import { PaymentEntity } from './payment'
import { ProductEntity } from './product'
import { RegionEntity } from './region'
import { SaleChannelEntity } from './sale-channel'
import { ShippingAddressEntity, ShippingMethodEntity } from './shipping'

export type OrderEntity = {
	id: string
	status: string
	display_id: number
	created_at: Date
	email: string
	fulfillment_status: string
	payment_status: string
	total: number
	currency_code: string
	customer: CustomerEntity
	billing_address: BillingAddressEntity
	shipping_address: ShippingAddressEntity
	sales_channel: SaleChannelEntity
}

export type OrderDraftEntity = BaseEntity & {
	status: string
	display_id: number
	cart_id: string
	order_id: string
	canceled_at: Date | null
	no_notification_order: string | null
	metadata: MetaDataEntity
	order: CustomerOrderEntity
	cart: CartEntity
}

export type OrderDetailsEntity = OrderEntity & {
	fulfillments: Array<Record<string, unknown>>
	shipping_methods: ShippingMethodEntity[]
	payments: PaymentEntity[]
	sales_channel: SaleChannelEntity
	items: ProductEntity[]
	region: RegionEntity
	cart_id: string
	customer_id: string
	region_id: string
	currency_code: string
	tax_rate: number | null
	draft_order_id: string
	sales_channel_id: string
	subtotal: number
	discount_total: number
	shipping_total: number
	refunded_total: number
	paid_total: number
	refundable_amount: number
	gift_card_total: number
	gift_card_tax_total: number
	tax_total: number
	total: number
}
