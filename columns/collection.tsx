import React from 'react'
import { ActionIcon, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, NotePencil, Trash } from '@phosphor-icons/react'
import Link from 'next/link'

import { DeleteCollectionModal } from '@/page-components/products/components'
import ROUTES from '@/routes'
import { CollectionEntity } from '@/types/collection'
import { MantineDataTableColumn } from '@/types/datatable'
import { formatDate, getValue } from '@/utils'

type ActionsProps = {
	id: string
}

const Actions = ({ id }: ActionsProps) => {
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
							pathname: ROUTES.COLLECTION_DETAILS,
							query: { id },
						}}
						icon={<NotePencil size={20} />}
					>
						Edit
					</Menu.Item>
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
			<DeleteCollectionModal opened={opened} onClose={close} />
		</>
	)
}

export const COLLECTION_COLUMNS: MantineDataTableColumn<CollectionEntity> = [
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
			return getValue(products?.length)
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
