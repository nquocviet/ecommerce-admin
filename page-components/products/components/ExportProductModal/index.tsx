import React from 'react'
import { Button, Modal, Text } from '@mantine/core'

import { ModalAction } from '@/components'

type ExportProductModalProps = {
	opened: boolean
	onClose: (value?: React.SetStateAction<boolean>) => void
}

const ExportProductModal = ({ opened, onClose }: ExportProductModalProps) => {
	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title="Export Products"
			size="md"
			centered
		>
			<Text className="text-gray-600">Initialize an export of your data</Text>
			<ModalAction>
				<Button color="gray" variant="outline" onClick={() => onClose()}>
					Cancel
				</Button>
				<Button>Export</Button>
			</ModalAction>
		</Modal>
	)
}

export default ExportProductModal
