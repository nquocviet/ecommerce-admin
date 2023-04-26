import React from 'react'
import { ActionIcon, Flex, Image, Menu, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Copy, DotsThree, Lock, NotePencil, Trash } from '@phosphor-icons/react'
import Link from 'next/link'

import { Dots } from '@/components'
import { DeleteProductModal } from '@/page-components/products/components'
import ROUTES from '@/routes'
import { MantineDataTableColumn } from '@/types/datatable'
import { ProductEntity, ProductVariantEntity } from '@/types/product'
import { getStockOfVariants, getValue, toCapitalize } from '@/utils'

const Actions = ({ id }) => {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Menu shadow="md" width={200}>
				<Menu.Target>
					<ActionIcon>
						<DotsThree size={20} weight="bold" />
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item
						component={Link}
						href={{
							pathname: ROUTES.PRODUCT_DETAIL,
							query: { id },
						}}
						icon={<NotePencil size={20} />}
					>
						Edit
					</Menu.Item>
					<Menu.Item icon={<Lock size={20} />}>Unpublish</Menu.Item>
					<Menu.Item icon={<Copy size={20} />}>Duplicate</Menu.Item>
					<Menu.Item
						icon={<Trash size={20} />}
						sx={{
							color: 'var(--red-600)',
						}}
						onClick={open}
					>
						Delete
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			<DeleteProductModal opened={opened} onClose={close} />
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
			return getValue(collection?.title)
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
			return getValue(sales_channels?.[0]?.name)
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
		render: ({ id }) => {
			return <Actions id={id} />
		},
	},
]

const VariantActions = () => {
	return (
		<Flex justify="flex-end">
			<Menu shadow="md" width={200}>
				<Menu.Target>
					<ActionIcon>
						<DotsThree size={20} weight="bold" />
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item icon={<NotePencil size={20} />}>Edit variant</Menu.Item>
					<Menu.Item icon={<Copy size={20} />}>Duplicate variant</Menu.Item>
					<Menu.Item
						icon={<Trash size={20} />}
						sx={{
							color: 'var(--red-600)',
						}}
					>
						Delete variant
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</Flex>
	)
}

export const PRODUCT_VARIANT_COLUMNS: MantineDataTableColumn<ProductVariantEntity> =
	[
		{
			accessor: 'title',
			title: 'Title',
			width: '20%',
		},
		{
			accessor: 'sku',
			title: 'SKU',
			width: '20%',
			render: ({ sku }) => {
				return getValue(sku)
			},
		},
		{
			accessor: 'ean',
			title: 'EAN',
			width: '25%',
			render: ({ ean }) => {
				return getValue(ean)
			},
		},
		{
			accessor: 'inventory_quantity',
			title: 'Inventory',
			width: '15%',
			textAlignment: 'right',
			render: ({ inventory_quantity }) => {
				return getValue(inventory_quantity)
			},
		},
		{
			accessor: '',
			title: '',
			width: '20%',
			render: () => {
				return <VariantActions />
			},
		},
	]
