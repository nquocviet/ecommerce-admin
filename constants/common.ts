import { RolesEnum } from '@/types/common'

export const STORE_NAME = 'Hercules'
export const APP_NAME = `${STORE_NAME} Store`

export const CURRENT_YEAR = +new Date().getFullYear()

export const ROLE_OPTIONS = [
	{ value: RolesEnum.MEMBER, label: 'Member' },
	{ value: RolesEnum.ADMIN, label: 'Admin' },
	{ value: RolesEnum.DEVELOPER, label: 'Developer' },
]
