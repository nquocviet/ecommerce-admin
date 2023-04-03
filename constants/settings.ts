import {
	Bank,
	Coins,
	CrosshairSimple,
	CurrencyCircleDollar,
	Icon,
	MapPin,
	Smiley,
	Truck,
	Users,
} from '@phosphor-icons/react'

import { APP_NAME } from '@/constants/common'
import ROUTES from '@/routes'

export type SettingsType = {
	title: string
	description: string
	href: string
	icon: Icon
}

export const SETTINGS: SettingsType[] = [
	{
		title: 'Regions',
		description: 'Manage the markets you will operate within',
		href: ROUTES.SETTINGS.REGIONS,
		icon: MapPin,
	},
	{
		title: 'Currencies',
		description: 'Manage the markets you will operate within',
		href: ROUTES.SETTINGS.CURRENCIES,
		icon: CurrencyCircleDollar,
	},
	{
		title: 'Store Details',
		description: 'Manage your business details',
		href: ROUTES.SETTINGS.STORE_DETAILS,
		icon: CrosshairSimple,
	},
	{
		title: 'Shipping',
		description: 'Manage shipping profiles',
		href: ROUTES.SETTINGS.SHIPPING,
		icon: Truck,
	},
	{
		title: 'Return Reasons',
		description: 'Manage Order settings',
		href: ROUTES.SETTINGS.RETURN_REASONS,
		icon: Coins,
	},
	{
		title: 'The Team',
		description: `Manage users of your ${APP_NAME}`,
		href: ROUTES.SETTINGS.TEAM,
		icon: Users,
	},
	{
		title: 'Tax Settings',
		description: 'Manage taxes across regions and products',
		href: ROUTES.SETTINGS.TAXES,
		icon: Bank,
	},
	{
		title: 'Personal Information',
		description: 'Manage your profile',
		href: ROUTES.SETTINGS.PERSONAL_INFORMATION,
		icon: Smiley,
	},
]
