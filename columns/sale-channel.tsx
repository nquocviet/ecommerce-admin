import React from 'react'
import { ActionIcon, Checkbox, Flex, Image, Menu, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, Trash, TShirt } from '@phosphor-icons/react'
import Link from 'next/link'

import { DeleteProductModal } from '@/page-components/products/components'
import { ROUTES } from '@/routes'
import { MantineDataTableColumn } from '@/types/datatable'
import { ProductEntity } from '@/types/product'
import { getValue } from '@/utils'

type SalesChannelActionsProps = {
	id: string
}

const SalesChannelActions = ({ id }: SalesChannelActionsProps) => {
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
							pathname: ROUTES.PRODUCT_DETAILS,
							query: { id },
						}}
						icon={<TShirt size={20} />}
					>
						Details
					</Menu.Item>
					<Menu.Item
						icon={<Trash size={20} />}
						sx={{
							color: 'var(--red-600)',
						}}
						onClick={open}
					>
						Remove
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			<DeleteProductModal opened={opened} onClose={close} />
		</>
	)
}

export const SALE_CHANNEL_COLUMNS: MantineDataTableColumn<ProductEntity> = [
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
			return getValue(collection?.title)
		},
	},
	{
		accessor: '',
		title: '',
		width: '10%',
		render: ({ id }) => {
			return <SalesChannelActions id={id} />
		},
	},
]

export const SALE_CHANNEL_PRODUCT_COLUMNS: MantineDataTableColumn<ProductEntity> =
	[
		{
			accessor: '',
			title: <Checkbox />,
			width: '5%',
			render: () => {
				return <Checkbox />
			},
		},
		{
			accessor: 'title',
			title: 'Name',
			width: '60%',
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
				return getValue(collection?.title)
			},
		},
	]
