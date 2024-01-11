import React from 'react'
import { Flex, Text } from '@mantine/core'

import { PageTitle, Paper } from '@/components'

const OrderSummary = () => {
	return (
		<Paper>
			<PageTitle order={2} size="sm" title="Summary" className="mb-8" />
			<div>
				<Flex justify="space-between" align="center" className="mb-4 last:mb-0">
					<Text className="text-sm text-gray-500">Subtotal</Text>
					<Text className="text-sm text-gray-500">€25.00 EUR</Text>
				</Flex>
				<Flex justify="space-between" align="center" className="mb-4 last:mb-0">
					<Text className="text-sm text-gray-500">Shipping</Text>
					<Text className="text-sm text-gray-500">€10.00 EUR</Text>
				</Flex>
				<Flex justify="space-between" align="center" className="mb-4 last:mb-0">
					<Text className="text-sm text-gray-500">Tax</Text>
					<Text className="text-sm text-gray-500">€0.00 EUR</Text>
				</Flex>
				<Flex justify="space-between" align="center" className="mb-4 last:mb-0">
					<Text className="text-sm font-semibold text-gray-500">Total</Text>
					<Text className="text-xl font-semibold text-black">€35.00 EUR</Text>
				</Flex>
			</div>
		</Paper>
	)
}

export default OrderSummary
