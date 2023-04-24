import React from 'react'
import { Button, Flex } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

const DraftActions = () => {
	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<Plus size={16} />}
				>
					Create draft order
				</Button>
			</Flex>
		</>
	)
}

export default DraftActions
