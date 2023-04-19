import React from 'react'
import { ActionIcon, Flex, Image, Menu, Text } from '@mantine/core'
import { DotsThree, Trash, TShirt } from '@phosphor-icons/react'

import { TDataTableColumn } from '@/types/datatable'

export const columns: TDataTableColumn = [
	{
		accessor: 'title',
		title: 'Name',
		width: '55%',
		render: ({ title, thumbnail }) => {
			return (
				<Flex align="center" gap={12}>
					<Image maw={32} src={thumbnail} alt={title} />
					<Text>{title}</Text>
				</Flex>
			)
		},
	},
	{
		accessor: 'collection',
		title: 'Collection',
		width: '35%',
		render: ({ collection }) => {
			return collection?.title || '-'
		},
	},
	{
		accessor: '',
		title: '',
		width: '10%',
		render: () => {
			return (
				<Menu shadow="md" width={200}>
					<Menu.Target>
						<ActionIcon>
							<DotsThree size={20} weight="bold" />
						</ActionIcon>
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Item icon={<TShirt size={18} />}>Details</Menu.Item>
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
