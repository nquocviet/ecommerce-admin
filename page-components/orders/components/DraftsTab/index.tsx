import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { ORDER_DRAFT_COLUMNS } from '@/columns/order-draft'
import { InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useOrderDrafts } from '@/lib/order-draft'

const DraftsTab = () => {
	const { data, isLoading } = useOrderDrafts()
	const { control } = useForm()

	return (
		<>
			<form>
				<Flex justify="flex-end" align="center" className="mb-4">
					<InputSearch name="search" control={control} />
				</Flex>
			</form>
			<Table
				records={data}
				columns={ORDER_DRAFT_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</>
	)
}

export default DraftsTab
