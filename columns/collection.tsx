import React from 'react'
import { ActionIcon, Button, Menu, Text } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { DotsThree, NotePencil, Trash } from '@phosphor-icons/react'

import { Modal, ModalAction } from '@/components'
import { CollectionEntity } from '@/types/collection'
import { MantineDataTableColumn } from '@/types/datatable'
import { formatDate } from '@/utils'

const Actions = () => {
	const [deleteModalOpened, setDeleteModalOpened] = useToggle()

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
					<Menu.Item
						icon={<Trash size={18} />}
						sx={{
							color: 'var(--red-600)',
						}}
						onClick={() => setDeleteModalOpened(true)}
					>
						Delete
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			<Modal
				title="Delete Collection"
				opened={deleteModalOpened}
				onClose={setDeleteModalOpened}
				size="lg"
				action={
					<ModalAction>
						<Button
							size="sm"
							color="gray"
							variant="outline"
							onClick={() => setDeleteModalOpened(false)}
						>
							Cancel
						</Button>
						<Button color="red" size="sm">
							Yes, confirm
						</Button>
					</ModalAction>
				}
				centered
			>
				<Text className="text-gray-600">
					Are you sure you want to delete this collection?
				</Text>
			</Modal>
		</>
	)
}

export const columns: MantineDataTableColumn<CollectionEntity> = [
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
			return <Actions />
		},
	},
]
