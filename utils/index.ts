import { faker } from '@faker-js/faker'

import {
	CALENDAR_WEEK_ROWS,
	CURRENT_MONTH,
	CURRENT_YEAR,
	DAYS_IN_WEEK,
} from '@/constants/common'
import { KANBAN_PIC_OPTIONS, KANBAN_TAG_OPTIONS } from '@/constants/common'
import { OptionType } from '@/types/common'
import { KanbanEntity } from '@/types/kanban'
import { ProductVariantEntity } from '@/types/product'

export const zeroPad = (value: number, length: number) => {
	return `${value}`.padStart(length, '0')
}

export const getMonday = (date: number | string) => {
	const _date = new Date(date)
	const day = _date.getDay()
	const diff = _date.getDate() - day + (day == 0 ? -6 : 1)

	return new Date(_date.setDate(diff))
}

export const getMonthDays = (month = CURRENT_MONTH, year = CURRENT_YEAR) => {
	const months30 = [4, 6, 9, 11]
	const leapYear = year % 4 === 0

	return month === 2 ? (leapYear ? 29 : 28) : months30.includes(month) ? 30 : 31
}

export const getMonthFirstDay = (
	month = CURRENT_MONTH,
	year = CURRENT_YEAR
) => {
	return +new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1
}

export const getMonthLastDay = (month = CURRENT_MONTH, year = CURRENT_YEAR) => {
	const monthDays = getMonthDays(month, year)
	return +new Date(`${year}-${zeroPad(month, 2)}-${monthDays}`).getDay() + 1
}

export const getPreviousMonth = (month: number, year: number) => {
	const prevMonth = month > 1 ? month - 1 : 12
	const prevMonthYear = month > 1 ? year : year - 1

	return { month: prevMonth, year: prevMonthYear }
}

export const getNextMonth = (month: number, year: number) => {
	const nextMonth = month < 12 ? month + 1 : 1
	const nextMonthYear = month < 12 ? year : year + 1

	return { month: nextMonth, year: nextMonthYear }
}

export const getWeekDates = (date: Date) => {
	const newDate = new Date(date)
	newDate.setDate(newDate.getDate() - newDate.getDay() + 1)

	const datesInWeek = [...Array(DAYS_IN_WEEK)].map(() => {
		const date = new Date(newDate)
		newDate.setDate(newDate.getDate() + 1)
		return date
	})
	return datesInWeek
}

export const getMonthDates = (month = CURRENT_MONTH, year = CURRENT_YEAR) => {
	const previousMonth = getPreviousMonth(month, year)
	const nextMonth = getNextMonth(month, year)
	const currentMonthDays = getMonthDays(month, year)
	const previousMonthDays = getMonthDays(
		previousMonth.month,
		previousMonth.year
	)
	const monthFirstDay = getMonthFirstDay(month, year)
	const monthLastDay = getMonthLastDay(month, year)

	const previousMonthDates = [...new Array(monthFirstDay - 1)]
		.map((_, index) => {
			const day = previousMonthDays - index

			return [
				String(previousMonth.year),
				zeroPad(previousMonth.month, 2),
				zeroPad(day, 2),
			]
		})
		.reverse()

	const currentMonthDates = [...new Array(currentMonthDays)].map((_, index) => {
		const day = index + 1

		return [String(year), zeroPad(month, 2), zeroPad(day, 2)]
	})

	const nextMonthDates = [...new Array(CALENDAR_WEEK_ROWS - monthLastDay)].map(
		(_, index) => {
			const day = index + 1
			return [
				String(nextMonth.year),
				zeroPad(nextMonth.month, 2),
				zeroPad(day, 2),
			]
		}
	)

	return [...previousMonthDates, ...currentMonthDates, ...nextMonthDates]
}

export const hourWithPeriod = (value: number) => {
	const period = value >= 12 ? 'PM' : 'AM'
	const hour = value > 12 ? value - 12 : value

	return `${hour} ${period}`
}

