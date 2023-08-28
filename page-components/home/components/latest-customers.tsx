import React from 'react'
import { faker } from '@faker-js/faker'
import { Avatar, Flex, Text } from '@mantine/core'

import { Heading, Paper } from '@/components'
import { formatMoney } from '@/utils'

const customers = [...Array(6)].map(() => ({
	id: faker.string.uuid(),
	name: faker.person.fullName(),
	email: faker.internet.email(),
	avatar: faker.image.avatarLegacy(),
	amount:
		faker.number.int({
			min: 300,
			max: 3500,
		}) * 100,
}))

const LatestCustomers = () => {
	return (
		<Paper>
			<Heading title="Latest customers" />
			<Flex direction="column" align="stretch">
				{customers.map(({ id, name, email, avatar, amount }) => {
					return (
						<Flex
							key={id}
							justify="space-between"
							align="center"
							gap={8}
							className="border-0 border-b border-solid border-gray-300 py-2.5 last:border-b-0"
						>
							<Flex align="center" gap={10}>
								<Avatar size="md" radius="xl" src={avatar} />
								<div>
									<Text className="font-semibold">{name}</Text>
									<Text className="text-xs text-gray-600">{email}</Text>
								</div>
							</Flex>
							<span className="shrink-0 font-bold">
								{formatMoney(amount).slice(0, -3)}
							</span>
						</Flex>
					)
				})}
			</Flex>
		</Paper>
	)
}

export default LatestCustomers
