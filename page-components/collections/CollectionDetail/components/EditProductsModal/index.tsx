import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'

import { COLLECTION_PRODUCTS_COLUMNS } from '@/columns/collection-detail'
import { InputSearch, Modal, ModalAction, Table } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'
import { PAGE_SIZE } from '@/constants/pagination'
import { useProducts } from '@/lib/product'

const EditProductsModal = ({ opened, onClose }: ModalOpenedProps) => {
	const { data, isLoading } = useProducts()
	const { control } = useForm()

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title="Add products"
			size="xl"
			action={
				<ModalAction>
					<Button
						size="sm"
						color="gray"
						variant="outline"
						onClick={() => onClose()}
					>
						Cancel
					</Button>
					<Button size="sm">Save</Button>
				</ModalAction>
			}
			centered
		>
			<Flex justify="flex-end">
				<form>
					<InputSearch name="search" control={control} placeholder="Search" />
				</form>
			</Flex>
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
