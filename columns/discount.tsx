import React from 'react'
import { ActionIcon, Badge, Flex, Menu } from '@mantine/core'
import { Copy, DotsThree, Lock, NotePencil, Trash } from '@phosphor-icons/react'

import { Dots } from '@/components'
import { TDataTableColumn } from '@/types/datatable'
import { toCapitalize } from '@/utils'

export const columns: TDataTableColumn = [
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
			return rule?.description || '-'
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
				<Flex align="center" gap={8}>
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
						<Menu.Item icon={<Lock size={18} />}>Unpublish</Menu.Item>
						<Menu.Item icon={<Copy size={18} />}>Duplicate</Menu.Item>
						<Menu.Item
							icon={<Trash size={18} />}
							sx={{
								color: 'var(--red-600)',
							}}
						>
							Delete
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			)
		},
	},
]
