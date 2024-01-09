import React from 'react'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import { ModalAddCollection } from '@/page-components/products/components'

const CollectionActions = () => {
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
					New collection
				</Button>
			</Flex>
			<ModalAddCollection opened={opened} onClose={close} />
		</>
	)
}

export default CollectionActions
