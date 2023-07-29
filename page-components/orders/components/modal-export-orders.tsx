import React from 'react'
import { Text } from '@mantine/core'

import { Modal, ModalOpenedProps } from '@/components'

const ModalExportOrders = (props: ModalOpenedProps) => {
	return (
		<Modal title="Export orders" size="md" confirmText="Export" {...props}>
			<Text className="text-gray-600">Initialize an export of your data</Text>
		</Modal>
	)
}

export default ModalExportOrders
