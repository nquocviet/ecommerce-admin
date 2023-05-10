import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/Modal'

const DeleteProductGiftCardModal = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete product gift card"
			message="Are you sure you want to delete this product gift card?"
			{...props}
		/>
	)
}

export default DeleteProductGiftCardModal
