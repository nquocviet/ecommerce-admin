import { BaseEntity, MetaDataEntity } from './common'
import { CustomerOrderEntity } from './customer'
import { ProductCollectionEntity, ProductVariantEntity } from './product'

export type CartItemEntity = BaseEntity & {
	cart_id: string
	order_id: string
	swap_id: string | null
	claim_order_id: string | null
	original_item_id: string | null
	order_edit_id: string | null
	title: string
	description: string
	thumbnail: string
	is_return: boolean
	is_giftcard: boolean
	should_merge: boolean
	allow_discounts: boolean
	has_shipping: boolean
	unit_price: number
	variant_id: string
	quantity: number
	fulfilled_quantity: number | null
	returned_quantity: number | null
	shipped_quantity: number | null
	metadata: MetaDataEntity
	variant: ProductVariantEntity & {
		product: ProductCollectionEntity
	}
}

export type CartEntity = CustomerOrderEntity & {
	items: CartItemEntity[]
}
