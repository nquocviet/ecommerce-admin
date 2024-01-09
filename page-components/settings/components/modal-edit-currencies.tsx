import React from 'react'
import { Button, Flex } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

import { CURRENCY_COLUMNS } from '@/columns/currency'
import { Modal, ModalOpenedProps, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'

const data = [
	{ id: 1, value: 'EUR', name: 'EUR (Euro)' },
	{ id: 2, value: 'USD', name: 'USD (US Dollar)' },
]

const ModalEditCurrencies = (props: ModalOpenedProps) => {
	return (
		<Modal
			title="Current store currencies"
			size="xl"
			cancelText={null}
			confirmText="Close"
			{...props}
		>
			<Flex direction="column" align="stretch" className="min-h-[50vh]">
				<Flex justify="space-between" align="center" gap={16}>
					<Flex align="center" gap={12}></Flex>
					<Button
						color="gray"
						variant="outline"
						size="xs"
						leftIcon={<Plus size={16} />}
					>
						Add currencies
					</Button>
				</Flex>
				<Table
					records={data}
					columns={CURRENCY_COLUMNS}
					totalRecords={data?.length}
					recordsPerPage={PAGE_SIZE}
					minWidth="auto"
					className="grow"
					size="sm"
					page={1}
					onPageChange={() => null}
				/>
			</Flex>
		</Modal>
	)
}

export default ModalEditCurrencies
