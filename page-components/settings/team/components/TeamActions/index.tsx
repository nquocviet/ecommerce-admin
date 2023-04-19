import React from 'react'
import { Button, Flex } from '@mantine/core'
import { Plus } from '@phosphor-icons/react'

const TeamActions = () => {
	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<Plus size={16} />}
				>
					Invite Users
				</Button>
			</Flex>
		</>
	)
}

export default TeamActions
