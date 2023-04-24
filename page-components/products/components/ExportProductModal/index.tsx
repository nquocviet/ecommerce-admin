import React from 'react'
import { Text } from '@mantine/core'

import { Modal } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const ExportProductModal = ({ opened, onClose }: ModalOpenedProps) => {
	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title="Export products"
			size="md"
			confirmText="Export"
		>
			<Text className="text-gray-600">Initialize an export of your data</Text>
		</Modal>
	)
}

export default ExportProductModal
