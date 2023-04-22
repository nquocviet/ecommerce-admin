import { MetaDataEntity } from './common'

export type RegionProviderEntity = {
	id: string
	is_installed: boolean
}

export type RegionEntity = {
	id: string
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
	name: string
	currency_code: string
	tax_rate: number
	tax_code: string | null
	gift_cards_taxable: boolean
	automatic_taxes: boolean
	tax_provider_id: string | null
	metadata: MetaDataEntity
	payment_providers: RegionProviderEntity[]
	fulfillment_providers: RegionProviderEntity[]
}
