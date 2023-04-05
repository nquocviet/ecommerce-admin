import React from 'react'
import { ActionIcon, Menu } from '@mantine/core'
import { DotsThree, NotePencil, Trash } from '@phosphor-icons/react'

import { TDataTableColumn } from '@/types/datatable'
import { formatDate } from '@/utils'

export const columns: TDataTableColumn = [
	{
		accessor: 'title',
		title: 'Title',
		width: '30%',
	},
	{
		accessor: 'handle',
		title: 'Handle',
		width: '20%',
		render: ({ handle }) => {
			return `/${handle}`
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
	{
		accessor: 'updated_at',
		title: 'Updated at',
		width: '15%',
		render: ({ updated_at }) => {
			return formatDate(updated_at)
		},
	},
	{
		accessor: 'products',
		title: 'Products',
		width: '15%',
		render: ({ products }) => {
			return products?.length || '-'
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
							Delete
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			)
		},
	},
]
