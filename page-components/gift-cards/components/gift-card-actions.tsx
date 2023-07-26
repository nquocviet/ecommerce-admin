import React from 'react'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import { ModalCustomGiftCard } from '@/page-components/gift-cards/components'

const GiftCardActions = () => {
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
					Custom gift card
				</Button>
			</Flex>
			<ModalCustomGiftCard opened={opened} onClose={close} />
		</>
	)
}

export default GiftCardActions
