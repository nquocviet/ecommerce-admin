import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/modal'

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
