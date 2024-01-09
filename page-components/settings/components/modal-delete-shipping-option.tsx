import React from 'react'

import { ModalConfirm, ModalOpenedProps } from '@/components'

const ModalDeleteShippingOption = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete shipping option"
			message="Are you sure you want to delete this shipping option?"
			{...props}
		/>
	)
}

export default ModalDeleteShippingOption
