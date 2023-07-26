import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/modal'

const ModalDeleteDenomination = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete denomination"
			message="Are you sure you want to delete this denomination?"
			{...props}
		/>
	)
}

export default ModalDeleteDenomination
