import React from 'react'
import { faker } from '@faker-js/faker'
import { Flex, Text } from '@mantine/core'

import { Heading, Paper } from '@/components'

const customers = [...Array(6)].map(() => ({
	id: faker.string.uuid(),
	name: faker.company.name(),
	description: faker.lorem.words({
		min: 4,
		max: 8,
	}),
	total: faker.number.int({
		min: 20,
		max: 100,
	}),
}))

const TopProducts = () => {
	return (
		<Paper>
			<Heading title="Top products" />
			<Flex direction="column" align="stretch">
				{customers.map(({ id, name, description, total }) => {
					return (
						<Flex
							key={id}
							justify="space-between"
							align="center"
							gap={8}
							className="border-0 border-b border-solid border-gray-300 py-2.5 last:border-b-0"
						>
							<div className="grow">
								<Text className="font-semibold">{name}</Text>
								<Text className="text-xs text-gray-500 line-clamp-1">
									{description}
								</Text>
							</div>
							<Text className="shrink-0 text-gray-500">
								<span className="font-bold text-black">{total}</span> sales
							</Text>
						</Flex>
					)
				})}
			</Flex>
		</Paper>
	)
}

export default TopProducts
