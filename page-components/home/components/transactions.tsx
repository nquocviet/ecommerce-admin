import React from 'react'
import { faker } from '@faker-js/faker'

import { TRANSACTION_COLUMNS } from '@/columns/transaction'
import { Heading, Paper, Table } from '@/components'
import { CURRENT_DAY, CURRENT_MONTH, CURRENT_YEAR } from '@/constants/common'
import {
	TRANSACTION_MESSAGES,
	TRANSACTION_STATUSES,
} from '@/constants/transaction'

const transactions = [...Array(8)].map((_, index) => {
	const randomMessage =
		TRANSACTION_MESSAGES[
			Math.floor(Math.random() * TRANSACTION_MESSAGES.length)
		]
	const randomStatus =
		TRANSACTION_STATUSES[
			Math.floor(Math.random() * TRANSACTION_STATUSES.length)
		]

	return {
		id: faker.string.uuid(),
		message: randomMessage,
		customer: `${faker.person.firstName()} ${faker.person.lastName()}`,
		amount:
			faker.number.int({
				min: 300,
				max: 3500,
			}) * 100,
		status: randomStatus,
		createdAt: new Date(
			CURRENT_YEAR,
			CURRENT_MONTH,
			CURRENT_DAY - Math.floor(index * 0.5)
		),
	}
})

const Transactions = () => {
	return (
		<Paper>
			<Heading title="Transactions" />
			<Table records={transactions} columns={TRANSACTION_COLUMNS} />
		</Paper>
	)
}

export default Transactions
