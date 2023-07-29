import React from 'react'
import { Flex, Grid } from '@mantine/core'

import { Loader } from '@/components'
import { useOrderDetails } from '@/lib/order'
import {
	OrderCustomer,
	OrderFulfillment,
	OrderGeneralInformation,
	OrderMetadata,
	OrderSummary,
	OrderTimeline,
} from '@/page-components/orders/[id]/components'

const OrderDetails = () => {
	const { isLoading } = useOrderDetails()

	if (isLoading) return <Loader />

	return (
		<>
			<Grid>
				<Grid.Col span={8}>
					<Flex direction="column" align="stretch" gap={16}>
						<OrderGeneralInformation />
						<OrderSummary />
						<OrderFulfillment />
						<OrderCustomer />
						<OrderMetadata />
					</Flex>
				</Grid.Col>
				<Grid.Col span={4}>
					<Flex direction="column" align="stretch" gap={16}>
						<OrderTimeline />
					</Flex>
				</Grid.Col>
			</Grid>
		</>
	)
}

export default OrderDetails
