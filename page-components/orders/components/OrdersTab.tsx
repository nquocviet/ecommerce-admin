import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Flex } from '@mantine/core'
import { FunnelSimple } from '@phosphor-icons/react'

import { columns } from '@/columns/order'
import { InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { useOrders } from '@/lib/order'

const OrdersTab = () => {
	const { data, isLoading } = useOrders()
	const { control } = useForm()

	console.log(data)

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
				columns={columns}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				page={1}
				onPageChange={() => null}
			/>
		</>
	)
}

export default OrdersTab
