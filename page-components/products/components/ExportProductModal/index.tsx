import React from 'react'
import { Button, Text } from '@mantine/core'

import { Modal, ModalAction } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const ExportProductModal = ({ opened, onClose }: ModalOpenedProps) => {
	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title="Export Products"
			size="md"
			action={
				<ModalAction>
					<Button
						size="sm"
						color="gray"
						variant="outline"
						onClick={() => onClose()}
					>
						Cancel
					</Button>
					<Button size="sm">Export</Button>
				</ModalAction>
			}
			centered
		>
			<Text className="text-gray-600">Initialize an export of your data</Text>
		</Modal>
	)
}

export default ExportProductModal
