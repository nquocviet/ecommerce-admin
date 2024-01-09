import React from 'react'

import { ModalConfirm, ModalOpenedProps } from '@/components'

const ModalDeleteThumbnail = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete thumbnail"
			message="Are you sure you want to delete this thumbnail?"
			{...props}
		/>
	)
}

export default ModalDeleteThumbnail
