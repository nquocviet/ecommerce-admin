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
import { DotsThree, NotePencil, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'

import { ROUTES } from '@/constants/routes'
import { ModalEditCustomer } from '@/page-components/customers/components'
import { CustomerEntity, CustomerOrderEntity } from '@/types/customer'
import { MantineDataTableColumn } from '@/types/datatable'
import { formatDate } from '@/utils'

type CustomerActionsProps = {
	id: string
}

const CustomerActions = ({ id }: CustomerActionsProps) => {
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
						href={{
							pathname: ROUTES.CUSTOMER_DETAILS,
							query: { id },
						}}
						icon={<UserCircle size={20} />}
					>
						Details
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			<ModalEditCustomer opened={opened} onClose={close} />
		</>
	)
}

export const CUSTOMER_COLUMNS: MantineDataTableColumn<CustomerEntity> = [
	{
		accessor: 'created_at',
		title: 'Date added',
		width: '15%',
		render: ({ created_at }) => {
			return formatDate(created_at)
		},
	},
	{
		accessor: 'name',
		title: 'Name',
		width: '30%',
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
		width: '35%',
	},
	{
		accessor: 'orders',
		title: 'Orders',
		width: '15%',
		render: ({ orders }) => {
			return orders?.length
		},
	},
	{
		accessor: '',
		title: '',
		width: '5%',
		render: ({ id }) => {
			return <CustomerActions id={id} />
		},
	},
]

export const CUSTOMER_ORDERS_COLUMNS: MantineDataTableColumn<CustomerOrderEntity> =
	[
		{
			accessor: 'id',
			title: 'Order',
			width: '15%',
			render: ({ display_id }) => {
				return `#${display_id}`
			},
		},
		{
			accessor: 'created_at',
			title: 'Date',
			width: '40%',
			render: ({ created_at }) => {
				return formatDate(created_at, {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit',
				})
			},
		},
		{
			accessor: 'fulfillment_status',
			title: 'Fulfillment',
			width: '20%',
			cellsClassName: 'capitalize',
		},
		{
			accessor: 'status',
			title: 'Status',
			width: '20%',
			cellsClassName: 'capitalize',
		},
		{
			accessor: 'total',
			title: 'Total',
			width: '5%',
			render: () => {
				return 'N/A'
			},
		},
	]
