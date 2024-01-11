import React from 'react'

import { ModalConfirm, ModalOpenedProps } from '@/components'

const ModalCancelOrder = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Cancel order"
			message="Are you sure you want to cancel this order?"
			{...props}
		/>
	)
}

export default ModalCancelOrder
