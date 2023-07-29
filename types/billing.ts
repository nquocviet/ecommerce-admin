import { BaseEntity, MetaDataEntity } from './common'

export type BillingAddressEntity = BaseEntity & {
	customer_id: string | null
	company: string | null
	first_name: string
	last_name: string
	address_1: string
	address_2: string
	city: string
	country_code: string
	province: string | null
	postal_code: string
	phone: string | null
	metadata: MetaDataEntity
}
