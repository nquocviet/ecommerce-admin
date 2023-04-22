import React, { ReactNode } from 'react'
import { Button, ModalProps, Text } from '@mantine/core'

import { Modal, ModalAction } from '@/components'

type ModalConfirmProps = ModalProps & {
	title: string
	message: ReactNode
	rejectMessage?: string
	acceptMessage?: string
}

const ModalConfirm = ({
	title,
	message,
	rejectMessage = 'Cancel',
	acceptMessage = 'Yes, confirm',
	opened,
	onClose,
}: ModalConfirmProps) => {
	return (
		<Modal
			title={title}
			opened={opened}
			onClose={onClose}
			size="lg"
			action={
				<ModalAction>
					<Button
						size="sm"
						color="gray"
						variant="outline"
						onClick={() => onClose()}
					>
						{rejectMessage}
					</Button>
					<Button color="red" size="sm">
						{acceptMessage}
					</Button>
				</ModalAction>
			}
			centered
		>
			<Text className="text-gray-600">{message}</Text>
		</Modal>
	)
}

export default ModalConfirm
