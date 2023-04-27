import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { PRICING_PRODUCT_COLUMNS } from '@/columns/pricing'
import { InputSearch, Modal, Table } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'
import { PAGE_SIZE } from '@/constants/pagination'
import { useProducts } from '@/lib/product'

const AddProductsModal = (props: ModalOpenedProps) => {
	const { data, isLoading } = useProducts()
	const { control } = useForm()

	return (
		<Modal
			title="Add product"
			size="xl"
			cancelText="Close"
			confirmText="Save"
			zIndex={201}
			{...props}
		>
			<form>
				<Flex justify="flex-end" align="center" className="mb-4">
					<InputSearch name="search" control={control} />
				</Flex>
			</form>
			<Table
				records={data}
				columns={PRICING_PRODUCT_COLUMNS}
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

export default AddProductsModal
