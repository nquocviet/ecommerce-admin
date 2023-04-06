import React from 'react'
import { ActionIcon, Flex, Menu } from '@mantine/core'
import { DotsThree, LockSimple, NotePencil } from '@phosphor-icons/react'

import { TDataTableColumn } from '@/types/datatable'

export const columns: TDataTableColumn = [
	{
		accessor: 'name',
		title: 'Name',
		width: '45%',
		render: ({ name }) => {
			return (
				<Flex align="center" gap={4} className="text-gray-400">
					<LockSimple size={14} />
					<span>{name}</span>
				</Flex>
			)
		},
	},
	{
		accessor: 'code',
		title: 'Code',
		width: '20%',
		render: ({ code }) => {
			return code || '-'
		},
	},
	{
		accessor: 'rate',
		title: 'Tax rate',
		width: '30%',
		render: ({ rate = 0 }) => {
			return rate + ' %'
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
					</Menu.Dropdown>
				</Menu>
			)
		},
	},
]
