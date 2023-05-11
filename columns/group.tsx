import React from 'react'
import { ActionIcon, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, NotePencil, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'

import { AddEditCustomerGroupModal } from '@/page-components/customers/components'
import { ROUTES } from '@/routes'
import { CustomerGroupEntity } from '@/types/customer-group'
import { MantineDataTableColumn } from '@/types/datatable'

type GroupActionsProps = {
	id: string
}

const GroupActions = ({ id }: GroupActionsProps) => {
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
					<Menu.Item icon={<NotePencil size={20} />} onClick={open}>
						Edit
					</Menu.Item>
					<Menu.Item
						component={Link}
						href={{ pathname: ROUTES.CUSTOMER_GROUP_DETAILS, query: { id } }}
						icon={<UserCircle size={20} />}
					>
						Details
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			<AddEditCustomerGroupModal
				opened={opened}
				onClose={close}
				defaultValues={{
					title: 'Enim natus',
					metadata: [],
				}}
			/>
		</>
	)
}

export const GROUP_COLUMNS: MantineDataTableColumn<CustomerGroupEntity> = [
	{
		accessor: 'name',
		title: 'Title',
		width: '45%',
	},
	{
		accessor: 'customers',
		title: 'Members',
		width: '45%',
		render: ({ customers }) => {
			return customers?.length
		},
	},
	{
		accessor: '',
		title: '',
		width: '10%',
		render: ({ id }) => {
			return <GroupActions id={id} />
		},
	},
]
