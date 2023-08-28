import { Badge } from '@mantine/core'

import { TRANSACTION_COLORS, TRANSACTION_LABELS } from '@/constants/transaction'
import { MantineDataTableColumn } from '@/types/datatable'
import { TransactionEntity } from '@/types/transaction'
import { formatDate, formatMoney } from '@/utils'

export const TRANSACTION_COLUMNS: MantineDataTableColumn<TransactionEntity> = [
	{
		accessor: 'message',
		title: 'Transaction',
		width: '35%',
		render: ({ message, customer }) => {
			return (
				<p className="my-2">
					{message} <span className="font-bold">{customer}</span>
				</p>
			)
		},
	},
	{
		accessor: 'createdAt',
		title: 'Date & time',
		width: '25%',
		render: ({ createdAt }) => {
			return formatDate(createdAt)
		},
	},
	{
		accessor: 'amount',
		title: 'Amount',
		width: '25%',
		render: ({ amount }) => {
			return <span className="font-bold">{formatMoney(amount)}</span>
		},
	},
	{
		accessor: 'status',
		title: 'Status',
		width: '15%',
		render: ({ status }) => {
			return (
				<Badge color={TRANSACTION_COLORS[status]}>
					{TRANSACTION_LABELS[status]}
				</Badge>
			)
		},
	},
]
