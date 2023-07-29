import React from 'react'
import { ActionIcon, Badge, Flex, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Copy, DotsThree, Lock, NotePencil, Trash } from '@phosphor-icons/react'
import Link from 'next/link'

import { Dots } from '@/components'
import { ROUTES } from '@/constants/routes'
import { ModalDeleteDiscount } from '@/page-components/discounts/components'
import { MantineDataTableColumn } from '@/types/datatable'
import { DiscountEntity } from '@/types/discount'
import { getValue, toCapitalize } from '@/utils'

type DiscountActionsProps = {
	id: string
}

const DiscountActions = ({ id }: DiscountActionsProps) => {
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
							pathname: ROUTES.DISCOUNT_DETAILS,
							query: { id },
						}}
						icon={<NotePencil size={20} />}
					>
						Edit
					</Menu.Item>
					<Menu.Item icon={<Lock size={20} />}>Unpublish</Menu.Item>
					<Menu.Item icon={<Copy size={20} />}>Duplicate</Menu.Item>
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
			<ModalDeleteDiscount opened={opened} onClose={close} />
		</>
	)
}

export const DISCOUNT_COLUMNS: MantineDataTableColumn<DiscountEntity> = [
	{
		accessor: 'code',
		title: 'Code',
		width: '15%',
		render: ({ code }) => {
			return (
				<Badge
					color="gray"
					sx={{
						height: '28px',
						fontSize: '13px',
						fontWeight: 600,
					}}
				>
					{code}
				</Badge>
			)
		},
	},
	{
		accessor: 'description',
		title: 'Description',
		width: '45%',
		render: ({ rule }) => {
			return getValue(rule?.description)
		},
	},
	{
		accessor: 'amount',
		title: 'Amount',
		width: '15%',
		render: ({ rule }) => {
			return rule?.type === 'free_shipping' ? 'Free Shipping' : `${rule.value}%`
		},
	},
	{
		accessor: 'status',
		title: 'Status',
		width: '10%',
		render: ({ is_disabled }) => {
			const color = is_disabled ? 'gray' : 'green'
			const text = is_disabled ? 'disabled' : 'active'

			return (
				<Flex align="center" className="whitespace-nowrap" gap={8}>
					<Dots size={6} color={color} />
					{toCapitalize(text)}
				</Flex>
			)
		},
	},
	{
		accessor: 'usage_count',
		title: 'Redemptions',
		width: '10%',
	},
	{
		accessor: '',
		title: '',
		width: '5%',
		render: ({ id }) => {
			return <DiscountActions id={id} />
		},
	},
]
