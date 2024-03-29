import React from 'react'

import { ModalConfirm, ModalOpenedProps } from '@/components'

const ModalDeleteProduct = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete product"
			message="Are you sure you want to delete this product?"
			{...props}
		/>
	)
}

export default ModalDeleteProduct
