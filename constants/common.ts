import { faker } from '@faker-js/faker'

import { ROUTES } from '@/constants/routes'
import { OptionType, RolesEnum } from '@/types/common'

export const STORE_NAME = 'Hercules'
export const APP_NAME = `${STORE_NAME} Store`
export const APP_DOMAIN = 'https://hercules-ecommerce-admin.vercel.app'

export const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000
export const HOURS_PER_DAY = 24
export const DAYS_IN_WEEK = 7
export const CURRENT_DATE = new Date(new Date().setHours(0, 0, 0, 0))
export const CURRENT_MONTH = +new Date().getMonth() + 1
export const CURRENT_YEAR = +new Date().getFullYear()
export const TOTAL_MONTHS = 12
export const CALENDAR_WEEK_ROWS = 7
export const CALENDAR_WEEK_COLUMNS = 6

export const ROLE_OPTIONS = [
	{ value: RolesEnum.MEMBER, label: 'Member' },
	{ value: RolesEnum.ADMIN, label: 'Admin' },
	{ value: RolesEnum.DEVELOPER, label: 'Developer' },
]

export const DATE_MONTH_OPTIONS: Intl.DateTimeFormatOptions = {
	month: 'long',
}

export const DATE_MONTH_YEAR_OPTIONS: Intl.DateTimeFormatOptions = {
	month: 'long',
	year: 'numeric',
}

export const FULL_DATE_TIME_OPTIONS: Intl.DateTimeFormatOptions = {
	weekday: 'short',
	day: 'numeric',
	month: 'short',
	year: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
}

export const WEEKDAY_SHORT_NAMES = {
	0: 'Sun',
	1: 'Mon',
	2: 'Tue',
	3: 'Wed',
	4: 'Thu',
	5: 'Fri',
	6: 'Sat',
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

export const CALENDAR_VIEW_OPTIONS = [
	{ value: ROUTES.CALENDAR.DAY, label: 'Day' },
	{ value: ROUTES.CALENDAR.WEEK, label: 'Week' },
	{ value: ROUTES.CALENDAR.MONTH, label: 'Month' },
	{ value: ROUTES.CALENDAR.YEAR, label: 'Year' },
]
