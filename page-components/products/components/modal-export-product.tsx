import React from 'react'
import { Text } from '@mantine/core'

import { Modal, ModalOpenedProps } from '@/components'

const ModalExportProduct = (props: ModalOpenedProps) => {
	return (
		<Modal title="Export products" size="md" confirmText="Export" {...props}>
			<Text className="text-gray-500">Initialize an export of your data</Text>
		</Modal>
	)
}

export default ModalExportProduct
