import React from 'react'
import { Avatar, Flex, MANTINE_COLORS, Text } from '@mantine/core'

import { Dots } from '@/components'
import { MantineDataTableColumn } from '@/types/datatable'
import { OrderDraftEntity } from '@/types/order'
import { formatDate, toCapitalize } from '@/utils'

export const ORDER_DRAFT_COLUMNS: MantineDataTableColumn<OrderDraftEntity> = [
	{
		accessor: 'id',
		title: 'Draft',
		width: '15%',
		render: ({ display_id }) => {
			return `#${display_id}`
		},
	},
	{
		accessor: 'order',
		title: 'Order',
		width: '20%',
		render: ({ order }) => {
			return order ? `#${order?.display_id}` : '-'
		},
	},
	{
		accessor: 'created_at',
		title: 'Date added',
		width: '20%',
		render: ({ created_at }) => {
			return formatDate(created_at)
		},
	},
	{
		accessor: 'cart',
		title: 'Customer',
		width: '30%',
		render: ({ cart }, index) => {
			return cart ? (
				<Flex align="center" gap={10}>
					<Avatar size="sm" radius="xl" color={MANTINE_COLORS.slice(2)[index]}>
						{cart?.email.charAt(0).toUpperCase()}
					</Avatar>
					<Text>{cart?.email}</Text>
				</Flex>
			) : (
				'-'
			)
		},
	},
	{
		accessor: 'status',
		title: 'Status',
		width: '15%',
		render: ({ status }) => {
			const color = status === 'open' ? 'primary' : 'green'

			return (
				<Flex align="center" gap={8}>
					<Dots size={6} color={color} />
					{toCapitalize(status)}
				</Flex>
			)
		},
	},
]
