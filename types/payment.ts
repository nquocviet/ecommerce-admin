import { MetaDataEntity } from './common'

export type PaymentEntity = {
	id: string
	created_at: string
	updated_at: string
	swap_id: string | null
	cart_id: string
	order_id: string
	amount: number
	currency_code: string
	amount_refunded: number
	provider_id: string
	captured_at: Date | null
	canceled_at: Date | null
	metadata: MetaDataEntity
	idempotency_key: string | null
}
