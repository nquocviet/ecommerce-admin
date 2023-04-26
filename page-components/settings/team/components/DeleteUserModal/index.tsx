import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const DeleteUserModal = ({ opened, onClose }: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete product"
			opened={opened}
			onClose={onClose}
			message="Are you sure you want to delete this product?"
		/>
	)
}

export default DeleteUserModal
