import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const DeleteCustomerModal = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete customer"
			message="Are you sure you want to delete this customer?"
			{...props}
		/>
	)
}

export default DeleteCustomerModal
