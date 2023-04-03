import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { columns } from '@/columns/customer'
import { InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useCustomers } from '@/lib/customer'

const CustomersTab = () => {
	const { data, isLoading } = useCustomers()
	const { control } = useForm()

	return (
		<>
			<Flex justify="flex-end" align="center" gap={12} className="mb-4">
				<form>
					<InputSearch name="search" control={control} />
				</form>
			</Flex>
			<Table
				records={data}
				columns={columns}
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
