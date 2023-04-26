import React from 'react'
import { Text } from '@mantine/core'

import { Modal } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const ExportProductModal = (props: ModalOpenedProps) => {
	return (
		<Modal title="Export products" size="md" confirmText="Export" {...props}>
			<Text className="text-gray-600">Initialize an export of your data</Text>
		</Modal>
	)
}

export default ExportProductModal
