import React from 'react'
import { ActionIcon, Menu } from '@mantine/core'
import { DotsThree, NotePencil, UserCircle } from '@phosphor-icons/react'

import { CustomerGroupEntity } from '@/types/customer-group'
import { MantineDataTableColumn } from '@/types/datatable'

export const columns: MantineDataTableColumn<CustomerGroupEntity> = [
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
		render: () => {
			return (
				<Menu shadow="md" width={200}>
					<Menu.Target>
						<ActionIcon>
							<DotsThree size={20} weight="bold" />
						</ActionIcon>
					</Menu.Target>
					<Menu.Dropdown>
						<Menu.Item icon={<NotePencil size={18} />}>Edit</Menu.Item>
						<Menu.Item icon={<UserCircle size={18} />}>Details</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			)
		},
	},
]
