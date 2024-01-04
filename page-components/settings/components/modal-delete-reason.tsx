import React from 'react'

import { ModalConfirm, ModalOpenedProps } from '@/components'

const ModalDeleteReason = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete reason"
			message="Are you sure you want to delete this reason?"
			{...props}
		/>
	)
}

export default ModalDeleteReason
