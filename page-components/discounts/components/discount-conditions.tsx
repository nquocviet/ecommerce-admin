import React from 'react'
import { Button, Flex, Text } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

const DiscountConditions = () => {
	return (
		<>
			<Flex direction="column" align="stretch" gap={20}>
				<Text className="text-sm text-gray-500">
					Discount code apply to all products if left untouched.
				</Text>
				<Button color="gray" variant="outline" leftIcon={<Plus size={16} />}>
					Add condition
				</Button>
			</Flex>
		</>
	)
}

export default DiscountConditions
