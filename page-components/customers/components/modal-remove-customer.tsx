import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/modal'

const ModalRemoveCustomer = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Remove customer"
			message="Are you sure you want to remove this customer from this group?"
			{...props}
		/>
	)
}

export default ModalRemoveCustomer
