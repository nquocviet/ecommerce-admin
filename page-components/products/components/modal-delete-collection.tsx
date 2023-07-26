import React from 'react'

import { ModalConfirm } from '@/components'
import { ModalOpenedProps } from '@/components/modal'

const ModalDeleteCollection = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete collection"
			message="Are you sure you want to delete this collection?"
			{...props}
		/>
	)
}

export default ModalDeleteCollection
