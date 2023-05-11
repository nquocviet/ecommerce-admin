import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const DeleteCustomerGroupModal = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete group"
			message="Are you sure you want to delete this group?"
			{...props}
		/>
	)
}

export default DeleteCustomerGroupModal
