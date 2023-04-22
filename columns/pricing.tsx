import React from 'react'
import { ActionIcon, Flex, Menu } from '@mantine/core'
import { DotsThree, Lock, Trash } from '@phosphor-icons/react'

import { Dots } from '@/components'
import { MantineDataTableColumn } from '@/types/datatable'
import { PricingEntity } from '@/types/pricing'
import { toCapitalize } from '@/utils'

export const columns: MantineDataTableColumn<PricingEntity> = [
	{
		accessor: 'name',
		title: 'Name',
		width: '15%',
	},
	{
		accessor: 'description',
		title: 'Description',
		width: '35%',
		render: ({ description }) => {
			return description || '-'
		},
	},
	{
		accessor: 'status',
		title: 'Status',
		width: '15%',
		render: ({ status }) => {
			const color = status === 'draft' ? 'gray' : 'green'

			return (
				<Flex align="center" gap={8}>
					<Dots size={6} color={color} />
					{toCapitalize(status)}
				</Flex>
			)
		},
	},
	{
		accessor: 'customer_groups',
		title: 'Groups',
		width: '30%',
		render: ({ customer_groups }) => {
			return customer_groups.map(({ name }) => name).join(', ')
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
						<Menu.Item icon={<Lock size={18} />}>Unpublish</Menu.Item>
						<Menu.Item
							icon={<Trash size={18} />}
							sx={{
								color: 'var(--red-600)',
							}}
						>
							Delete
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			)
		},
	},
]
