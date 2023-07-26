import React from 'react'
import { ActionIcon, Flex, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DotsThree, LockSimple, NotePencil } from '@phosphor-icons/react'

import { ModalEditTaxRate } from '@/page-components/settings/components'
import { MantineDataTableColumn } from '@/types/datatable'
import { TaxDetailsEntity } from '@/types/tax'
import { getValue } from '@/utils'

const TaxActions = () => {
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
			<ModalEditTaxRate opened={opened} onClose={close} />
		</>
	)
}

export const TAX_DETAILS_COLUMNS: MantineDataTableColumn<TaxDetailsEntity> = [
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
			return <TaxActions />
		},
	},
]
