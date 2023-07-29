import { generateLoremIpsum } from './generate-lorem-ipsum'

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
