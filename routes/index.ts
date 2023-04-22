import { ROLES } from '@/constants/roles'

const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	PRODUCTS: '/products',
	COLLECTION_DETAIL: '/collections/[id]',
	ORDERS: '/orders',
	CUSTOMERS: '/customers',
	DISCOUNTS: '/discounts',
	GIFT_CARDS: '/gift-cards',
	PRICING: '/pricing',
	MESSAGES: '/messages',
	CALENDAR: '/calendar',
	KANBAN: '/kanban',
	FAQS: '/faqs',

	SETTINGS: {
		DEFAULT: '/settings',
		CURRENCIES: '/settings/currencies',
		PERSONAL_INFORMATION: '/settings/personal-information',
		REGIONS: '/settings/regions',
		RETURN_REASONS: '/settings/return-reasons',
		SALE_CHANNELS: '/settings/sale-channels',
		STORE_DETAILS: '/settings/store-details',
		TAXES: '/settings/taxes',
		TEAM: '/settings/team',
	},
} as const

const routeConfig: { [key: string]: { [key: string]: string } } = {
	AUTH: {
		default: ROUTES.LOGIN,
		[ROUTES.LOGIN]: ROUTES.LOGIN,
		[ROUTES.REGISTER]: ROUTES.REGISTER,
	},
	[ROLES.ADMIN]: {
		default: ROUTES.HOME,
		[ROUTES.HOME]: ROUTES.HOME,
		[ROUTES.PRODUCTS]: ROUTES.PRODUCTS,
		[ROUTES.COLLECTION_DETAIL]: ROUTES.COLLECTION_DETAIL,
		[ROUTES.ORDERS]: ROUTES.ORDERS,
		[ROUTES.CUSTOMERS]: ROUTES.CUSTOMERS,
		[ROUTES.DISCOUNTS]: ROUTES.DISCOUNTS,
		[ROUTES.GIFT_CARDS]: ROUTES.GIFT_CARDS,
		[ROUTES.PRICING]: ROUTES.PRICING,
		[ROUTES.MESSAGES]: ROUTES.MESSAGES,
		[ROUTES.CALENDAR]: ROUTES.CALENDAR,
		[ROUTES.KANBAN]: ROUTES.KANBAN,
		[ROUTES.FAQS]: ROUTES.FAQS,
		[ROUTES.SETTINGS.DEFAULT]: ROUTES.SETTINGS.DEFAULT,
		[ROUTES.SETTINGS.CURRENCIES]: ROUTES.SETTINGS.CURRENCIES,
		[ROUTES.SETTINGS.PERSONAL_INFORMATION]:
			ROUTES.SETTINGS.PERSONAL_INFORMATION,
		[ROUTES.SETTINGS.REGIONS]: ROUTES.SETTINGS.REGIONS,
		[ROUTES.SETTINGS.RETURN_REASONS]: ROUTES.SETTINGS.RETURN_REASONS,
		[ROUTES.SETTINGS.SALE_CHANNELS]: ROUTES.SETTINGS.SALE_CHANNELS,
		[ROUTES.SETTINGS.STORE_DETAILS]: ROUTES.SETTINGS.STORE_DETAILS,
		[ROUTES.SETTINGS.TAXES]: ROUTES.SETTINGS.TAXES,
		[ROUTES.SETTINGS.TEAM]: ROUTES.SETTINGS.TEAM,
	},
}

export { routeConfig }

export default ROUTES
