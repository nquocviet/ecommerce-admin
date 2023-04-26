import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { FunnelSimple } from '@phosphor-icons/react'

import { SALE_CHANNEL_PRODUCT_COLUMNS } from '@/columns/sale-channel'
import { InputSearch, Modal, Table } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'
import { PAGE_SIZE } from '@/constants/pagination'
import { useProducts } from '@/lib/product'

const AddNewProductModal = (props: ModalOpenedProps) => {
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
					<Button
						color="gray"
						variant="outline"
						size="xs"
						rightIcon={<FunnelSimple size={16} />}
					>
						Filters
					</Button>
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

export default AddNewProductModal
