import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { FunnelSimple } from '@phosphor-icons/react'

import { PRODUCT_COLUMNS } from '@/columns/product'
import { InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useProducts } from '@/lib/product'

const ProductsTab = () => {
	const { data, isLoading } = useProducts()
	const { control } = useForm()

	return (
		<>
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
