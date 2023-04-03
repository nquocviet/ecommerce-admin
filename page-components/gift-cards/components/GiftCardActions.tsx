import React from 'react'
import { Button, Flex } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

const GiftCardActions = () => {
	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<Plus size={16} />}
				>
					Custom Gift Card
				</Button>
			</Flex>
		</>
	)
}

export default GiftCardActions
