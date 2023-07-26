import React from 'react'
import { Text } from '@mantine/core'

import { Modal } from '@/components'
import { ModalOpenedProps } from '@/components/modal'

const ModalExportProduct = (props: ModalOpenedProps) => {
	return (
		<Modal title="Export products" size="md" confirmText="Export" {...props}>
			<Text className="text-gray-600">Initialize an export of your data</Text>
		</Modal>
	)
}

export default ModalExportProduct
