import { CartEntity } from './cart'
import { BaseEntity, MetaDataEntity } from './common'
import { CustomerEntity, CustomerOrderEntity } from './customer'
import { SaleChannelEntity } from './sale-channel'
import { ShippingAddressEntity } from './shipping'

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
