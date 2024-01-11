import React from 'react'
import { Button, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { JSONView, PageTitle, Paper } from '@/components'
import { useOrderDetails } from '@/lib/order'
import { ModalAddFulfillment } from '@/page-components/orders/[id]/components'

const OrderFulfillment = () => {
	const { data } = useOrderDetails()
	const [
		addFulfillmentOpened,
		{ open: openAddFulfillment, close: closeAddFulfillment },
	] = useDisclosure(false)

	return (
		<>
			<Paper>
				<PageTitle
					order={2}
					size="sm"
					title="Fulfillment"
					className="mb-8"
					action={
						<Button
							size="xs"
							color="gray"
							variant="outline"
							onClick={openAddFulfillment}
						>
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
			<ModalAddFulfillment
				opened={addFulfillmentOpened}
				onClose={closeAddFulfillment}
			/>
		</>
	)
}

export default OrderFulfillment
