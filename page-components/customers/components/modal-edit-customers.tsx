import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { CUSTOMERS_COLUMNS } from '@/columns/customer-group'
import { InputSearch, Modal, Table } from '@/components'
import { ModalOpenedProps } from '@/components/modal'
import { PAGE_SIZE } from '@/constants/pagination'
import { useCustomers } from '@/lib/customer'

const ModalEditCustomers = (props: ModalOpenedProps) => {
	const { control } = useForm()
	const { data, isLoading } = useCustomers()

	return (
		<Modal {...props} title="Edit customers" size="xl" confirmText="Save">
			<form>
				<Flex justify="flex-end" className="mb-4">
					<InputSearch name="search" control={control} />
				</Flex>
				<Table
					records={data}
					columns={CUSTOMERS_COLUMNS}
					fetching={isLoading}
					totalRecords={data?.length}
					recordsPerPage={PAGE_SIZE}
					page={1}
					onPageChange={() => null}
					minHeight={450}
					minWidth="auto"
				/>
			</form>
		</Modal>
	)
}

export default ModalEditCustomers
