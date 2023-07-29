import React from 'react'
import { Button, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DownloadSimple } from '@phosphor-icons/react'

import { ModalExportOrders } from '@/page-components/orders/components'

const OrderActions = () => {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<DownloadSimple size={16} />}
					onClick={open}
				>
					Export orders
				</Button>
			</Flex>
			<ModalExportOrders opened={opened} onClose={close} />
		</>
	)
}

export default OrderActions
