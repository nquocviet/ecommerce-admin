import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const DeleteReasonModal = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete reason"
			message="Are you sure you want to delete this reason?"
			{...props}
		/>
	)
}

export default DeleteReasonModal
