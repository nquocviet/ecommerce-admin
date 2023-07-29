import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { PRICING_COLUMNS } from '@/columns/pricing'
import { FilterPopover, InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { usePricing } from '@/lib/pricing'

const filterOptions = [
	{ value: 'status', label: 'Status' },
	{ value: 'type', label: 'Type' },
]

const PricingsTab = () => {
	const { data, isLoading } = usePricing()
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
				columns={PRICING_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</>
	)
}

export default PricingsTab
