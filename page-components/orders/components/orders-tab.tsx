import React from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '@mantine/core'
import { useRouter } from 'next/router'

import { ORDER_COLUMNS } from '@/columns/order'
import { FilterPopover, InputSearch, Table } from '@/components'
import { PAGE_SIZE } from '@/constants/pagination'
import { ROUTES } from '@/constants/routes'
import { useOrders } from '@/lib/order'

const filterOptions = [
	{ value: 'status', label: 'Status' },
	{ value: 'payment_status', label: 'Payment status' },
	{ value: 'fulfillment_status', label: 'Fulfillment status' },
	{ value: 'regions', label: 'Regions' },
	{ value: 'date', label: 'Date' },
]

const OrdersTab = () => {
	const { data, isLoading } = useOrders()
	const { control } = useForm()
	const router = useRouter()

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
				columns={ORDER_COLUMNS}
				fetching={isLoading}
				totalRecords={data?.length}
				recordsPerPage={PAGE_SIZE}
				minWidth={900}
				page={1}
				onPageChange={() => null}
				onRowClick={({ id }) =>
					router.push({
						pathname: ROUTES.ORDER_DETAILS,
						query: { id },
					})
				}
				highlightOnHover
			/>
		</>
	)
}

export default OrdersTab
