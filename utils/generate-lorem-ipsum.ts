import { faker } from '@faker-js/faker'

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
