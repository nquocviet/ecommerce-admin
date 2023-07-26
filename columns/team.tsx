import React from 'react'
import {
	ActionIcon,
	Avatar,
	Flex,
	MANTINE_COLORS,
	Menu,
	Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, NotePencil, Trash } from '@phosphor-icons/react'

import {
	ModalDeleteUser,
	ModalEditUser,
} from '@/page-components/settings/components'
import { MantineDataTableColumn } from '@/types/datatable'
import { TeamEntity } from '@/types/team'
import { toCapitalize } from '@/utils'

const TeamActions = () => {
	const [editUserOpened, { open: openEditUser, close: closeEditUser }] =
		useDisclosure(false)
	const [deleteUserOpened, { open: openDeleteUser, close: closeDeleteUser }] =
		useDisclosure(false)

	return (
		<>
			<Menu shadow="md" width={200}>
				<Menu.Target>
					<ActionIcon>
						<DotsThree size={20} weight="bold" />
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item icon={<NotePencil size={20} />} onClick={openEditUser}>
						Edit
					</Menu.Item>
					<Menu.Item
						icon={<Trash size={20} />}
						sx={{
							color: 'var(--red-600)',
						}}
						onClick={openDeleteUser}
					>
						Remove
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			<ModalEditUser opened={editUserOpened} onClose={closeEditUser} />
			<ModalDeleteUser opened={deleteUserOpened} onClose={closeDeleteUser} />
		</>
	)
}

export const TEAM_COLUMNS: MantineDataTableColumn<TeamEntity> = [
	{
		accessor: 'name',
		title: 'Name',
		width: '25%',
		render: ({ email, first_name, last_name }, index) => {
			const name =
				first_name && last_name ? `${first_name} ${last_name}` : email

			return (
				<Flex align="center" gap={10}>
					<Avatar size="sm" radius="xl" color={MANTINE_COLORS.slice(2)[index]}>
						{name.charAt(0).toUpperCase()}
					</Avatar>
					<Text>{name}</Text>
				</Flex>
			)
		},
	},
	{
		accessor: 'email',
		title: 'Email',
		width: '25%',
	},
	{
		accessor: 'role',
		title: 'Team permissions',
		width: '25%',
		render: ({ role }) => {
			return (
				<Text className="font-medium text-primary-600">
					{toCapitalize(role)}
				</Text>
			)
		},
	},
	{
		accessor: 'status',
		title: 'Status',
		width: '20%',
		render: () => {
			return '-'
		},
	},
	{
		accessor: '',
		title: '',
		width: '5%',
		render: () => {
			return <TeamActions />
		},
	},
]
