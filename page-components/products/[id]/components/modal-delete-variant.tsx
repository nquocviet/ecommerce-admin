import React from 'react'

import { ModalConfirm, ModalOpenedProps } from '@/components'

const ModalDeleteVariant = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete variant"
			message="Are you sure you want to delete this variant?"
			{...props}
		/>
	)
}

export default ModalDeleteVariant
