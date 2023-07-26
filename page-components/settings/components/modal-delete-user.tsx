import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/modal'

const ModalDeleteUser = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete product"
			message="Are you sure you want to delete this product?"
			{...props}
		/>
	)
}

export default ModalDeleteUser
