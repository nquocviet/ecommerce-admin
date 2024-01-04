import React from 'react'

import { ModalConfirm, ModalOpenedProps } from '@/components'

const ModalDeleteCustomerGroup = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete group"
			message="Are you sure you want to delete this group?"
			{...props}
		/>
	)
}

export default ModalDeleteCustomerGroup
