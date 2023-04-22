import React from 'react'
import { ActionIcon, Flex, Image, Text } from '@mantine/core'
import { Trash } from '@phosphor-icons/react'

import { Dots } from '@/components'
import { MantineDataTableColumn } from '@/types/datatable'
import { ProductCollectionEntity } from '@/types/product'
import { toCapitalize } from '@/utils'

export const columns: MantineDataTableColumn<ProductCollectionEntity> = [
	{
		accessor: 'no',
		title: '',
		width: '5%',
		render: (_, index) => {
			return <Text align="center">{index + 1}</Text>
		},
	},
	{
		accessor: 'title',
		title: '',
		width: '30%',
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
		accessor: 'status',
		title: '',
		width: '60%',
		render: ({ status }) => {
			const color = status === 'published' ? 'green' : 'gray'

			return (
				<Flex align="center" gap={8}>
					<Dots size={6} color={color} />
					{toCapitalize(status)}
				</Flex>
			)
		},
	},
	{
		accessor: '',
		title: '',
		width: '5%',
		render: () => {
			return (
				<ActionIcon color="gray" variant="outline">
					<Trash size={18} />
				</ActionIcon>
			)
		},
	},
]
