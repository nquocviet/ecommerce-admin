import React from 'react'

import { ModalConfirm, ModalOpenedProps } from '@/components'

const ModalDeleteProductGiftCard = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete product gift card"
			message="Are you sure you want to delete this product gift card?"
			{...props}
		/>
	)
}

export default ModalDeleteProductGiftCard
