import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const DeleteUserModal = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete product"
			message="Are you sure you want to delete this product?"
			{...props}
		/>
	)
}

export default DeleteUserModal
