import React from 'react'
import { Flex, Grid } from '@mantine/core'

import { Loader, Meta } from '@/components'
import { APP_DOMAIN, APP_NAME } from '@/constants/common'
import { ROUTES } from '@/constants/routes'
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
	const { data, isLoading } = useOrderDetails()

	if (isLoading) return <Loader />

	return (
		<>
			<Meta
				title={`Order #${data?.display_id} | ${APP_NAME}`}
				canonical={`${APP_DOMAIN}${ROUTES.ORDERS}`}
			/>
			<Grid>
				<Grid.Col md={8}>
					<Flex direction="column" align="stretch" gap={16}>
						<OrderGeneralInformation />
						<OrderSummary />
						<OrderFulfillment />
						<OrderCustomer />
						<OrderMetadata />
					</Flex>
				</Grid.Col>
				<Grid.Col md={4}>
					<Flex direction="column" align="stretch" gap={16}>
						<OrderTimeline />
					</Flex>
				</Grid.Col>
			</Grid>
		</>
	)
}

export default OrderDetails
