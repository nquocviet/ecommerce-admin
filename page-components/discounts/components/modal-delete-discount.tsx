import React from 'react'

import { ModalConfirm, ModalOpenedProps } from '@/components'

const ModalDeleteDiscount = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete discount"
			message="Are you sure you want to delete this discount?"
			{...props}
		/>
	)
}

export default ModalDeleteDiscount
