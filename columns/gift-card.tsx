import React from 'react'

import { formatDate, formatMoney } from '@/utils'

export const columns: any = [
	{
		accessor: 'code',
		title: 'Code',
		width: '25%',
	},
	{
		accessor: 'order',
		title: 'Order',
		width: '10%',
		render: ({ order }) => {
			return order?.length || '-'
		},
	},
	{
		accessor: 'value',
		title: 'Original amount',
		width: '25%',
		render: ({ value, region }) => {
			return formatMoney(value / 100, region?.currency_code)
		},
	},
	{
		accessor: 'balance',
		title: 'Balance',
		width: '25%',
		render: ({ balance, region }) => {
			return formatMoney(balance / 100, region?.currency_code)
		},
	},
	{
		accessor: 'created_at',
		title: 'Created at',
		width: '15%',
		render: ({ created_at }) => {
			return formatDate(created_at)
		},
	},
]
