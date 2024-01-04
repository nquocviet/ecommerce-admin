import React from 'react'

import { ModalConfirm, ModalOpenedProps } from '@/components'

const ModalDeleteCustomer = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete customer"
			message="Are you sure you want to delete this customer?"
			{...props}
		/>
	)
}

export default ModalDeleteCustomer
