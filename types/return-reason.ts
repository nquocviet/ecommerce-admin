export type ReturnReasonEntity = {
	id: string
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
	value: string
	label: string
	description: string | null
	parent_return_reason_id: string | null
	parent_return_reason: string | null
	return_reason_children: []
}
