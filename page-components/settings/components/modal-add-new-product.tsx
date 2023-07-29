import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { SALE_CHANNEL_PRODUCT_COLUMNS } from '@/columns/sale-channel'
import { FilterPopover, InputSearch, Modal, Table } from '@/components'
import { ModalOpenedProps } from '@/components/modal'
import { PAGE_SIZE } from '@/constants/pagination'
import { useProducts } from '@/lib/product'

const filterOptions = [
	{ value: 'status', label: 'Status' },
	{ value: 'collection', label: 'Collection' },
	{ value: 'tags', label: 'Tags' },
]

const ModalAddNewProduct = (props: ModalOpenedProps) => {
	const { data, isLoading } = useProducts()
	const { control } = useForm()

	return (
		<Modal
			title="Add product"
			size="xl"
			cancelText="Close"
			confirmText="Save"
			{...props}
		>
			<form>
				<Flex justify="space-between" align="center" className="mb-4">
					<FilterPopover filterOptions={filterOptions} />
					<InputSearch name="search" control={control} />
				</Flex>
			</form>
			<Table
				records={data}
				columns={SALE_CHANNEL_PRODUCT_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				minWidth="auto"
				size="sm"
				page={1}
				onPageChange={() => null}
			/>
		</Modal>
	)
}

export default ModalAddNewProduct
