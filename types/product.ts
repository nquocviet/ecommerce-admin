import { CollectionEntity } from './collection'
import { BaseEntity, MetaDataEntity } from './common'
import { ImageEntity } from './image'
import { PriceEntity } from './pricing'
import { SaleChannelEntity } from './sale-channel'

export type ProductOptionEntity = BaseEntity & {
	title: string
	product_id: string
	option_id: string
	variant_id: string
	metadata: MetaDataEntity
	value: string
}

export type ProductSizeEntity = {
	weight: number | null
	length: number | null
	height: number | null
	width: number | null
}

export type ProductVariantEntity = BaseEntity &
	ProductSizeEntity & {
		title: string
		product_id: string
		sku: string | null
		barcode: string | null
		ean: string | null
		upc: string | null
		inventory_quantity: number
		allow_backorder: boolean
		manage_inventory: boolean
		hs_code: string | null
		origin_country: string | null
		mid_code: string | null
		material: string | null
		metadata: MetaDataEntity
		prices: PriceEntity[]
		options: ProductOptionEntity[]
		original_price: number | null
		calculated_price: number | null
		original_price_incl_tax: number | null
		calculated_price_incl_tax: number | null
		original_tax: number | null
		calculated_tax: number | null
		tax_rates: number | null
	}

export type ProductEntity = BaseEntity & {
	title: string
	handle: string
	status: string
	thumbnail: string
	collection_id: string | null
	variants: ProductVariantEntity[]
	options: ProductOptionEntity[]
	collection: CollectionEntity
	tags: Record<string, string>[]
	type: string | null
	images: ImageEntity[]
	sales_channels: SaleChannelEntity[]
}

export type ProductCollectionEntity = BaseEntity &
	ProductSizeEntity & {
		title: string
		subtitle: string | null
		description: string
		handle: string
		is_giftcard: boolean
		status: string
		thumbnail: string
		profile_id: string
		hs_code: number | null
		origin_country: string | null
		mid_code: number | null
		material: string | null
		collection_id: string | null
		type_id: string | null
		discountable: boolean
		external_id: string | null
		metadata: MetaDataEntity
	}

export type ProductDetailEntity = ProductEntity &
	ProductSizeEntity & {
		subtitle: string | null
		description: string
		is_giftcard: boolean
		profile_id: string
		hs_code: string | null
		origin_country: string | null
		mid_code: string | null
		material: string | null
		type_id: string | null
		discountable: boolean
		external_id: string | null
		metadata: MetaDataEntity
		categories: Record<string, string>[]
	}
