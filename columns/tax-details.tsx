import React from 'react'
import { ActionIcon, Flex, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, LockSimple, NotePencil } from '@phosphor-icons/react'

import { EditTaxRateModal } from '@/page-components/settings/taxes/components'
import { MantineDataTableColumn } from '@/types/datatable'
import { TaxDetailEntity } from '@/types/tax'
import { getValue } from '@/utils'

const Actions = () => {
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
				</Menu.Dropdown>
			</Menu>
			<EditTaxRateModal opened={opened} onClose={close} />
		</>
	)
}

export const TAX_DETAIL_COLUMNS: MantineDataTableColumn<TaxDetailEntity> = [
	{
		accessor: 'name',
		title: 'Name',
		width: '45%',
		render: ({ name }) => {
			return (
				<Flex align="center" gap={4} className="text-gray-400">
					<LockSimple size={14} />
					<span>{name}</span>
				</Flex>
			)
		},
	},
	{
		accessor: 'code',
		title: 'Code',
		width: '20%',
		render: ({ code }) => {
			return getValue(code)
		},
	},
	{
		accessor: 'rate',
		title: 'Tax rate',
		width: '30%',
		render: ({ rate = 0 }) => {
			return rate + ' %'
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
