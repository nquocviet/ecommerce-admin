import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { CUSTOMER_COLUMNS } from '@/columns/customer'
import { InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useCustomers } from '@/lib/customer'

const CustomersTab = () => {
	const { data, isLoading } = useCustomers()
	const { control } = useForm()

	return (
		<>
			<form>
				<Flex justify="flex-end" align="center" gap={12} className="mb-4">
					<InputSearch name="search" control={control} />
				</Flex>
			</form>
			<Table
				records={data}
				columns={CUSTOMER_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</>
	)
}

export default CustomersTab
