import React from 'react'
import { Button, Flex } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

const DiscountActions = () => {
	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<Plus size={16} />}
				>
					Add Discount
				</Button>
			</Flex>
		</>
	)
}

export default DiscountActions
