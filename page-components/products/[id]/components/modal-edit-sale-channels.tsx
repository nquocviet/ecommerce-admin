import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

import { CURRENT_SALE_CHANNEL_COLUMNS } from '@/columns/sale-channel'
import { InputSearch, Modal, ModalOpenedProps, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useSalesChannels } from '@/lib/sales-channel'

const ModalEditSaleChannels = (props: ModalOpenedProps) => {
	const { control } = useForm()
	const { isLoading, data } = useSalesChannels()

	return (
		<Modal
			title="Current sales channels"
			size="xl"
			confirmText="Save"
			{...props}
		>
			<form>
				<Flex direction="column" align="stretch" className="min-h-[50vh]">
					<Flex justify="flex-end" align="center" gap={16} className="mb-4">
						<Button
							color="gray"
							variant="outline"
							leftIcon={<Plus size={16} />}
						>
							Add channels
						</Button>
						<InputSearch name="search" control={control} />
					</Flex>
					<Table
						records={data}
						columns={CURRENT_SALE_CHANNEL_COLUMNS}
						fetching={isLoading}
						totalRecords={data?.length}
						recordsPerPage={PAGE_SIZE}
						minWidth="auto"
						size="sm"
						className="grow"
						page={1}
						onPageChange={() => null}
					/>
				</Flex>
			</form>
		</Modal>
	)
}

export default ModalEditSaleChannels
