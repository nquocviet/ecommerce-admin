import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { PRODUCT_COLUMNS } from '@/columns/product'
import { FilterPopover, InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useProducts } from '@/lib/product'

const filterOptions = [
	{ value: 'status', label: 'Status' },
	{ value: 'collection', label: 'Collection' },
	{ value: 'tags', label: 'Tags' },
]

const ProductsTab = () => {
	const { data, isLoading } = useProducts()
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
				columns={PRODUCT_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</>
	)
}

export default ProductsTab
