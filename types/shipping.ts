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
