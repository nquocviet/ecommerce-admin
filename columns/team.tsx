import React from 'react'
import {
	ActionIcon,
	Avatar,
	Flex,
	MANTINE_COLORS,
	Menu,
	Text,
} from '@mantine/core'
import { DotsThree, NotePencil, Trash } from '@phosphor-icons/react'

import { TDataTableColumn } from '@/types/datatable'
import { toCapitalize } from '@/utils'

export const columns: TDataTableColumn = [
	{
		accessor: 'name',
		title: 'Name',
		width: '25%',
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
		width: '25%',
	},
	{
		accessor: 'role',
		title: 'Team permissions',
		width: '25%',
		render: ({ role }) => {
			return toCapitalize(role)
		},
	},
	{
		accessor: 'status',
		title: 'Status',
		width: '20%',
		render: () => {
			return '-'
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
						<Menu.Item
							icon={<Trash size={18} />}
							sx={{
								color: 'var(--red-600)',
							}}
						>
							Remove
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			)
		},
	},
]
