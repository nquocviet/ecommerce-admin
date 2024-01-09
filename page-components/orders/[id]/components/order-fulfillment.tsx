import React from 'react'
import { Button, Text } from '@mantine/core'

import { JSONView, PageTitle, Paper } from '@/components'
import { useOrderDetails } from '@/lib/order'

const OrderFulfillment = () => {
	const { data } = useOrderDetails()

	return (
		<Paper>
			<PageTitle
				order={2}
				size="sm"
				title="Fulfillment"
				className="mb-8"
				action={
					<Button size="xs" color="gray" variant="outline">
						Create fulfillment
					</Button>
				}
			/>
			<Text className="text-sm text-gray-500">Shipping Method</Text>
			<JSONView
				data={{ shipping_methods: data?.shipping_methods }}
				className="mt-4"
			/>
		</Paper>
	)
}

export default OrderFulfillment
