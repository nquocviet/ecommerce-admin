import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/modal'

const ModalDeletePrice = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete price"
			message="Are you sure you want to delete this price?"
			{...props}
		/>
	)
}

export default ModalDeletePrice
