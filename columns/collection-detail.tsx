import React from 'react'
import { useForm } from 'react-hook-form'
import { ActionIcon, Flex, Image, Text } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { Trash } from '@phosphor-icons/react'

import { Checkbox, Dots, ModalConfirm } from '@/components'
import { MantineDataTableColumn } from '@/types/datatable'
import { ProductCollectionEntity, ProductEntity } from '@/types/product'
import { toCapitalize } from '@/utils'

const CollectionDetailActions = () => {
	const [deleteProductOpened, setDeleteProductOpened] = useToggle()

	return (
		<>
			<ActionIcon
				color="gray"
				variant="outline"
				onClick={() => setDeleteProductOpened(true)}
			>
				<Trash size={18} />
			</ActionIcon>
			<ModalConfirm
				title="Delete Product"
				opened={deleteProductOpened}
				onClose={setDeleteProductOpened}
				message="Are you sure you want to delete this product?"
			/>
		</>
	)
}

export const COLLECTION_DETAIL_COLUMNS: MantineDataTableColumn<ProductCollectionEntity> =
	[
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
				return <CollectionDetailActions />
			},
		},
	]

const ProductCheckbox = ({ index }) => {
	const { control } = useForm()
	return <Checkbox name={`product-${index}`} control={control} />
}

export const COLLECTION_PRODUCTS_COLUMNS: MantineDataTableColumn<ProductEntity> =
	[
		{
			accessor: 'no',
			title: '',
			width: '5%',
			render: (_, index) => {
				return (
					<Flex justify="center">
						<ProductCheckbox index={index} />
					</Flex>
				)
			},
		},
		{
			accessor: 'title',
			title: '',
			width: '65%',
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
			width: '30%',
			render: ({ status }) => {
				const color = status === 'published' ? 'green' : 'gray'

				return (
					<Flex justify="flex-end" align="center" gap={8}>
						<Dots size={6} color={color} />
						{toCapitalize(status)}
					</Flex>
				)
			},
		},
	]
