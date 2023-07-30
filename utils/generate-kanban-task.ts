import { faker } from '@faker-js/faker'

import { KANBAN_PIC_OPTIONS, KANBAN_TAG_OPTIONS } from '@/constants/common'
import { OptionType } from '@/types/common'
import { KanbanEntity } from '@/types/kanban'
import { generateLoremIpsum, getFutureDate } from '@/utils'

const getRandomValues = (randomTotal: number, options: OptionType[]) => {
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