export const isSameDate = (
	date1: ConstructorParameters<typeof Date>[0],
	date2: typeof date1
) => {
	const d1 = new Date(date1)
	const d2 = new Date(date2)

	d1.setHours(0, 0, 0, 0)
	d2.setHours(0, 0, 0, 0)

	return d1.getTime() === d2.getTime()
}

export const isSameMonth = (
	date1: ConstructorParameters<typeof Date>[0],
	date2: typeof date1
) => {
	const d1 = new Date(date1)
	const d2 = new Date(date2)

	return (
		d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()
	)
}

export const getFutureDate = (dateRange = 1) => {
	return new Date(
		new Date().getTime() +
			24 * 60 * 60 * 1000 * Math.floor(Math.random() * dateRange)
	)
}

export const formatDate = (
	date: ConstructorParameters<typeof Date>[0],
	opts?: Intl.DateTimeFormatOptions,
	locales: string | string[] = 'en-UK'
): string => {
	const defaultOptions: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	}
	const options = opts || defaultOptions

	return new Intl.DateTimeFormat(locales, options).format(new Date(date))
}

export const formatMoney = (total: number, currency = 'USD') => {
	const formatCurrency = new Intl.NumberFormat(undefined, {
		style: 'currency',
		currency,
	}).format(total / 100)

	return formatCurrency
}

export const generateLoremIpsum = (limit: number, newline?: boolean) => {
	const generateLorem = (init = '', newline) => {
		const generator = newline ? faker.lorem.paragraphs : faker.lorem.paragraph
		let lorem = init + generator()

		if (lorem.length < limit) {
			lorem = generateLorem(lorem, newline)
		}

		return lorem.slice(0, limit)
	}

	return generateLorem('', newline)
}

export const generateFaqs = (value: string, total: number) => {
	return [...Array(total)].map((_, index) => ({
		id: `${value}-${index + 1}`,
		title:
			generateLoremIpsum(Math.floor(20 + Math.random() * 50))
				.trim()
				.replace(/\.$/, '') + '?',
		content: generateLoremIpsum(Math.floor(300 + Math.random() * 700), true),
	}))
}

export const getRandomValues = (randomTotal: number, options: OptionType[]) => {
	return [
		...new Set(
			[...Array(1 + Math.floor(Math.random() * randomTotal))].map(
				() => options[Math.floor(Math.random() * options.length)].value
			)
		),
	]
}

export const generateKanbanTask = (total: number): KanbanEntity[] => {
	return [...Array(total)].map(() => ({
		id: faker.string.uuid(),
		title: generateLoremIpsum(Math.floor(15 + Math.random() * 30)).trim(),
		description: generateLoremIpsum(
			Math.floor(100 + Math.random() * 100),
			true
		),
		due_date: getFutureDate(10),
		tags: getRandomValues(3, KANBAN_TAG_OPTIONS),
		attachment: Math.random() < 0.3 ? faker.image.urlPicsumPhotos() : '',
		pics: getRandomValues(5, KANBAN_PIC_OPTIONS),
		created_at: getFutureDate(-3),
		updated_at: undefined,
	}))
}

export const getStockOfVariants = (variants: ProductVariantEntity[]) => {
	const totalVariants: number = variants?.length || 0
	const totalQuantity: number =
		variants?.reduce((prev, curr) => {
			return prev + curr?.inventory_quantity
		}, 0) || 0

	return {
		total: totalVariants,
		quantity: totalQuantity,
	}
}

export const getValue = (value: unknown): string => {
	if (!value) return '–'
	return String(value)
}

export const hasChildren = (item: Record<string, unknown>) => {
	const { children } = item

	if (
		children === undefined ||
		children?.constructor !== Array ||
		(children as unknown[]).length === 0
	) {
		return false
	}

	return true
}

export const sleep = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const splitParagraph = (text: string) => {
	return text.split(/\n/)
}

export const toCapitalize = ([first, ...rest]: string, lowerRest = false) => {
	return (
		first.toUpperCase() +
		(lowerRest ? rest.join('').toLowerCase() : rest.join(''))
	)
}
