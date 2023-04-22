import { MetaDataEntity } from './common'

export type TeamEntity = {
	id: string
	created_at: Date
	updated_at: Date
	deleted_at: Date | null
	role: string
	email: string
	first_name: string | null
	last_name: string | null
	api_token: string | null
	metadata: MetaDataEntity
}
