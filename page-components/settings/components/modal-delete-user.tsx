import React from 'react'

import { ModalConfirm, ModalOpenedProps } from '@/components'

const ModalDeleteUser = (props: ModalOpenedProps) => {
	return (
		<ModalConfirm
			title="Delete user"
			message="Are you sure you want to delete this user?"
			{...props}
		/>
	)
}

export default ModalDeleteUser
