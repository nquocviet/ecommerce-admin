import React from 'react'
import {
	ActionIcon,
	Avatar,
	Flex,
	MANTINE_COLORS,
	Menu,
	Text,
} from '@mantine/core'
import { DotsThree, NotePencil, UserCircle } from '@phosphor-icons/react'

import { CustomerEntity } from '@/types/customer'
import { MantineDataTableColumn } from '@/types/datatable'
import { formatDate } from '@/utils'

export const CUSTOMER_COLUMNS: MantineDataTableColumn<CustomerEntity> = [
	{
		accessor: 'created_at',
		title: 'Date added',
		width: '15%',
		render: ({ created_at }) => {
			return formatDate(created_at)
		},
	},
	{
		accessor: 'name',
		title: 'Name',
		width: '30%',
		render: ({ email, first_name, last_name }, index) => {
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
		accessor: 'email',
		title: 'Email',
		width: '35%',
	},
	{
		accessor: 'orders',
		title: 'Orders',
		width: '15%',
		render: ({ orders }) => {
			return orders?.length
		},
	},
	{
		accessor: '',
		title: '',
		width: '5%',
		render: () => {
			return (
				<Menu shadow="md" width={200}>
					<Menu.Target>
						<ActionIcon>
							<DotsThree size={20} weight="bold" />
						</ActionIcon>
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Item icon={<NotePencil size={18} />}>Edit</Menu.Item>
						<Menu.Item icon={<UserCircle size={18} />}>Details</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			)
		},
	},
]
