import React from 'react'
import { Avatar, Flex, MANTINE_COLORS, Text } from '@mantine/core'

import { Dots } from '@/components'
import { MantineDataTableColumn } from '@/types/datatable'
import { OrderEntity } from '@/types/order'
import { formatDate, formatMoney, toCapitalize } from '@/utils'

const paymentStatuses = {
	awaiting: {
		label: 'awaiting',
		color: 'gray',
	},
	captured: {
		label: 'paid',
		color: 'green',
	},
	canceled: {
		label: 'canceled',
		color: 'yellow',
	},
	partially_refunded: {
		label: 'N/A',
		color: 'primary',
	},
}

export const columns: MantineDataTableColumn<OrderEntity> = [
	{
		accessor: 'id',
		title: 'Order',
		width: '10%',
		render: ({ display_id }) => {
			return `#${display_id}`
		},
	},
	{
		accessor: 'created_at',
		title: 'Date added',
		width: '10%',
		render: ({ created_at }) => {
			return formatDate(created_at)
		},
	},
	{
		accessor: 'customer',
		title: 'Customer',
		width: '25%',
		render: ({ customer }, index) => {
			const { first_name, last_name, email } = customer
			const name =
				first_name && last_name ? `${first_name} ${last_name}` : email

			return (
				<Flex align="center" gap={10}>
					<Avatar size="sm" radius="xl" color={MANTINE_COLORS.slice(2)[index]}>
						{name.charAt(0).toUpperCase()}
					</Avatar>
					<Text>{name}</Text>
				</Flex>
			)
		},
	},
	{
		accessor: 'fulfillment_status',
		title: 'Fulfillment',
		width: '10%',
		render: ({ fulfillment_status }) => {
			return fulfillment_status || '-'
		},
	},
	{
		accessor: 'payment_status',
		title: 'Payment status',
		width: '15%',
		render: ({ payment_status }) => {
			const { label, color } = paymentStatuses[payment_status]

			return (
				<Flex align="center" gap={8}>
					<Dots size={6} color={color} />
					{toCapitalize(label)}
				</Flex>
			)
		},
	},
	{
		accessor: 'sales_channel',
		title: 'Sales channel',
		width: '20%',
		render: ({ sales_channel }) => {
			return sales_channel?.name || '-'
		},
	},
	{
		accessor: 'total',
		title: 'Total',
		width: '10%',
		render: ({ total, currency_code }) => {
			return (
				<Flex align="center" gap={8}>
					{formatMoney(total / 100, currency_code)}
					<Text className="text-gray-400" sx={{ textTransform: 'uppercase' }}>
						{currency_code}
					</Text>
				</Flex>
			)
		},
	},
]
