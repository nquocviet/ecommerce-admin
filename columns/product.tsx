import React from 'react'
import { ActionIcon, Flex, Image, Menu, Text } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { Copy, DotsThree, Lock, NotePencil, Trash } from '@phosphor-icons/react'

import { Dots, ModalConfirm } from '@/components'
import { MantineDataTableColumn } from '@/types/datatable'
import { ProductEntity } from '@/types/product'
import { getStockOfVariants, toCapitalize } from '@/utils'

const Actions = () => {
	const [deleteOpened, setDeleteOpened] = useToggle()

	return (
		<>
			<Menu shadow="md" width={200}>
				<Menu.Target>
					<ActionIcon>
						<DotsThree size={20} weight="bold" />
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item icon={<NotePencil size={18} />}>Edit</Menu.Item>
					<Menu.Item icon={<Lock size={18} />}>Unpublish</Menu.Item>
					<Menu.Item icon={<Copy size={18} />}>Duplicate</Menu.Item>
					<Menu.Item
						icon={<Trash size={18} />}
						sx={{
							color: 'var(--red-600)',
						}}
						onClick={() => setDeleteOpened(true)}
					>
						Delete
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			<ModalConfirm
				title="Delete Product"
				opened={deleteOpened}
				onClose={setDeleteOpened}
				message="Are you sure you want to delete this product?"
			/>
		</>
	)
}

export const PRODUCT_COLUMNS: MantineDataTableColumn<ProductEntity> = [
	{
		accessor: 'title',
		title: 'Name',
		width: '25%',
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
		width: '15%',
		render: ({ collection }) => {
			return collection?.title || '-'
		},
	},
	{
		accessor: 'status',
		title: 'Status',
		width: '15%',
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
		accessor: 'sales_channels',
		title: 'Availability',
		width: '15%',
		render: ({ sales_channels }) => {
			return sales_channels?.[0]?.name || '-'
		},
	},
	{
		accessor: 'inventory',
		title: 'Inventory',
		width: '25%',
		render: ({ variants }) => {
			const { total, quantity } = getStockOfVariants(variants)

			return (
				<Text>
					{quantity} in stock for {total} variant{total && '(s)'}
				</Text>
			)
		},
	},
	{
		accessor: '',
		title: '',
		width: '5%',
		render: () => {
			return <Actions />
		},
	},
]
