import React from 'react'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import { ModalAddEditCustomerGroup } from '@/page-components/customers/components'

const GroupActions = () => {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<Plus size={16} />}
					onClick={open}
				>
					New group
				</Button>
			</Flex>
			<ModalAddEditCustomerGroup opened={opened} onClose={close} />
		</>
	)
}

export default GroupActions
