import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { DISCOUNT_COLUMNS } from '@/columns/discount'
import { FilterPopover, InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useDiscounts } from '@/lib/discount'

const filterOptions = [{ value: 'types', label: 'Types' }]

const DiscountsTab = () => {
	const { data, isLoading } = useDiscounts()
	const { control } = useForm()

	return (
		<>
			<form>
				<Flex justify="space-between" align="center" className="mb-4">
					<FilterPopover filterOptions={filterOptions} />
					<InputSearch name="search" control={control} />
				</Flex>
			</form>
			<Table
				records={data}
				columns={DISCOUNT_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</>
	)
}

export default DiscountsTab
