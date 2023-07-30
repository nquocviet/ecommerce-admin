export type KanbanUserEntity = {
	id: string
	name: string
	email: string
	role: string
}

export type KanbanComment = {
	id?: string
	author: KanbanUserEntity
	content: string
	created_at?: Date
	updated_at?: Date
}

export type KanbanEntity = {
	id?: string
	title: string
	description?: string
	due_date: Date
	tags: string[]
	attachment?: string
	pics: string[]
	created_at?: Date
	updated_at?: Date
}
