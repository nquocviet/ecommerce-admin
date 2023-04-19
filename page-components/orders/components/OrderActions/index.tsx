import React from 'react'
import { Button, Flex } from '@mantine/core'
import { DownloadSimple } from '@phosphor-icons/react'

const OrderActions = () => {
	return (
		<>
			<Flex className="ml-auto -mt-2" gap={12}>
				<Button
					variant="outline"
					color="gray"
					size="xs"
					leftIcon={<DownloadSimple size={16} />}
				>
					Export Orders
				</Button>
			</Flex>
		</>
	)
}

export default OrderActions
