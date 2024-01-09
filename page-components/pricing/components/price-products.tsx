import React from 'react'
import { Button, Flex, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from '@phosphor-icons/react'

import { ModalAddProducts } from '@/page-components/pricing/components'

const PriceProducts = () => {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Flex direction="column" align="stretch" gap={20}>
				<Text className="text-sm text-gray-500">
					You will be able to override the prices for the products you add here
				</Text>
				<Button
					color="gray"
					variant="outline"
					leftIcon={<Plus size={16} />}
					onClick={open}
				>
					Add products manually
				</Button>
			</Flex>
			<ModalAddProducts opened={opened} onClose={close} />
		</>
	)
}

export default PriceProducts
