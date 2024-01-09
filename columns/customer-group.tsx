import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
	ActionIcon,
	Avatar,
	Checkbox as MantineCheckbox,
	Flex,
	MANTINE_COLORS,
	Menu,
	Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, Trash, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'

import { Checkbox } from '@/components'
import { ROUTES } from '@/constants/routes'
import { useCustomerGroupDetails } from '@/lib/customer'
import { ModalRemoveCustomer } from '@/page-components/customers/components'
import { CustomerEntity, CustomerGroupEntity } from '@/types/customer'
import { MantineDataTableColumn } from '@/types/datatable'
import { formatDate } from '@/utils'

type CustomerGroupActionsProps = {
	id: string
}

const CustomerGroupActions = ({ id }: CustomerGroupActionsProps) => {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Menu shadow="md" width={200}>
				<Menu.Target>
					<ActionIcon aria-label="More options">
						<DotsThree size={20} weight="bold" />
					</ActionIcon>
				</Menu.Target>
				<Menu.Dropdown>
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
			<ModalRemoveCustomer opened={opened} onClose={close} />
		</>
	)
}

export const CUSTOMER_GROUP_COLUMNS: MantineDataTableColumn<CustomerEntity> = [
	{
		accessor: 'name',
		title: 'Name',
		width: '35%',
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
		width: '30%',
	},
	{
		accessor: 'groups',
		title: 'Groups',
		width: '30%',
		render: ({ groups }) => {
			return (
				<Flex align="center" gap={8}>
					<Text>{groups?.[0].name}</Text>
					{groups.length > 1 && (
						<Text className="text-xs text-gray-500">
							+{groups.length - 1} more
						</Text>
					)}
				</Flex>
			)
		},
	},
	{
		accessor: 'action',
		title: '',
		width: '5%',
		render: ({ id }) => {
			return <CustomerGroupActions id={id} />
		},
	},
]

type CustomerCheckboxProps = {
	id: string
	index: number
}

const CustomerCheckbox = ({ id, index }: CustomerCheckboxProps) => {
	const { control, reset } = useForm()
	const { data } = useCustomerGroupDetails()
	const isChecked = data?.customers.some((customer) => customer.id === id)

	useEffect(() => {
		if (!data) return

		reset({
			[`customer-${index}`]: isChecked,
		})
	}, [index, isChecked, data, reset])

	return (
		<form>
			<Checkbox name={`customer-${index}`} control={control} />
		</form>
	)
}

export const CUSTOMERS_COLUMNS: MantineDataTableColumn<CustomerEntity> = [
	{
		accessor: 'no',
		title: '',
		width: '5%',
		render: ({ id }, index) => {
			return (
				<Flex justify="center">
					<CustomerCheckbox id={id} index={index} />
				</Flex>
			)
		},
	},
	{
		accessor: 'name',
		title: 'Name',
		width: '40%',
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
		width: '40%',
	},
	{
		accessor: 'created_at',
		title: 'Joined at',
		width: '15%',
		render: ({ created_at }) => {
			return formatDate(created_at)
		},
	},
]

export const CUSTOMERS_GROUP_CONDITION_COLUMNS: MantineDataTableColumn<CustomerGroupEntity> =
	[
		{
			accessor: 'no',
			title: '',
			width: '5%',
			render: () => {
				return (
					<Flex justify="center">
						<MantineCheckbox />
					</Flex>
				)
			},
		},
		{
			accessor: 'name',
			title: 'Title',
			width: '95%',
		},
	]
