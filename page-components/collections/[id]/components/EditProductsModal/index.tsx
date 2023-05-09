import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'

import { COLLECTION_PRODUCTS_COLUMNS } from '@/columns/collection-details'
import { InputSearch, Modal, Table } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'
import { PAGE_SIZE } from '@/constants/pagination'
import { useProducts } from '@/lib/product'

const EditProductsModal = (props: ModalOpenedProps) => {
	const { data, isLoading } = useProducts()
	const { control } = useForm()

	return (
		<Modal title="Add products" size="xl" confirmText="Save" {...props}>
			<form>
				<Flex justify="flex-end">
					<InputSearch name="search" control={control} placeholder="Search" />
				</Flex>
			</form>
			<Table
				records={data}
				columns={COLLECTION_PRODUCTS_COLUMNS}
				fetching={isLoading}
				minWidth="auto"
				totalRecords={data?.length}
				page={1}
				recordsPerPage={PAGE_SIZE}
				onPageChange={() => null}
				disableHead
			/>
		</Modal>
	)
}

export default EditProductsModal
