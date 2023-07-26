import React, { ReactNode } from 'react'
import { ModalProps, Text } from '@mantine/core'

import { Modal } from '@/components'

interface ModalConfirmProps extends ModalProps {
	title: string
	message: ReactNode
	cancelText?: string
	confirmText?: string
}

const ModalConfirm = ({
	title,
	message,
	cancelText = 'Cancel',
	confirmText = 'Yes, confirm',
	opened,
	onClose,
}: ModalConfirmProps) => {
	return (
		<Modal
			title={title}
			opened={opened}
			onClose={onClose}
			size="lg"
			cancelText={cancelText}
			confirmText={confirmText}
			confirmation
		>
			<Text className="text-gray-600">{message}</Text>
		</Modal>
	)
}

export default ModalConfirm
