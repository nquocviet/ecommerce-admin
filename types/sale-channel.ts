export type SaleChannelEntity = {
	id: string
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
	name: string
	description: string
	is_disabled: boolean
}
