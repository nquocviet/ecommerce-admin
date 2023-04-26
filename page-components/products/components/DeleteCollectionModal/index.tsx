import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const DeleteCollectionModal = ({ opened, onClose }: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete collection"
			opened={opened}
			onClose={onClose}
			message="Are you sure you want to delete this collection?"
		/>
	)
}

export default DeleteCollectionModal
