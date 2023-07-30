import { faker } from '@faker-js/faker'

import { OptionType, RolesEnum } from '@/types/common'

export const STORE_NAME = 'Hercules'
export const APP_NAME = `${STORE_NAME} Store`

export const CURRENT_DATE = new Date()
export const CURRENT_YEAR = +new Date().getFullYear()

export const ROLE_OPTIONS = [
	{ value: RolesEnum.MEMBER, label: 'Member' },
	{ value: RolesEnum.ADMIN, label: 'Admin' },
	{ value: RolesEnum.DEVELOPER, label: 'Developer' },
]

export const FULL_DATE_TIME_OPTIONS: Intl.DateTimeFormatOptions = {
	weekday: 'short',
	day: 'numeric',
	month: 'short',
	year: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
}

export const KANBAN_USERS = [...Array(10)].map((_, index) => ({
	id: `${index + 1}`,
	name: faker.person.fullName(),
	email: faker.internet.email(),
	role: faker.person.jobTitle(),
	avatar: faker.image.avatarGitHub(),
}))

export const KANBAN_TAG_OPTIONS: OptionType[] = [
	{ value: 'campaign', label: 'Campaign' },
	{ value: 'development', label: 'Development' },
	{ value: 'feature', label: 'Feature' },
	{ value: 'marketing', label: 'Marketing' },
	{ value: 'media', label: 'Media' },
	{ value: 'payment', label: 'Payment' },
	{ value: 'requirement', label: 'Requirement' },
	{ value: 'research', label: 'Research' },
	{ value: 'review', label: 'Review' },
	{ value: 'security', label: 'Security' },
	{ value: 'sales', label: 'Sales' },
	{ value: 'social', label: 'Social' },
	{ value: 'testing', label: 'Testing' },
	{ value: 'urgent', label: 'Urgent' },
]

export const KANBAN_PIC_OPTIONS: OptionType[] = KANBAN_USERS.map(
	({ id, name }) => ({
		value: id,
		label: name,
	})
)
