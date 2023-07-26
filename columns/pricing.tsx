import React from 'react'
import { ActionIcon, Checkbox, Flex, Image, Menu, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, Lock, Trash } from '@phosphor-icons/react'

import { Dots } from '@/components'
import { ModalDeletePrice } from '@/page-components/pricing/components'
import { MantineDataTableColumn } from '@/types/datatable'
import { PricingEntity } from '@/types/pricing'
import { ProductEntity } from '@/types/product'
import { getValue, toCapitalize } from '@/utils'

const PricingActions = () => {
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
					<Menu.Item icon={<Lock size={20} />}>Unpublish</Menu.Item>
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
			<ModalDeletePrice opened={opened} onClose={close} />
		</>
	)
}

export const PRICING_COLUMNS: MantineDataTableColumn<PricingEntity> = [
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
			return getValue(description)
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
			return <PricingActions />
		},
	},
]

export const PRICING_PRODUCT_COLUMNS: MantineDataTableColumn<ProductEntity> = [
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
		width: '70%',
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
		accessor: 'variants',
		title: 'Variants',
		width: '10%',
		textAlignment: 'right',
		render: ({ variants }) => {
			return getValue(variants.length)
		},
	},
]
