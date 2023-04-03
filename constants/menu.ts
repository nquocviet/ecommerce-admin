import { CurrencyCircleDollar, Gift, Icon } from '@phosphor-icons/react'
import {
	Calendar,
	Chats,
	CurrencyDollarSimple,
	GearSix,
	Kanban,
	Percent,
	PresentationChart,
	Question,
	Tag,
	Users,
} from '@phosphor-icons/react'

import ROUTES from '@/routes'

export type MenuItemType = {
	label: string
	href: string
	icon?: Icon
	children?: MenuItemType[]
}

export type MenuListType = Array<MenuItemType[]>

export const MENU_LIST: MenuListType = [
	[
		{
			label: 'Overview',
			href: ROUTES.HOME,
			icon: PresentationChart,
		},
		{
			label: 'Products',
			href: ROUTES.PRODUCTS,
			icon: Tag,
		},
		{
			label: 'Orders',
			href: ROUTES.ORDERS,
			icon: CurrencyDollarSimple,
		},
		{
			label: 'Customers',
			href: ROUTES.CUSTOMERS,
			icon: Users,
		},
		{
			label: 'Discounts',
			href: ROUTES.DISCOUNTS,
			icon: Percent,
		},
		{
			label: 'Gift Cards',
			href: ROUTES.GIFT_CARDS,
			icon: Gift,
		},
		{
			label: 'Pricing',
			href: ROUTES.PRICING,
			icon: CurrencyCircleDollar,
		},
	],
	[
		{
			label: 'Messages',
			href: ROUTES.MESSAGES,
			icon: Chats,
		},
		{
			label: 'Calendar',
			href: ROUTES.CALENDAR,
			icon: Calendar,
		},
		{
			label: 'Kanban',
			href: ROUTES.KANBAN,
			icon: Kanban,
		},
	],
	[
		{
			label: 'Settings',
			href: ROUTES.SETTINGS.DEFAULT,
			icon: GearSix,
		},
		{
			label: 'FAQs',
			href: ROUTES.FAQS,
			icon: Question,
		},
	],
]
